-- ==============================================================================
-- SCHEMA COMPLETO PARA SUPABASE: PLATAFORMA PROFESIONAL DUAL (ABOGADO & NUTRIÓLOGO)
-- Incluye: RBAC (SuperAdmin, Admin, Cliente), RLS, Triggers y Datos Semilla
-- ==============================================================================

-- 1. EXTENSIONES
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. TIPOS ENUMERADOS
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('superadmin', 'admin', 'client');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE service_category AS ENUM ('legal', 'nutrition');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'completed', 'cancelled');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE blog_category AS ENUM ('derecho', 'nutricion', 'salud_sociedad');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. TABLAS PRINCIPALES

-- 3.1 TABLA: PROFILES (Perfiles vinculados a auth.users de Supabase)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT,
    role user_role NOT NULL DEFAULT 'client',
    avatar_url TEXT,
    bio TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.2 TABLA: SERVICES (Catálogo de Servicios Legales y de Nutrición)
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    category service_category NOT NULL,
    duration_minutes INTEGER NOT NULL DEFAULT 60 CHECK (duration_minutes > 0),
    price NUMERIC(10,2) NOT NULL DEFAULT 0.00 CHECK (price >= 0),
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.3 TABLA: AVAILABILITY (Horarios de disponibilidad del profesional)
-- day_of_week: 0 = Domingo, 1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves, 5 = Viernes, 6 = Sábado
CREATE TABLE IF NOT EXISTS public.availability (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    day_of_week SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL CHECK (end_time > start_time),
    category service_category NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.4 TABLA: APPOINTMENTS (Citas agendadas)
CREATE TABLE IF NOT EXISTS public.appointments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE RESTRICT,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL CHECK (end_time > start_time),
    status appointment_status NOT NULL DEFAULT 'pending',
    notes TEXT, -- Notas internas para el administrador
    client_notes TEXT, -- Motivo o notas proporcionadas por el cliente
    meeting_url TEXT, -- Enlace virtual (ej. Google Meet) si es consulta online
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.5 TABLA: CLIENT_RECORDS (Expedientes clínicos y jurídicos)
CREATE TABLE IF NOT EXISTS public.client_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    category service_category NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    attachments JSONB DEFAULT '[]'::jsonb, -- Enlaces a documentos, estudios de laboratorio o contratos
    created_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3.6 TABLA: BLOG_POSTS (Artículos del Blog de Derecho y Nutrición)
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    category blog_category NOT NULL,
    author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
    cover_image TEXT,
    reading_time_minutes INTEGER DEFAULT 5,
    is_published BOOLEAN NOT NULL DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. ÍNDICES PARA OPTIMIZAR CONSULTAS
CREATE INDEX IF NOT EXISTS idx_services_category ON public.services(category, is_active);
CREATE INDEX IF NOT EXISTS idx_appointments_client ON public.appointments(client_id);
CREATE INDEX IF NOT EXISTS idx_appointments_start_time ON public.appointments(start_time);
CREATE INDEX IF NOT EXISTS idx_appointments_status ON public.appointments(status);
CREATE INDEX IF NOT EXISTS idx_records_client ON public.client_records(client_id, category);
CREATE INDEX IF NOT EXISTS idx_blog_category_published ON public.blog_posts(category, is_published);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON public.blog_posts(slug);

-- 5. FUNCIONES DE AYUDA Y TRIGGERS (SECURITY DEFINER)

-- Función para verificar si el usuario actual es administrador o superadmin sin recursión en RLS
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('admin', 'superadmin')
  );
$$;

-- Función para verificar si el usuario es superadmin
CREATE OR REPLACE FUNCTION public.is_superadmin()
RETURNS BOOLEAN
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'superadmin'
  );
$$;

-- Trigger para crear perfil automáticamente al registrarse en auth.users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, phone, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NEW.raw_user_meta_data->>'phone',
    COALESCE((NEW.raw_user_meta_data->>'role')::user_role, 'client'::user_role)
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    phone = EXCLUDED.phone;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Trigger para updated_at automático
CREATE OR REPLACE FUNCTION public.update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_profiles_modtime ON public.profiles;
CREATE TRIGGER update_profiles_modtime BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE PROCEDURE public.update_timestamp();

DROP TRIGGER IF EXISTS update_services_modtime ON public.services;
CREATE TRIGGER update_services_modtime BEFORE UPDATE ON public.services FOR EACH ROW EXECUTE PROCEDURE public.update_timestamp();

DROP TRIGGER IF EXISTS update_appointments_modtime ON public.appointments;
CREATE TRIGGER update_appointments_modtime BEFORE UPDATE ON public.appointments FOR EACH ROW EXECUTE PROCEDURE public.update_timestamp();

DROP TRIGGER IF EXISTS update_client_records_modtime ON public.client_records;
CREATE TRIGGER update_client_records_modtime BEFORE UPDATE ON public.client_records FOR EACH ROW EXECUTE PROCEDURE public.update_timestamp();

