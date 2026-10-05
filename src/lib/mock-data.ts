import { ServiceItem, BlogPost, Appointment, ClientRecord } from '@/types';

export const MOCK_SERVICES: ServiceItem[] = [
  // Legal
  {
    id: 'leg-1',
    title: 'Asesoría Jurídica Integral',
    slug: 'asesoria-juridica-integral',
    description: 'Diagnóstico jurídico personalizado para personas físicas y morales. Análisis de viabilidad procesal, blindaje patrimonial y resolución de conflictos.',
    category: 'legal',
    duration_minutes: 60,
    price: 950,
    is_active: true,
    features: [
      'Análisis documental previo de tu caso',
      'Estrategia legal de acción inmediata',
      'Presencial u online vía videollamada HD',
      'Minuta y conclusiones por escrito'
    ]
  },
  {
    id: 'leg-2',
    title: 'Elaboración y Blindaje de Contratos',
    slug: 'elaboracion-blindaje-contratos',
    description: 'Redacción rigurosa de contratos mercantiles, arrendamiento, prestación de servicios y acuerdos de confidencialidad (NDA).',
    category: 'legal',
    duration_minutes: 90,
    price: 1800,
    is_active: true,
    features: [
      'Cláusulas penales y de protección patrimonial',
      'Alineado a la legislación vigente estatal y federal',
      '2 rondas de ajustes incluidas',
      'Formato digital listo para firma electrónica'
    ]
  },
  {
    id: 'leg-3',
    title: 'Cumplimiento Normativo Sanitario & COFEPRIS',
    slug: 'cumplimiento-sanitario-cofepris',
    description: 'Especialidad interdisciplinaria: asesoría regulatoria para consultorios, clínicas, suplementos y negocios de alimentos.',
    category: 'legal',
    duration_minutes: 120,
    price: 2800,
    is_active: true,
    features: [
      'Aviso de funcionamiento y responsable sanitario',
      'Revisión de NOM-051 y etiquetado claro',
      'Auditoría preventiva de expedientes y consentimientos',
      'Defensa ante visitas de verificación sanitaria'
    ]
  },
  {
    id: 'leg-4',
    title: 'Derecho Familiar y Sucesorio',
    slug: 'derecho-familiar-sucesorio',
    description: 'Acompañamiento empático y firme en juicios sucesorios testamentarios, intestamentarios, pensiones y acuerdos de custodia.',
    category: 'legal',
    duration_minutes: 60,
    price: 1400,
    is_active: true,
    features: [
      'Enfoque conciliatorio y de paz familiar',
      'Cálculo exacto de prestaciones y masa hereditaria',
      'Representación ante juzgados familiares',
      'Privacidad y ética absoluta'
    ]
  },

  // Nutrition
  {
    id: 'nut-1',
    title: 'Consulta Nutricional Integral + Plan Personalizado',
    slug: 'consulta-nutricional-integral',
    description: 'Evaluación de composición corporal por bioimpedancia, análisis de hábitos, anamnesis clínica y entrega de plan dietoterapéutico individualizado.',
    category: 'nutrition',
    duration_minutes: 60,
    price: 850,
    is_active: true,
    features: [
      'Evaluación antropométrica y composición corporal',
      'Plan adaptado a gustos, horarios y presupuesto',
      'Guía de equivalentes y lista de compras inteligente',
      'Acceso a app móvil para registro de comidas'
    ]
  },
  {
    id: 'nut-2',
    title: 'Manejo Clínico del Síndrome Metabólico',
    slug: 'manejo-sindrome-metabolico',
    description: 'Terapia nutricional avanzada basada en evidencia para diabetes tipo 2, hipertensión, hipertrigliceridemia e hígado graso.',
    category: 'nutrition',
    duration_minutes: 60,
    price: 950,
    is_active: true,
    features: [
      'Interpretación de estudios de laboratorio clínico',
      'Estrategia de reducción de resistencia a insulina',
      'Acompañamiento y resolución de dudas por WhatsApp',
      'Coordinación con tu médico tratante'
    ]
  },
  {
    id: 'nut-3',
    title: 'Nutrición Deportiva y Composición Corporal',
    slug: 'nutricion-deportiva-composicion',
    description: 'Periodización de carbohidratos, timing nutricional y suplementación con respaldo científico para deportistas y recomposición corporal.',
    category: 'nutrition',
    duration_minutes: 60,
    price: 900,
    is_active: true,
    features: [
      'Cálculo calórico por fase de entrenamiento',
      'Protocolos de suplementación con grado de evidencia A',
      'Estrategias pre, intra y post-entrenamiento',
      'Medición de pliegues y perímetros corporales'
    ]
  },
  {
    id: 'nut-4',
    title: 'Consulta de Seguimiento y Ajuste Nutricional',
    slug: 'consulta-seguimiento-nutricional',
    description: 'Monitoreo de avances en porcentaje de grasa y músculo, resolución de dificultades y rotación de menús cada 15 a 21 días.',
    category: 'nutrition',
    duration_minutes: 45,
    price: 600,
    is_active: true,
    features: [
      'Comparativa fotográfica y de bioimpedancia',
      'Nuevo menú con recetas fáciles y nutritivas',
      'Ajuste fino de macronutrientes y calorías',
      'Estrategias psicológicas contra la ansiedad alimentaria'
    ]
  }
];

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'b-1',
    title: 'Responsabilidad Legal en el Sector Salud: El Expediente Clínico y el Consentimiento Informado',
    slug: 'responsabilidad-legal-sector-salud',
    excerpt: '¿Cómo blindar legalmente tu consultorio de medicina o nutrición frente a revisiones sanitarias y controversias con pacientes?',
    content: `El ejercicio de las ciencias de la salud se encuentra estrechamente vinculado con el marco regulatorio mexicano. Muchas controversias civiles o administrativas no surgen por una deficiencia en la técnica médica o nutricional, sino por omisiones en la documentación clínica.

La Norma Oficial Mexicana NOM-004-SSA3-2012 establece los elementos obligatorios que debe contener todo expediente clínico, ya sea en formato físico o digital. Contar con un consentimiento informado debidamente firmado, donde se especifiquen riesgos, beneficios y alternativas del tratamiento, es la principal salvaguarda para el profesional.

Como abogado y especialista en salud, oriento a clínicas y profesionistas independientes para que ejerzan su vocación con total tranquilidad jurídica y excelencia ética.`,
    category: 'derecho',
    reading_time_minutes: 6,
    is_published: true,
    published_at: '2025-05-10T10:00:00Z',
    author_name: 'Lic. & Nut. Carlos E. Morales',
    cover_image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b-2',
    title: 'Resistencia a la Insulina: De la Fisiopatología a las Soluciones Prácticas en tu Plato',
    slug: 'resistencia-a-la-insulina-soluciones-practicas',
    excerpt: 'Descubre por qué contar calorías no basta y cómo el orden de los alimentos influye directamente en tus picos de glucemia.',
    content: `La resistencia a la insulina es el precursor silencioso de la diabetes tipo 2 y de afecciones cardiovasculares graves. Muchas personas sienten fatiga crónica, antojos incontrolables por azúcares y dificultad persistente para perder grasa abdominal sin entender el origen fisiológico.

La intervención nutricional basada en ciencia no consiste en eliminar todos los carbohidratos, sino en mejorar la calidad de la microbiota, incrementar la fibra viscosa, incorporar proteína de alto valor biológico y respetar los ritmos circadianos de alimentación.

Pequeños cambios estratégicos, como consumir los vegetales y las proteínas antes que los hidratos de carbono, pueden reducir los picos glucémicos posprandiales hasta en un 40%.`,
    category: 'nutricion',
    reading_time_minutes: 5,
    is_published: true,
    published_at: '2025-05-06T12:00:00Z',
    author_name: 'Lic. & Nut. Carlos E. Morales',
    cover_image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b-3',
    title: 'El Etiquetado Frontal NOM-051: Entre el Derecho a la Salud y el Cumplimiento Empresarial',
    slug: 'etiquetado-frontal-nom-051-derecho-salud',
    excerpt: 'Una mirada interdisciplinaria al impacto de los sellos de advertencia en México y los retos jurídicos de la industria alimentaria.',
    content: `El sistema de etiquetado frontal de advertencia en México ha marcado un hito en la política de salud pública en América Latina. Desde la perspectiva del derecho del consumidor, responde al mandato constitucional de información veraz, clara y accesible.

No obstante, para los productores de alimentos y suplementos, el cumplimiento riguroso de la NOM-051 implica una reformulación constante de ingredientes y la adaptación de empaques para evitar sanciones y clausuras por parte de PROFECO y COFEPRIS.

Esta intersección entre ley y biología nutricional demuestra cómo la regulación inteligente puede transformar hábitos sociales masivos.`,
    category: 'salud_sociedad',
    reading_time_minutes: 8,
    is_published: true,
    published_at: '2025-04-28T09:30:00Z',
    author_name: 'Lic. & Nut. Carlos E. Morales',
    cover_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  }
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: 'app-1',
    client_id: 'usr-client-1',
    client_name: 'Mariana Valenzuela Ríos',
    client_email: 'mariana.val@gmail.com',
    client_phone: '+52 951 123 4567',
    service_id: 'nut-1',
    service: MOCK_SERVICES[4],
    start_time: '2026-10-08T10:00:00Z',
    end_time: '2026-10-08T11:00:00Z',
    status: 'confirmed',
    notes: 'Segunda valoración por sospecha de resistencia a insulina.',
    client_notes: 'Deseo mejorar mis niveles de energía y recomponer grasa visceral.',
    meeting_url: 'https://meet.google.com/xyz-law-nut',
    created_at: '2026-10-02T15:00:00Z'
  },
  {
    id: 'app-2',
    client_id: 'usr-client-2',
    client_name: 'Ing. Roberto Méndez',
    client_email: 'roberto.mendez@soluciones.mx',
    client_phone: '+52 951 987 6543',
    service_id: 'leg-2',
    service: MOCK_SERVICES[1],
    start_time: '2026-10-09T16:00:00Z',
    end_time: '2026-10-09T17:30:00Z',
    status: 'pending',
    notes: 'Revisión urgente de contrato de arrendamiento comercial y cláusula penal.',
    client_notes: 'Necesito blindar el local que alquilaré para mi nueva sucursal.',
    created_at: '2026-10-04T18:20:00Z'
  },
  {
    id: 'app-3',
    client_id: 'usr-client-3',
    client_name: 'Dra. Gabriela Soto Cruz',
    client_email: 'gaby.soto@clinica.com',
    client_phone: '+52 951 555 7890',
    service_id: 'leg-3',
    service: MOCK_SERVICES[2],
    start_time: '2026-10-12T11:00:00Z',
    end_time: '2026-10-12T13:00:00Z',
    status: 'confirmed',
    notes: 'Apertura de nuevo centro médico estético y aviso de funcionamiento COFEPRIS.',
    client_notes: 'Trámite integral de licencias y manuales de procedimiento.',
    created_at: '2026-10-03T11:10:00Z'
  }
];

