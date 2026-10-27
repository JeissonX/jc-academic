// JC Academic — Catálogo de Servicios y Datos Estructurados
// Codificación: UTF-8 sin BOM
// Directivas: Anti-Slop, Web Launch Audit (Colombia)

const JC = {
  whatsapp: "573223876905",
  whatsappFormato: "+57 322 387 6905",
  correo: "contacto@jcacademic.co",
  horario: "Lunes a Sábado: 7:00 AM – 8:00 PM (Hora Colombia)",

  servicios: [
    {
      id: "tesis",
      titulo: "Tesis y Proyectos de Grado",
      resumen: "Acompañamiento metodológico integral para pregrado, maestría y doctorado. Planteamiento del problema, marco teórico, diseño metodológico, trabajo de campo y discusión de resultados.",
      niveles: ["Pregrado", "Especialización", "Maestría", "Doctorado"],
      formatos: ["APA 7ma", "IEEE", "Vancouver", "Chicago"],
      plazo_minimo_dias: 10,
      icono: "book-open",
      tipoExtension: "paginas"
    },
    {
      id: "ensayo",
      titulo: "Ensayos y Monografías Críticas",
      resumen: "Redacción argumentativa rigurosa con fuentes primarias indexadas en Scopus, SciELO y Redalyc. Coherencia interna, tesis clara y citas bibliográficas sin errores de formato.",
      niveles: ["Pregrado", "Especialización", "Maestría"],
      formatos: ["APA 7ma", "MLA", "Chicago"],
      plazo_minimo_dias: 2,
      icono: "document-text",
      tipoExtension: "paginas"
    },
    {
      id: "articulo",
      titulo: "Artículos Científicos (IMRyD)",
      resumen: "Estructuración de artículos para revistas indexadas en Publindex, Scimago o WoS. Adaptación estricta a guías de autor, abstract estructurado y preparación de carta al editor.",
      niveles: ["Maestría", "Doctorado", "Investigadores"],
      formatos: ["APA 7ma", "Vancouver", "IEEE"],
      plazo_minimo_dias: 7,
      icono: "academic-cap",
      tipoExtension: "paginas"
    },
    {
      id: "estadistica",
      titulo: "Análisis Estadístico y Econométrico",
      resumen: "Tratamiento de datos y modelado con SPSS, R, Python o Stata. Pruebas de normalidad, hipótesis, regresiones lineales/logísticas, ANOVA y redacción analítica de resultados.",
      niveles: ["Pregrado", "Especialización", "Maestría", "Doctorado"],
      formatos: ["APA 7ma", "Vancouver"],
      plazo_minimo_dias: 3,
      icono: "chart-bar",
      tipoExtension: "paginas"
    },
    {
      id: "apa",
      titulo: "Corrección de Estilo y Normas APA / IEEE",
      resumen: "Auditoría ortotipográfica y aplicación rigurosa de normas de citación. Verificación de referencias cruzadas, sangría francesa, numeración y formato de tablas y figuras.",
      niveles: ["Pregrado", "Especialización", "Maestría", "Doctorado"],
      formatos: ["APA 7ma", "IEEE", "Vancouver", "Chicago", "Icontec"],
      plazo_minimo_dias: 1,
      icono: "adjustments",
      tipoExtension: "paginas"
    },
    {
      id: "taller",
      titulo: "Talleres y Casos de Estudio Complejos",
      resumen: "Resolución analítica de talleres universitarios avanzados, casos empresariales o jurídicos. Entrega estructurada con sustentación conceptual y memoria de cálculo.",
      niveles: ["Pregrado", "Especialización"],
      formatos: ["Normativa del programa"],
      plazo_minimo_dias: 2,
      icono: "clipboard-check",
      tipoExtension: "ejercicios"
    },
    {
      id: "diapositivas",
      titulo: "Diapositivas y Defensas de Grado",
      resumen: "Estructuración de presentaciones ejecutivas para sustentación de tesis o ponencias. Síntesis visual de alto impacto con opción de guion de exposición para el orador.",
      niveles: ["Pregrado", "Especialización", "Maestría", "Doctorado"],
      formatos: ["PowerPoint", "PDF", "Canva"],
      plazo_minimo_dias: 1,
      icono: "presentation-chart-bar",
      tipoExtension: "diapositivas"
    }
  ],

  // Tipos de dimensión/extensión para el cotizador dinámico
  tiposExtension: {
    paginas: {
      label: "Páginas o Palabras estimadas",
      placeholder: "Ej: 15 páginas / 4.500 palabras",
      unidad: "páginas/palabras",
      permiteGuion: false
    },
    ejercicios: {
      label: "Número de ejercicios o puntos",
      placeholder: "Ej: 5 ejercicios o 10 puntos analíticos",
      unidad: "ejercicios",
      permiteGuion: false
    },
    diapositivas: {
      label: "Número de láminas / diapositivas",
      placeholder: "Ej: 15 láminas de presentación",
      unidad: "láminas",
      permiteGuion: true
    },
    general: {
      label: "Extensión o avance estimado (opcional)",
      placeholder: "Ej: 15 páginas / 5 ejercicios / 12 láminas",
      unidad: "unidades",
      permiteGuion: false
    }
  },

  niveles: [
    "Pregrado",
    "Especialización",
    "Maestría",
    "Doctorado"
  ],

  areas: [
    "Ingeniería y Tecnología (Sistemas, Industrial, Civil, etc.)",
    "Ciencias de la Salud (Medicina, Enfermería, Odontología)",
    "Derecho y Ciencias Políticas",
    "Administración, Finanzas y Negocios",
    "Ciencias Sociales y Humanidades",
    "Educación y Pedagogía",
    "Psicología y Salud Mental",
    "Economía y Contaduría Pública",
    "Comunicación Social y Periodismo",
    "Arquitectura, Urbanismo y Diseño",
    "Ciencias Exactas y Naturales",
    "Otra disciplina académica"
  ],

  plazos: [
    { id: "normal", label: "Normal (15+ días)", detalle: "Ritmo estándar, máxima disponibilidad para rondas de revisión" },
    { id: "prioritario", label: "Prioritario (7 a 14 días)", detalle: "Atención preferencial con entregas parciales intermedias" },
    { id: "urgente", label: "Urgente (3 a 6 días)", detalle: "Dedicación intensiva para radicaciones inmediatas" },
    { id: "reloj", label: "Contra reloj (24 a 48 horas)", detalle: "Equipo de choque para entregas críticas antes de las 7:00 AM" }
  ],

  garantias: [
    {
      id: "anti-plagio-ia",
      titulo: "Garantía Dual Anti-Plagio & Cero IA",
      descripcion: "Redacción 100% humana con citación rigurosa (APA 7ma, IEEE, Vancouver). Cada trabajo incluye informe oficial Turnitin sin depósito institucional (< 10% de similitud) y certificación de compatibilidad contra detectores de inteligencia artificial."
    },
    {
      id: "ajustes-10-dias",
      titulo: "Plazo de Ajustes de 10 Días Gratis",
      descripcion: "Cuentas con 10 días calendario tras cada entrega para solicitar revisiones y correcciones menores del tutor incluidas sin costo adicional sobre la rúbrica y alcance inicial convenido."
    },
    {
      id: "pago-50-50",
      titulo: "Esquema de Pago Protegido 50/50",
      descripcion: "Abonas el 50% de anticipo para asignar de inmediato a tu especialista disciplinar y cancelas el 50% restante únicamente contra entrega de avance verificado con su informe Turnitin oficial."
    },
    {
      id: "confidencialidad-cesion",
      titulo: "Confidencialidad y Cesión Patrimonial",
      descripcion: "Tus datos personales y documentos quedan protegidos bajo reserva absoluta (Ley 1581 de 2012). Cedemos el 100% de los derechos patrimoniales al estudiante de acuerdo con la Ley 23 de 1982 en Colombia."
    }
  ],

  // Medios de pago locales en Colombia
  paymentMethods: [
    {
      id: "bancolombia",
      nombre: "Bancolombia",
      tipo: "Transferencia / QR",
      badge: "Cuenta de Ahorros / QR",
      seguro: true
    },
    {
      id: "nequi",
      nombre: "Nequi",
      tipo: "Billetera Digital",
      badge: "Inmediato 24/7",
      seguro: true
    },
    {
      id: "daviplata",
      nombre: "Daviplata",
      tipo: "Billetera Digital",
      badge: "Inmediato 24/7",
      seguro: true
    },
    {
      id: "pse",
      nombre: "PSE",
      tipo: "Débito Bancario",
      badge: "Todos los bancos",
      seguro: true
    }
  ],

  avisoSeguridadPago: "JC Academic nunca te solicitará contraseñas, códigos de seguridad (OTP), tokens ni números confidenciales de tarjetas. Los pagos se coordinan de forma segura y directa por canales oficiales.",

  politicaAjustes: {
    diasCalendario: 10,
    descripcion: "10 días calendario de ajustes y revisiones menores incluidas sin costo sobre la rúbrica inicial."
  },

  esquemaPago: {
    anticipo: "50% inicial para asignación del especialista",
    saldo: "50% final contra entrega de avance verificado con reporte Turnitin",
    hitos: "Estructura por capítulos disponible para tesis extensas"
  },

  proceso: [
    {
      paso: "01",
      titulo: "Diagnóstico y cronograma en 24 h",
      descripcion: "Revisamos tu rúbrica institucional, objetivos y requerimientos de tu tutor para estructurar un cronograma de entregas realista antes de confirmar el encargo."
    },
    {
      paso: "02",
      titulo: "Asignación de especialista con posgrado",
      descripcion: "Conectamos tu proyecto con un profesional especializado en tu misma carrera y con experiencia comprobada en las normas exigidas por tu universidad."
    },
    {
      paso: "03",
      titulo: "Entregas parciales y validación Turnitin",
      descripcion: "Recibes avances por capítulos o secciones junto con sus respectivos reportes de originalidad para que puedas presentarlos a tu director de tesis."
    },
    {
      paso: "04",
      titulo: "Ajustes de jurado hasta la sustentación",
      descripcion: "Incorporamos las observaciones del comité evaluador de manera rápida y precisa hasta que el documento quede listo para radicación o defensa oral."
    }
  ],

  testimonios: [
    {
      iniciales: "M.R.",
      nombre: "M. Rodríguez",
      programa: "Maestría en Administración de Empresas (MBA)",
      institucion: "Universidad Nacional de Colombia",
      calificacion: 5.0,
      resultado: "Aprobado con mención meritoria",
      texto: "Trabajo 10 horas diarias en una multinacional y el marco metodológico de mi tesis estaba estancado hace 4 meses. En 12 días estructuraron los instrumentos y el reporte Turnitin arrojó 3.4% de similitud. Mi director aprobó el capítulo sin observaciones de fondo."
    },
    {
      iniciales: "L.H.",
      nombre: "L. Herrera",
      programa: "Ingeniería Industrial (Décimo semestre)",
      institucion: "Universidad del Valle",
      calificacion: 5.0,
      resultado: "Entrega radicada a las 6:45 AM",
      texto: "Tenía que procesar una muestra de 480 encuestas en SPSS para un proyecto de grado con fecha límite un lunes a las 7:00 AM. El análisis llegó el domingo en la noche con tablas formateadas en APA 7ma e interpretación rigurosa. Me salvó el semestre."
    },
    {
      iniciales: "C.M.",
      nombre: "C. Martínez",
      programa: "Especialización en Derecho Laboral y Seguridad Social",
      institucion: "Pontificia Universidad Javeriana",
      calificacion: 4.9,
      resultado: "Publicación recomendada",
      texto: "El ensayo requería fuentes primarias indexadas en SciELO y jurisprudencia reciente de la Corte Constitucional con citas en Chicago. La coherencia argumentativa fue impecable y el docente felicitó la solidez bibliográfica del texto."
    },
    {
      iniciales: "A.T.",
      nombre: "A. Torres",
      programa: "Doctorado en Salud Pública",
      institucion: "Universidad de Antioquia",
      calificacion: 5.0,
      resultado: "Aceptado en revista Scimago Q2",
      texto: "Adaptaron mi tesis a formato de artículo científico IMRyD con las pautas exactas de la revista objetivo. La corrección de estilo técnico y la carta de presentación al editor demostraron un dominio académico absoluto."
    }
  ],

  faqs: [
    {
      id: "faq-turnitin",
      pregunta: "¿Cómo verifico que mi trabajo no tiene plagio ni textos generados por IA?",
      respuesta: "Garantía Dual Anti-Plagio & Cero IA: cada encargo es redactado desde cero por un especialista humano con fuentes académicas arbitradas (Scopus, SciELO, Redalyc). Antes de cada entrega ejecutamos un escaneo en Turnitin institucional sin depósito (para no almacenar el texto en la base de datos) y te enviamos el reporte completo en PDF certificando un índice bajo (< 10%) y redacción original compatible con detectores de IA."
    },
    {
      id: "faq-ajustes",
      pregunta: "¿Qué sucede si mi tutor o jurado me solicita correcciones al documento?",
      respuesta: "Cuentas con una política clara de 10 días calendario de ajustes y revisiones menores incluidas sin costo adicional sobre la rúbrica y alcance inicial convenido. Las observaciones de tu tutor o jurado se atienden con máxima prioridad hasta que el documento sea aprobado formalmente."
    },
    {
      id: "faq-pagos",
      pregunta: "¿Cómo se maneja el pago y qué medios reciben en Colombia?",
      respuesta: "Manejamos un esquema de Pago Protegido 50/50: abonas el 50% de anticipo para asignar al especialista e iniciar cronograma, y cancelas el 50% restante únicamente al recibir la entrega y verificar el reporte Turnitin. Para tesis extensas pactamos pagos por capítulos. Recibimos transferencias directas por Bancolombia, Nequi, Daviplata y PSE. Por tu seguridad, nunca solicitamos contraseñas, tokens ni datos financieros sensibles."
    },
    {
      id: "faq-confidencialidad",
      pregunta: "¿Qué nivel de reserva y confidencialidad tienen mis datos?",
      respuesta: "Confidencialidad absoluta. Firmamos acuerdo de reserva. No almacenamos tus datos en plataformas públicas, no reutilizamos textos ni compartimos tu información con terceros. De acuerdo con la Ley 23 de 1982 en Colombia, la totalidad de los derechos patrimoniales se ceden al estudiante."
    },
    {
      id: "faq-normas",
      pregunta: "¿Trabajan con las directrices específicas de mi universidad?",
      respuesta: "Sí. Solicitamos la guía metodológica o plantilla de tu facultad. Aplicamos rigurosamente normas APA 7ma edición, IEEE, Vancouver, Chicago, MLA o manuales institucionales propios (márgenes, sangrías, rotulación de figuras, tablas y referencias cruzadas)."
    },
    {
      id: "faq-plazos",
      pregunta: "¿Con cuánto tiempo de anticipación debo solicitar la asesoría?",
      respuesta: "Para ensayos o talleres cortos podemos atender entregas de urgencia en 24 a 48 horas. Para tesis completas o proyectos de grado recomendamos iniciar con al menos 15 a 20 días de anticipación para garantizar revisiones pausadas y lectura con tu asesor."
    }
  ],

  stats: [
    { valor: "+1.200", etiqueta: "Proyectos y tesis aprobados", detalle: "Desde 2019 en Colombia" },
    { valor: "99.2%",  etiqueta: "Tasa de satisfacción", detalle: "Evaluaciones de comités y jurados" },
    { valor: "< 7%",    etiqueta: "Promedio Turnitin", detalle: "Reporte oficial adjunto en cada entrega" },
    { valor: "24 h",   etiqueta: "Diagnóstico inicial", detalle: "Respuesta y cronograma garantizado" }
  ]
};

// Compatibilidad dual (Navegador nativo + ES Modules)
if (typeof window !== "undefined") {
  window.JC = JC;
}

export default JC;