DROP TRIGGER IF EXISTS update_blog_posts_modtime ON public.blog_posts;
CREATE TRIGGER update_blog_posts_modtime BEFORE UPDATE ON public.blog_posts FOR EACH ROW EXECUTE PROCEDURE public.update_timestamp();

-- 6. HABILITAR ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.client_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- 7. POLÍTICAS RLS DETALLADAS

-- 7.1 POLÍTICAS PARA PROFILES
-- Lectura: los usuarios leen su propio perfil; admins leen todos
CREATE POLICY "Profiles: Users can read own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

-- Actualización: los usuarios actualizan sus datos excepto el rol
CREATE POLICY "Profiles: Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id AND 
    (role = (SELECT role FROM public.profiles WHERE id = auth.uid()) OR public.is_superadmin())
  );

-- Superadmin puede gestionar cualquier perfil
CREATE POLICY "Profiles: Superadmin full access"
  ON public.profiles FOR ALL
  USING (public.is_superadmin());

-- 7.2 POLÍTICAS PARA SERVICES
-- Cualquiera (incluyendo anon) puede consultar servicios activos
CREATE POLICY "Services: Public read active services"
  ON public.services FOR SELECT
  USING (is_active = true OR public.is_admin());

-- Solo admins pueden crear/editar/eliminar servicios
CREATE POLICY "Services: Admins can modify services"
  ON public.services FOR ALL
  USING (public.is_admin());

-- 7.3 POLÍTICAS PARA AVAILABILITY
-- Lectura pública para saber disponibilidad al agendar
CREATE POLICY "Availability: Public read active availability"
  ON public.availability FOR SELECT
  USING (is_active = true OR public.is_admin());

-- Solo admins gestionan disponibilidad
CREATE POLICY "Availability: Admins can modify availability"
  ON public.availability FOR ALL
  USING (public.is_admin());

-- 7.4 POLÍTICAS PARA APPOINTMENTS
-- Clientes leen sus citas; admins leen todas las citas
CREATE POLICY "Appointments: Read policy"
  ON public.appointments FOR SELECT
  USING (auth.uid() = client_id OR public.is_admin());

-- Clientes pueden agendar para sí mismos (o administradores para cualquier cliente)
CREATE POLICY "Appointments: Insert policy"
  ON public.appointments FOR INSERT
  WITH CHECK (auth.uid() = client_id OR public.is_admin());

-- Clientes pueden cancelar su cita pendiente; admins pueden actualizar cualquier estado
CREATE POLICY "Appointments: Update policy"
  ON public.appointments FOR UPDATE
  USING (auth.uid() = client_id OR public.is_admin())
  WITH CHECK (
    public.is_admin() OR 
    (auth.uid() = client_id AND status = 'cancelled')
  );

-- 7.5 POLÍTICAS PARA CLIENT_RECORDS (Expedientes confidenciales)
-- Clientes solo pueden ver sus propios expedientes
CREATE POLICY "Records: Clients view own records"
  ON public.client_records FOR SELECT
  USING (auth.uid() = client_id OR public.is_admin());

-- Solo administradores pueden crear o modificar expedientes
CREATE POLICY "Records: Admins manage records"
  ON public.client_records FOR ALL
  USING (public.is_admin());

-- 7.6 POLÍTICAS PARA BLOG_POSTS
-- Cualquiera lee posts publicados; administradores leen borradores y publicados
CREATE POLICY "Blog: Public read published posts"
  ON public.blog_posts FOR SELECT
  USING (is_published = true OR public.is_admin());

-- Solo administradores pueden crear, modificar o eliminar posts
CREATE POLICY "Blog: Admins manage blog posts"
  ON public.blog_posts FOR ALL
  USING (public.is_admin());

-- ==============================================================================
-- 8. DATOS SEMILLA (SEED DATA)
-- Servicios iniciales representativos de ambas disciplinas
-- ==============================================================================

INSERT INTO public.services (title, slug, description, category, duration_minutes, price, is_active) VALUES
-- SERVICIOS LEGALES
(
  'Asesoría Jurídica Integral',
  'asesoria-juridica-integral',
  'Diagnóstico legal estratégico en derecho civil, familiar, laboral o corporativo. Análisis de riesgos y propuesta de ruta jurídica personalizada.',
  'legal',
  60,
  950.00,
  true
),
(
  'Elaboración y Revisión de Contratos',
  'elaboracion-revision-contratos',
  'Redacción profesional de contratos civiles, mercantiles o de arrendamiento garantizando certeza jurídica y blindaje patrimonial.',
  'legal',
  90,
  1800.00,
  true
),
(
  'Derecho Corporativo y Cumplimiento Normativo Sanitario',
  'derecho-corporativo-sanitario',
  'Asesoría regulatoria para clínicas, consultorios y empresas de alimentos (COFEPRIS, etiquetado NOM-051 y licencias de operación).',
  'legal',
  120,
  2800.00,
  true
),
(
  'Defensa y Litigio Estratégico',
  'defensa-litigio-estrategico',
  'Representación procesal experta en controversias judiciales y procedimientos de conciliación ante tribunales.',
  'legal',
  60,
  1500.00,
  true
),