export const MOCK_CLIENT_RECORDS: ClientRecord[] = [
  {
    id: 'rec-1',
    client_id: 'usr-client-1',
    category: 'nutrition',
    title: 'Plan Nutricional Fase 1: Resensibilización a la Insulina',
    content: 'Plan dietético hiperproteico moderado con déficit calórico leve (-250 kcal). Enfoque en fibra prebiótica, omega-3 (2g diarios) y distribución de hidratos complejos posteriores a entrenamiento de resistencia.',
    attachments: [
      { name: 'Plan_Alimenticio_Fase1_Valenzuela.pdf', url: '#', size: '2.4 MB' },
      { name: 'Lista_Compras_Supermercado_Recomendados.pdf', url: '#', size: '850 KB' }
    ],
    created_at: '2026-10-01T14:00:00Z'
  },
  {
    id: 'rec-2',
    client_id: 'usr-client-2',
    category: 'legal',
    title: 'Dictamen Jurídico y Minuta de Contrato de Arrendamiento',
    content: 'Dictamen sobre la cláusula de rescisión anticipada y exclusión de responsabilidad solidaria por daños estructurales conforme al Código Civil.',
    attachments: [
      { name: 'Dictamen_Juridico_Local_Comercial.pdf', url: '#', size: '1.8 MB' }
    ],
    created_at: '2026-09-28T18:00:00Z'
  }
];
