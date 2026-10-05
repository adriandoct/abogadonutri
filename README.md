# Lex & Nutri Platform | Práctica Profesional Dual (Abogado & Nutriólogo)

Plataforma web moderna construida con **Next.js 14 (App Router)**, **Tailwind CSS**, **TypeScript** y **Supabase** (PostgreSQL, Auth & Row Level Security), inspirada en la sobriedad, fluidez y jerarquía visual médica de sitios de alta autoridad como `neurocirugiaoaxaca.com`.

---

## 🏛️ 1. Concepto y Arquitectura de la Solución

La plataforma armoniza dos disciplinas aparentemente divergentes pero profundamente conectadas:
1. **Área Jurídica (Derecho)**: Litigio, redacción y blindaje de contratos, derecho familiar y asesoría regulatoria en salud (COFEPRIS y NOM-051).
2. **Área de Salud (Nutrición Clínica)**: Tratamiento de síndrome metabólico, diabetes, resistencia a la insulina, recomposición corporal y nutrición deportiva basada en evidencia.

---

## 🎨 2. Paleta de Colores y Diseño UX/UI

- **Legal (Azul Marino Profundo)**: `#0B2545`, `#133E68`, `#1D4E89` (confianza, solidez institucional y rigor procesal).
- **Nutrición (Verde Esmeralda Sobrio)**: `#064E3B`, `#047857`, `#059669` (vitalidad, salud biológica y frescura clínica).
- **Acentos**: Dorado cálido y bronce suave (`#D4AF37`, `#B45309`) para botones de acción (CTA) y sellos de acreditación.
- **Tipografía**: *Plus Jakarta Sans* y *Playfair Display* con proporciones áureas.

---

## 📂 3. Estructura de Directorios

```plaintext
abogadonutri/
├── supabase/
│   └── schema.sql              # Esquema SQL completo con RLS, Triggers, RBAC y Seed Data
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globales, fuentes Google Fonts y utilidades
│   │   ├── layout.tsx          # Root Layout con Navbar y Footer
│   │   ├── page.tsx            # Portada principal (Hero Dual, Sobre Mí, Servicios, Blog, Cita)
│   │   ├── nosotros/page.tsx   # Perfil del profesional, cédulas y código deontológico
│   │   ├── servicios/page.tsx  # Catálogo con pestañas interactivas Legal vs Nutrición
│   │   ├── agendar/page.tsx    # Flujo guiado de reserva de cita en 5 pasos
│   │   ├── blog/page.tsx       # Blog con filtro de categorías (Derecho, Nutrición, Salud)
│   │   ├── blog/[slug]/page.tsx# Lectura completa de artículos especializados
│   │   ├── contacto/page.tsx   # Formulario, mapa interactivo y canales directos
│   │   └── dashboard/page.tsx  # Portal interactivo con simulador RBAC (Cliente vs Admin)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Barra superior de contacto + Logotipo Dual + Menú responsive
│   │   │   └── Footer.tsx      # Pie institucional con cédulas D-8472910 y N-6184902
│   │   ├── home/
│   │   │   ├── DualHero.tsx    # Hero interactivo con switcher de especialidad en tiempo real
│   │   │   ├── AboutDualProfile.tsx # Tarjeta de autoridad y propuesta interdisciplinaria
│   │   │   ├── ServicesSection.tsx  # Servicios por categoría con honorarios y botón agendar
│   │   │   ├── BookingStepGuide.tsx # Explicación visual de los 5 pasos de reserva
│   │   │   ├── DualBlogPreview.tsx  # Vista previa de publicaciones recientes
│   │   │   └── Testimonials.tsx     # Testimonios verificados de pacientes y clientes
│   │   ├── booking/
│   │   │   └── AppointmentBookingFlow.tsx # Wizard interactivo de 5 pasos para agendar
│   │   └── dashboard/
│   │       ├── ClientDashboardView.tsx    # Portal del cliente (citas, documentos, cancelar)
│   │       └── AdminDashboardView.tsx     # Panel del titular (citas, estados, métricas)
│   ├── lib/
│   │   ├── mock-data.ts        # Datos de muestra interactivos listos para usar
│   │   └── supabase/
│   │       ├── client.ts       # Cliente Supabase para Browser (SSR)
│   │       └── server.ts       # Cliente Supabase para Server Components
│   └── types/
│       └── index.ts            # Definiciones de TypeScript para perfiles, citas y servicios
```

---

## 🔐 4. Base de Datos y Supabase RBAC

El archivo `supabase/schema.sql` contiene la configuración de PostgreSQL:

### Tablas:
1. `profiles`: Perfiles de usuario vinculados a `auth.users` mediante triggers automáticos (`superadmin`, `admin`, `client`).
2. `services`: Catálogo de servicios legales y de nutrición con precios, duración y slugs.
3. `availability`: Franjas horarias configurables para citas legales o nutricionales.
4. `appointments`: Citas programadas con estados (`pending`, `confirmed`, `completed`, `cancelled`), notas y URL de videollamada.
5. `client_records`: Expedientes confidenciales protegidos por secreto profesional (dietas, bioimpedancia, minutas y contratos).
6. `blog_posts`: Artículos categorizados con autoría y estado de publicación.

### Políticas de Seguridad (RLS):
- **Clientes**: Únicamente pueden consultar y gestionar sus propias citas y expedientes.
- **Administradores y SuperAdmin**: Acceso integral de gestión a todas las citas, expedientes y configuración de disponibilidad.
- **Público**: Acceso de solo lectura a los servicios activos y artículos publicados del blog.

---

## 🚀 5. Cómo Ejecutar Localmente

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Variables de entorno**:
   Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   *Nota: La plataforma ya cuenta con datos mock interactivos de alta fidelidad, por lo que funciona al 100% de inmediato incluso antes de conectar tus claves de Supabase.*

3. **Ejecutar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