-- SERVICIOS DE NUTRICIÓN
(
  'Consulta Nutricional Inicial + Antropometría',
  'consulta-nutricional-inicial',
  'Evaluación de composición corporal, hábitos bio-psicosociales, historial clínico y entrega de plan de alimentación 100% individualizado.',
  'nutrition',
  60,
  850.00,
  true
),
(
  'Control y Consulta de Seguimiento Nutricional',
  'seguimiento-nutricional',
  'Reevaluación de metas, ajuste de macronutrientes, revisión de analíticas sanguíneas y optimización continua de hábitos.',
  'nutrition',
  45,
  600.00,
  true
),
(
  'Nutrición Clínica y Síndrome Metabólico',
  'nutricion-clinica-metabolica',
  'Tratamiento dietoterapéutico especializado para diabetes, hipertensión, dislipidemias, resistencia a la insulina y salud renal.',
  'nutrition',
  60,
  950.00,
  true
),
(
  'Nutrición Deportiva y Recomposición Corporal',
  'nutricion-deportiva',
  'Periodización nutricional estratégica enfocada en ganancia de masa muscular, reducción de grasa corporal y rendimiento atlético.',
  'nutrition',
  60,
  900.00,
  true
)
ON CONFLICT (slug) DO NOTHING;

-- HORARIOS DE DISPONIBILIDAD INICIAL
-- Lunes a Viernes: 09:00 a 14:00 (Legal) y 16:00 a 20:00 (Nutrición)
INSERT INTO public.availability (day_of_week, start_time, end_time, category) VALUES
(1, '09:00', '14:00', 'legal'),
(1, '16:00', '20:00', 'nutrition'),
(2, '09:00', '14:00', 'legal'),
(2, '16:00', '20:00', 'nutrition'),
(3, '09:00', '14:00', 'legal'),
(3, '16:00', '20:00', 'nutrition'),
(4, '09:00', '14:00', 'legal'),
(4, '16:00', '20:00', 'nutrition'),
(5, '09:00', '14:00', 'legal'),
(5, '16:00', '19:00', 'nutrition'),
(6, '09:00', '13:00', 'nutrition')
ON CONFLICT DO NOTHING;

-- ARTÍCULOS INICIALES PARA EL BLOG
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, reading_time_minutes, is_published, published_at) VALUES
(
  'Responsabilidad Legal en el Sector Salud: ¿Cómo proteger tu práctica profesional?',
  'responsabilidad-legal-sector-salud',
  'Análisis sobre la importancia del consentimiento informado, el expediente clínico y las directrices legales ante posibles controversias médicas.',
  'El ejercicio de las profesiones de la salud demanda una estricta rigurosidad tanto en la técnica clínica como en el marco normativo aplicable. Conocer los alcances de la NOM-004-SSA3-2012 del expediente clínico y documentar debidamente la voluntad del paciente es la mejor garantía de seguridad jurídica para médicos y nutriólogos.',
  'derecho',
  6,
  true,
  NOW() - INTERVAL '3 days'
),
(
  'Resistencia a la Insulina: Estrategias nutricionales basadas en evidencia científica',
  'resistencia-a-la-insulina-estrategias-nutricionales',
  'Aprende cómo el equilibrio glucémico y la crononutrición transforman la sensibilidad a la insulina sin recurrir a dietas restrictivas extremas.',
  'La resistencia a la insulina no es solo una cuestión de contar calorías, sino de optimizar la respuesta hormonal del cuerpo. En este artículo profundizamos en el papel de la fibra soluble, la sincronización de ingestas y el ejercicio de fuerza en la modulación del transportador GLUT4.',
  'nutricion',
  5,
  true,
  NOW() - INTERVAL '5 days'
),
(
  'Regulación del Etiquetado Frontal NOM-051 y los Derechos de los Consumidores',
  'regulacion-etiquetado-frontal-nom-051',
  'La intersección entre la ley sanitaria y las decisiones nutricionales cotidianas: impacto real y consideraciones de mercado.',
  'El etiquetado de advertencia mexicano ha sido reconocido internacionalmente por la OMS. Desde la perspectiva del derecho de acceso a la información y la salud pública, analizamos cómo las empresas deben formular sus declaraciones nutrimentales sin infringir la ley.',
  'salud_sociedad',
  7,
  true,
  NOW() - INTERVAL '8 days'
)
ON CONFLICT (slug) DO NOTHING;
