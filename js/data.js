// JC Academic — Catálogo de Servicios y Datos Estructurados
// Codificación: UTF-8 sin BOM
// Directivas: Anti-Slop, Web Launch Audit (Colombia)

const JC = {
  whatsapp: "573223876905",
  whatsappFormato: "+57 322 387 6905",
  correo: "academyasistenciajc@gmail.com",
  email: "academyasistenciajc@gmail.com",
  emailDisplay: "academyasistenciajc@gmail.com",
  horario: "Lunes a Sábado: 7:00 AM – 8:00 PM (Hora Colombia)",

  servicios: [
    {
      id: "tesis",
      titulo: "Tesis y Monografías",
      resumen: "Acompañamiento metodológico integral para pregrado y posgrado. Planteamiento del problema, marco teórico, diseño metodológico, trabajo de campo y discusión de resultados.",
      niveles: ["Pregrado", "Especialización", "Maestría", "Doctorado"],
      formatos: ["APA 7ma", "IEEE", "Vancouver", "Chicago"],
      plazo_minimo_dias: 7,
      icono: "book-open",
      tipoExtension: "paginas"
    },
    {
      id: "ensayos",
      titulo: "Ensayos e Informes Académicos",
      resumen: "Redacción argumentativa rigurosa con fuentes indexadas en Scopus, SciELO y Redalyc. Artículos científicos IMRyD y reportes técnicos con citación estricta.",
      niveles: ["Pregrado", "Especialización", "Maestría"],
      formatos: ["APA 7ma", "IEEE", "Vancouver", "Chicago"],
      plazo_minimo_dias: 2,
      icono: "document-text",
      tipoExtension: "paginas"
    },
    {
      id: "talleres",
      titulo: "Talleres y Ejercicios Prácticos",
      resumen: "Resolución analítica de talleres universitarios avanzados, casos empresariales o jurídicos y análisis estadístico en SPSS, R o Python con memoria de cálculo paso a paso.",
      niveles: ["Pregrado", "Especialización", "Maestría"],
      formatos: ["Normativa del programa"],
      plazo_minimo_dias: 1,
      icono: "clipboard-check",
      tipoExtension: "ejercicios"
    },
    {
      id: "diapositivas",
      titulo: "Diapositivas y Sustentaciones",
      resumen: "Diseño técnico de presentaciones de alto impacto para defensa de grado o ponencias, con síntesis visual clara y opción de guion de exposición para el orador.",
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
      label: "Extensión o avance estimado",
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
    "Ingeniería y Tecnología (Sistemas, Industrial, Civil)",
    "Ciencias de la Salud (Medicina, Enfermería)",
    "Derecho y Ciencias Políticas",
    "Administración, Finanzas y Negocios",
    "Ciencias Sociales y Humanidades",
    "Educación y Pedagogía",
    "Psicología y Ciencias del Comportamiento",
    "Economía y Contaduría Pública",
    "Comunicación y Diseño",
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
      titulo: "Diagnóstico y cotización",
      descripcion: "Analizamos tu rúbrica institucional, objetivos y requerimientos de tu tutor para estructurar un cronograma de entregas realista en minutos."
    },
    {
      paso: "02",
      titulo: "Asignación y avance con Turnitin",
      descripcion: "Un especialista con posgrado en tu misma disciplina redacta tu documento con citas normadas y reporte oficial de originalidad sin depósito."
    },
    {
      paso: "03",
      titulo: "Entrega final y 10 días de ajustes",
      descripcion: "Recibes tu trabajo verificado y dispones de 10 días calendario de revisiones incluidas sin sobrecosto hasta la radicación o sustentación."
    }
  ],

  faqs: [
    {
      id: "faq-turnitin",
      pregunta: "¿Cómo garantizan que el trabajo no tenga plagio ni texto generado por IA?",
      respuesta: "Garantía Dual Anti-Plagio & Cero IA: cada encargo se redacta desde cero por un especialista humano con fuentes académicas arbitradas (Scopus, SciELO, Redalyc). Antes de cada entrega ejecutamos un escaneo en Turnitin institucional sin depósito (para no almacenar el texto en la base de datos) y te enviamos el reporte completo en PDF certificando un índice bajo (< 10%) y redacción original compatible con detectores de IA."
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