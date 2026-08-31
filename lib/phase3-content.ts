import type { Lang } from "@/lib/seo";

export type SourceLink = {
  label: string;
  url: string;
};

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type ContentPage = {
  lang: Lang;
  slug: string;
  alternateSlug: string;
  kind: "service" | "article" | "hub";
  cluster: "sem" | "payroll" | "hub";
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  published: string;
  updated: string;
  author: "Julissa Lewis" | "Jissbeth Lewis" | "JJL Independent Accounting";
  readingTime?: string;
  keyPoints: string[];
  sections: ContentSection[];
  faqs: { question: string; answer: string }[];
  sources: SourceLink[];
  related: string[];
  interactive?: "css-calculator";
};

const MICI_SEM = "https://mici.gob.pa/sem-actividades/";
const MICI_SEM_HOME = "https://sem.gob.pa/";
const DGI_1119 = "https://dgi.mef.gob.pa/DInforme/Formulario1119";
const LAW_526 =
  "https://www.organojudicial.gob.pa/uploads/blogs.dir/2/2026/05/462/ley-526-de-28-de-mayo-de-2026.pdf";
const CSS_RATE =
  "https://prensa.css.gob.pa/2025/03/21/aumento-en-el-pago-de-la-cuota-de-los-empleadores-se-pagara-a-partir-de-abril-de-2025/";
const CSS_SIPE = "https://www.css.gob.pa/sipe/";
const CSS_SIPE_PLANILLA = "https://www.css.gob.pa/sipe/planilla.html";

const pages: ContentPage[] = [
  {
    lang: "es",
    slug: "contabilidad-empresas-sem-panama",
    alternateSlug: "sem-accounting-services-panama",
    kind: "service",
    cluster: "sem",
    eyebrow: "Multinacionales & SEM",
    title: "Contabilidad y soporte financiero para empresas SEM y multinacionales en Panamá",
    seoTitle: "Contabilidad para Empresas SEM y Multinacionales en Panamá | JJL",
    description:
      "Contabilidad, reporting, cumplimiento local, tesorería y soporte financiero para empresas SEM, filiales y multinacionales que operan en Panamá.",
    summary:
      "JJL acompaña operaciones multinacionales que necesitan una ejecución contable local ordenada, reporting claro y coordinación financiera alineada con la realidad de operar en Panamá.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    keyPoints: [
      "Contabilidad local y cierres mensuales con trazabilidad",
      "Reporting financiero para casa matriz o dirección regional",
      "Control de obligaciones locales y documentación de soporte",
      "Tesorería, multidivisa y soporte de controller según necesidad",
      "Acompañamiento contable para estructuras SEM y operaciones internacionales"
    ],
    sections: [
      {
        heading: "Una operación internacional necesita más que registrar transacciones",
        paragraphs: [
          "Cuando una filial, sede regional o empresa SEM opera en Panamá, el reto no suele ser únicamente llevar libros. La operación necesita información consistente, cierres confiables, documentación disponible y una comunicación financiera que pueda entender tanto el equipo local como la casa matriz.",
          "JJL estructura el servicio alrededor del nivel de complejidad real de la empresa: volumen de transacciones, moneda funcional, reportes corporativos, proveedores, nómina local, tesorería y controles internos."
        ]
      },
      {
        heading: "Qué puede integrar el servicio",
        paragraphs: [
          "El alcance se diseña por módulos para evitar contratar una estructura sobredimensionada o quedarse corto frente a la operación."
        ],
        bullets: [
          "Contabilidad recurrente, conciliaciones y preparación de cierres",
          "Estados financieros y reporting de gestión",
          "Control documental y soporte para obligaciones ante la DGI",
          "Gestión multidivisa y conciliación de cuentas corporativas",
          "Tesorería y procesos de pago bajo controles definidos por el cliente",
          "Presupuestos, KPIs y soporte de controller o dirección financiera",
          "Coordinación con asesores legales o fiscales cuando una materia excede el alcance contable"
        ]
      },
      {
        heading: "Por qué el régimen SEM merece una estructura contable especializada",
        paragraphs: [
          "El Ministerio de Comercio e Industrias incluye expresamente la contabilidad del grupo empresarial, la asistencia financiera y administrativa, la tesorería corporativa y otros servicios de soporte dentro de las actividades que puede desarrollar una empresa con licencia SEM.",
          "Eso hace que la calidad de los procesos contables, de reporting y de documentación no sea un tema secundario: forma parte del funcionamiento diario de una sede regional."
        ],
        callout:
          "JJL no sustituye asesoría legal ni emite criterios regulatorios fuera de su alcance. Cuando una operación requiere interpretación jurídica o tributaria especializada, el trabajo se coordina con el asesor correspondiente."
      },
      {
        heading: "2027: sustancia económica y rentas pasivas de fuente extranjera",
        paragraphs: [
          "La Ley 526 de 28 de mayo de 2026 incorporó reglas de sustancia económica para determinadas rentas pasivas de fuente extranjera obtenidas por entidades integrantes de grupos multinacionales constituidas o domiciliadas en Panamá.",
          "La norma comienza a regir para el período fiscal 2027. Para las empresas potencialmente alcanzadas, 2026 es un buen momento para revisar cómo se documentan operaciones, recursos, gastos y procesos internos, siempre con acompañamiento fiscal o legal cuando corresponda."
        ]
      },
      {
        heading: "Cómo trabajamos",
        paragraphs: [
          "El proceso empieza con una evaluación de la estructura y del flujo real de información. A partir de ahí definimos entregables, responsables, calendario de cierres y nivel de reporte."
        ],
        bullets: [
          "1. Diagnóstico de operación, sistemas, monedas y obligaciones",
          "2. Diseño del calendario contable y matriz de responsabilidades",
          "3. Migración u ordenamiento de información y controles",
          "4. Operación recurrente con cierres y reporting",
          "5. Revisión periódica de riesgos, pendientes y necesidades de soporte"
        ]
      }
    ],
    faqs: [
      {
        question: "¿JJL trabaja únicamente con empresas que ya tienen licencia SEM?",
        answer:
          "No. El servicio también puede adaptarse a filiales, subsidiarias y grupos multinacionales que operen en Panamá sin estar bajo el régimen SEM. El alcance depende de la estructura y de las necesidades contables y financieras de cada empresa."
      },
      {
        question: "¿Pueden preparar reportes para casa matriz?",
        answer:
          "Sí. El servicio puede incorporar paquetes de reporting, conciliaciones, análisis de variaciones y formatos acordados con la dirección regional o casa matriz."
      },
      {
        question: "¿JJL ofrece asesoría legal sobre Ley 526?",
        answer:
          "JJL puede apoyar la organización contable, documental y financiera relacionada con la operación. La interpretación legal o fiscal especializada se valida con el asesor correspondiente."
      }
    ],
    sources: [
      { label: "MICI — Actividades autorizadas para empresas SEM", url: MICI_SEM },
      { label: "MICI — Dirección de Sedes de Empresas Multinacionales", url: MICI_SEM_HOME },
      { label: "Ley 526 de 28 de mayo de 2026 — Gaceta Oficial", url: LAW_526 },
      { label: "DGI — Formulario 1119 de Retenciones SEM", url: DGI_1119 }
    ],
    related: [
      "que-es-empresa-sem-panama",
      "formulario-1119-sem-panama",
      "ley-526-sustancia-economica-panama",
      "renta-fuente-extranjera-panama"
    ]
  },
  {
    lang: "en",
    slug: "sem-accounting-services-panama",
    alternateSlug: "contabilidad-empresas-sem-panama",
    kind: "service",
    cluster: "sem",
    eyebrow: "Multinationals & SEM",
    title: "Accounting and financial support for SEM companies and multinationals in Panama",
    seoTitle: "SEM & Multinational Accounting Services in Panama | JJL",
    description:
      "Accounting, reporting, local compliance, treasury, and financial support for SEM companies, subsidiaries, and multinationals operating in Panama.",
    summary:
      "JJL supports multinational operations that need reliable local accounting, clear reporting, and financial coordination aligned with the realities of operating in Panama.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    keyPoints: [
      "Local accounting and traceable monthly closes",
      "Financial reporting for headquarters or regional management",
      "Local compliance and supporting-document control",
      "Treasury, multi-currency, and controller support as needed",
      "Accounting support for SEM structures and international operations"
    ],
    sections: [
      {
        heading: "International operations need more than transaction recording",
        paragraphs: [
          "When a subsidiary, regional headquarters, or SEM company operates in Panama, the challenge is rarely limited to bookkeeping. The operation needs consistent information, reliable closes, available documentation, and financial communication that works for both local teams and headquarters.",
          "JJL structures the service around the real level of complexity: transaction volume, functional currency, corporate reporting, vendors, local payroll, treasury, and internal controls."
        ]
      },
      {
        heading: "What the service can include",
        paragraphs: [
          "The scope is modular so the company can avoid both an oversized structure and a support model that falls short of operational needs."
        ],
        bullets: [
          "Recurring accounting, reconciliations, and monthly close preparation",
          "Financial statements and management reporting",
          "Document control and support for local DGI obligations",
          "Multi-currency management and corporate-account reconciliation",
          "Treasury and payment processes under client-defined controls",
          "Budgets, KPIs, and controller or financial-direction support",
          "Coordination with legal or tax advisers when a matter exceeds accounting scope"
        ]
      },
      {
        heading: "Why SEM operations benefit from specialized accounting support",
        paragraphs: [
          "Panama's Ministry of Commerce and Industries expressly lists group accounting, financial and administrative assistance, corporate treasury, and other support services among the activities that may be performed by a company holding a SEM license.",
          "This makes accounting processes, reporting quality, and documentation part of the day-to-day operating model of a regional headquarters."
        ],
        callout:
          "JJL does not replace legal counsel or issue regulatory opinions outside its scope. When an operation requires specialized legal or tax interpretation, the work is coordinated with the relevant adviser."
      },
      {
        heading: "2027: economic substance and foreign-source passive income",
        paragraphs: [
          "Law 526 of May 28, 2026 introduced economic-substance rules for certain foreign-source passive income earned by entities that are part of multinational groups and are incorporated or domiciled in Panama.",
          "The law applies beginning with fiscal year 2027. For potentially affected companies, 2026 is a useful time to review how operations, resources, expenses, and internal processes are documented, with tax or legal guidance when required."
        ]
      },
      {
        heading: "How we work",
        paragraphs: [
          "The process starts with an assessment of the entity structure and its actual information flow. We then define deliverables, responsibilities, closing calendar, and reporting level."
        ],
        bullets: [
          "1. Assessment of operations, systems, currencies, and obligations",
          "2. Accounting calendar and responsibility matrix",
          "3. Data migration or organization and control setup",
          "4. Recurring operation with closes and reporting",
          "5. Periodic review of risks, pending items, and support needs"
        ]
      }
    ],
    faqs: [
      {
        question: "Does JJL only work with companies that already hold a SEM license?",
        answer:
          "No. The service can also be adapted to subsidiaries and multinational groups operating in Panama outside the SEM regime. Scope depends on the entity structure and its accounting and financial needs."
      },
      {
        question: "Can JJL prepare reports for headquarters?",
        answer:
          "Yes. The service can include reporting packages, reconciliations, variance analysis, and formats agreed with regional management or headquarters."
      },
      {
        question: "Does JJL provide legal advice on Law 526?",
        answer:
          "JJL can support the accounting, documentation, and financial organization of the operation. Specialized legal or tax interpretation should be validated with the appropriate adviser."
      }
    ],
    sources: [
      { label: "MICI — Activities authorized for SEM companies", url: MICI_SEM },
      { label: "MICI — Multinational Headquarters Directorate", url: MICI_SEM_HOME },
      { label: "Law 526 of May 28, 2026 — Official Gazette", url: LAW_526 },
      { label: "DGI — Form 1119 for SEM Withholdings", url: DGI_1119 }
    ],
    related: [
      "what-is-sem-company-panama",
      "form-1119-sem-panama",
      "panama-law-526-economic-substance",
      "foreign-source-income-panama"
    ]
  },
  {
    lang: "es",
    slug: "outsourcing-planilla-panama",
    alternateSlug: "payroll-outsourcing-panama",
    kind: "service",
    cluster: "payroll",
    eyebrow: "Payroll & Cumplimiento Laboral",
    title: "Outsourcing de planilla, SIPE y cumplimiento laboral para empresas en Panamá",
    seoTitle: "Outsourcing de Planilla y SIPE en Panamá | JJL",
    description:
      "Externalice su planilla en Panamá con soporte para SIPE, CSS, novedades, décimo tercer mes, vacaciones, liquidaciones y controles de nómina.",
    summary:
      "JJL administra el ciclo operativo de nómina para que la empresa mantenga control, puntualidad y trazabilidad sin cargar internamente todo el procesamiento de planilla.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    keyPoints: [
      "Procesamiento periódico de planilla y novedades",
      "Soporte operativo en SIPE y obligaciones ante la CSS",
      "Décimo tercer mes, vacaciones, liquidaciones y prestaciones",
      "Calendario de cierres, aprobaciones y controles",
      "Visibilidad para gerencia sin depender de procesos manuales dispersos"
    ],
    sections: [
      {
        heading: "Delegar planilla sin perder control",
        paragraphs: [
          "El objetivo del outsourcing de planilla no es que la empresa deje de saber qué ocurre con su nómina. Es exactamente lo contrario: convertir un proceso sensible en un flujo documentado, predecible y revisable.",
          "JJL organiza novedades, cálculos, revisiones y entregables para que la gerencia tenga visibilidad y el equipo interno reduzca carga administrativa."
        ]
      },
      {
        heading: "Qué puede incluir el servicio de payroll",
        paragraphs: [
          "El alcance se adapta al tamaño de la planilla y a la distribución de responsabilidades entre JJL y el equipo del cliente."
        ],
        bullets: [
          "Procesamiento de salarios y novedades del período",
          "Control de vacaciones, ausencias y movimientos reportados",
          "Soporte para SIPE, avisos y planilla mensual",
          "Cálculos de décimo tercer mes y prestaciones aplicables",
          "Cálculos de salida y liquidaciones según información validada",
          "Reportes de nómina para aprobación antes del cierre",
          "Coordinación con asesor laboral cuando una situación requiere interpretación jurídica"
        ]
      },
      {
        heading: "SIPE forma parte central del proceso del empleador",
        paragraphs: [
          "La Caja de Seguro Social describe SIPE como la plataforma que permite a los empleadores gestionar afiliaciones, avisos de entrada, planillas mensuales, salarios y otras transacciones relacionadas con sus trabajadores.",
          "Un buen proceso de payroll necesita que la información que alimenta SIPE sea consistente con las novedades internas y con los controles de la empresa."
        ]
      },
      {
        heading: "Cuota patronal CSS vigente en 2026",
        paragraphs: [
          "La CSS informó que, para las cuotas correspondientes de abril de 2025 a febrero de 2027, el empleador paga 13.25% de los salarios como cuota patronal de seguridad social. La tasa sube a 14.25% desde marzo de 2027 y a 15.25% desde marzo de 2029.",
          "La calculadora incluida en esta página estima únicamente esa cuota patronal CSS sobre un salario mensual. No pretende calcular el costo laboral total ni sustituir una revisión profesional."
        ]
      },
      {
        heading: "Flujo de implementación",
        paragraphs: [
          "Antes del primer cierre se define quién reporta novedades, quién aprueba, qué fechas se usarán y qué documentos deben conservarse."
        ],
        bullets: [
          "1. Levantamiento de empleados, periodicidad y variables de nómina",
          "2. Calendario de novedades y aprobaciones",
          "3. Parametrización del flujo de cálculo y revisión",
          "4. Primera corrida controlada y conciliación",
          "5. Operación recurrente con reportes y archivo de soporte"
        ]
      }
    ],
    faqs: [
      {
        question: "¿JJL puede encargarse de SIPE por la empresa?",
        answer:
          "El alcance puede incluir soporte operativo en SIPE y en la preparación de la información necesaria, sujeto a las autorizaciones, accesos y responsabilidades que defina el empleador."
      },
      {
        question: "¿El servicio sirve para una empresa extranjera que acaba de contratar personal en Panamá?",
        answer:
          "Sí. El servicio puede estructurarse para empresas con equipos locales pequeños o en crecimiento, siempre que su situación de registro y obligaciones aplicables esté correctamente definida."
      },
      {
        question: "¿La calculadora muestra el costo total de un empleado?",
        answer:
          "No. La calculadora de esta página estima únicamente la cuota patronal CSS usando las tasas publicadas por la Caja de Seguro Social. No incluye otros costos, provisiones, seguros, impuestos o beneficios."
      }
    ],
    sources: [
      { label: "CSS — Sistema de Ingresos y Prestaciones Económicas (SIPE)", url: CSS_SIPE },
      { label: "CSS — Módulo de Planilla SIPE", url: CSS_SIPE_PLANILLA },
      { label: "CSS — Incremento escalonado de la cuota patronal", url: CSS_RATE }
    ],
    related: [
      "sipe-panama-guia-empleadores",
      "cuota-patronal-css-panama-2026-2027",
      "decimo-tercer-mes-panama-empresas"
    ],
    interactive: "css-calculator"
  },
  {
    lang: "en",
    slug: "payroll-outsourcing-panama",
    alternateSlug: "outsourcing-planilla-panama",
    kind: "service",
    cluster: "payroll",
    eyebrow: "Payroll & Labor Compliance",
    title: "Payroll outsourcing, SIPE, and labor-compliance support for companies in Panama",
    seoTitle: "Payroll Outsourcing & SIPE Services in Panama | JJL",
    description:
      "Outsource payroll in Panama with support for SIPE, CSS, employee changes, thirteenth-month payments, vacation, terminations, and payroll controls.",
    summary:
      "JJL manages the payroll operating cycle so companies can keep control, timeliness, and traceability without carrying the full processing burden internally.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    keyPoints: [
      "Recurring payroll processing and employee changes",
      "Operational support for SIPE and CSS obligations",
      "Thirteenth-month payments, vacation, terminations, and benefits",
      "Closing calendars, approvals, and controls",
      "Management visibility without fragmented manual processes"
    ],
    sections: [
      {
        heading: "Delegate payroll without losing control",
        paragraphs: [
          "Payroll outsourcing should not make management less informed about its payroll. The goal is the opposite: turn a sensitive process into a documented, predictable, and reviewable workflow.",
          "JJL organizes employee changes, calculations, reviews, and deliverables so management retains visibility while the internal team reduces administrative workload."
        ]
      },
      {
        heading: "What payroll support can include",
        paragraphs: [
          "Scope is adapted to payroll size and to the responsibilities retained by the client team."
        ],
        bullets: [
          "Salary processing and period changes",
          "Vacation, absence, and employee-movement control",
          "Support for SIPE, employee notices, and monthly payroll reporting",
          "Thirteenth-month and applicable benefit calculations",
          "Termination calculations based on validated information",
          "Payroll reports for approval before closing",
          "Coordination with labor counsel when legal interpretation is required"
        ]
      },
      {
        heading: "SIPE is a central part of the employer process",
        paragraphs: [
          "Panama's Social Security Fund describes SIPE as the platform employers use for worker affiliation, employee-entry notices, monthly payroll declarations, salary reporting, and other employee transactions.",
          "A strong payroll process requires the information feeding SIPE to be consistent with internal employee changes and company controls."
        ]
      },
      {
        heading: "Employer CSS contribution rate in 2026",
        paragraphs: [
          "The CSS has stated that for contribution months from April 2025 through February 2027, the employer Social Security contribution is 13.25% of salaries. The rate increases to 14.25% beginning in March 2027 and to 15.25% beginning in March 2029.",
          "The calculator on this page estimates only that employer CSS contribution on a monthly salary. It is not a total employment-cost calculator and does not replace professional review."
        ]
      },
      {
        heading: "Implementation flow",
        paragraphs: [
          "Before the first payroll close, we define who reports changes, who approves, the cut-off dates, and which supporting documents must be retained."
        ],
        bullets: [
          "1. Employee, frequency, and payroll-variable assessment",
          "2. Change-reporting and approval calendar",
          "3. Calculation and review workflow setup",
          "4. Controlled first run and reconciliation",
          "5. Recurring operation with reports and supporting-file retention"
        ]
      }
    ],
    faqs: [
      {
        question: "Can JJL handle SIPE operations for the company?",
        answer:
          "The service can include operational SIPE support and preparation of the required information, subject to the authorizations, access rights, and responsibilities defined by the employer."
      },
      {
        question: "Is this service suitable for a foreign company that has just hired staff in Panama?",
        answer:
          "Yes. The service can be structured for companies with small or growing local teams, provided their registration status and applicable obligations are properly defined."
      },
      {
        question: "Does the calculator show the total cost of an employee?",
        answer:
          "No. The calculator estimates only the employer CSS contribution using rates published by Panama's Social Security Fund. It does not include other costs, provisions, insurance, taxes, or benefits."
      }
    ],
    sources: [
      { label: "CSS — SIPE platform", url: CSS_SIPE },
      { label: "CSS — SIPE payroll module", url: CSS_SIPE_PLANILLA },
      { label: "CSS — Staged increase in employer contribution rate", url: CSS_RATE }
    ],
    related: [
      "sipe-panama-employer-guide",
      "panama-employer-social-security-contributions",
      "thirteenth-month-panama-employers"
    ],
    interactive: "css-calculator"
  },
  {
    lang: "es",
    slug: "que-es-empresa-sem-panama",
    alternateSlug: "what-is-sem-company-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "Guía SEM",
    title: "¿Qué es una empresa SEM en Panamá y qué tipo de operación puede desarrollar?",
    seoTitle: "Qué es una Empresa SEM en Panamá: Guía 2026 | JJL",
    description:
      "Guía clara sobre el régimen de Sedes de Empresas Multinacionales (SEM) en Panamá, sus actividades y por qué la operación contable importa.",
    summary:
      "El régimen SEM está diseñado para que sedes regionales de grupos multinacionales presten servicios a su grupo empresarial desde Panamá bajo un marco especial.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "5 min",
    keyPoints: [
      "SEM significa Sede de Empresa Multinacional",
      "El régimen se administra desde el MICI",
      "Puede incluir dirección, administración, contabilidad y soporte financiero",
      "La operación contable debe alinearse con la realidad de la sede regional"
    ],
    sections: [
      {
        heading: "Qué significa SEM",
        paragraphs: [
          "SEM es el régimen especial de Sedes de Empresas Multinacionales de Panamá. Su objetivo es facilitar que compañías multinacionales establezcan una sede regional en el país para prestar servicios a su casa matriz o a otras empresas de su mismo grupo.",
          "El régimen se encuentra bajo la Dirección de Sedes de Empresas Multinacionales del Ministerio de Comercio e Industrias."
        ]
      },
      {
        heading: "Qué actividades puede realizar",
        paragraphs: [
          "El MICI enumera, entre otras, actividades de dirección y administración, asistencia técnica, financiera o administrativa, servicios de tesorería corporativa, procesamiento electrónico y contabilidad del grupo empresarial."
        ],
        bullets: [
          "Dirección o administración regional o global",
          "Asistencia financiera y administrativa",
          "Tesorería corporativa y soporte interno",
          "Contabilidad del grupo empresarial",
          "Procesamiento y consolidación de operaciones"
        ]
      },
      {
        heading: "Qué cambia en la práctica para finanzas",
        paragraphs: [
          "Una sede regional normalmente necesita conciliar requerimientos locales con políticas corporativas globales. Esto puede implicar cierres mensuales, reporting en otra moneda, paquetes para casa matriz y controles documentales más rigurosos que los de una empresa pequeña local.",
          "Por eso el valor de un servicio contable para una SEM no está solamente en registrar: está en producir información consistente y utilizable por diferentes niveles de la organización."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Una SEM puede prestar servicios a cualquier cliente?",
        answer:
          "La función principal de una empresa SEM es prestar servicios al grupo empresarial al que pertenece. Existen excepciones específicas contempladas por la normativa, por lo que cada actividad debe revisarse según el marco aplicable."
      },
      {
        question: "¿La contabilidad está dentro de las actividades SEM?",
        answer:
          "Sí. El MICI incluye expresamente la contabilidad del grupo empresarial dentro de las actividades o servicios que puede realizar una empresa con licencia SEM."
      }
    ],
    sources: [
      { label: "MICI — Régimen SEM", url: MICI_SEM_HOME },
      { label: "MICI — Actividades de empresas SEM", url: MICI_SEM }
    ],
    related: ["contabilidad-empresas-sem-panama", "formulario-1119-sem-panama", "ley-526-sustancia-economica-panama"]
  },
  {
    lang: "en",
    slug: "what-is-sem-company-panama",
    alternateSlug: "que-es-empresa-sem-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "SEM Guide",
    title: "What is a SEM company in Panama and what operations can it perform?",
    seoTitle: "What Is a SEM Company in Panama? 2026 Guide | JJL",
    description:
      "A clear guide to Panama's Multinational Company Headquarters (SEM) regime, its activities, and why accounting operations matter.",
    summary:
      "The SEM regime is designed for regional headquarters of multinational groups to provide services to their corporate group from Panama under a special framework.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "5 min",
    keyPoints: [
      "SEM refers to Multinational Company Headquarters",
      "The regime is administered by MICI",
      "Activities may include management, accounting, and financial support",
      "Accounting operations should match the reality of the regional headquarters"
    ],
    sections: [
      {
        heading: "What SEM means",
        paragraphs: [
          "SEM is Panama's special regime for Multinational Company Headquarters. It is intended to facilitate the establishment of regional headquarters that provide services to a parent company or other companies within the same corporate group.",
          "The regime is administered by the Multinational Company Headquarters Directorate of the Ministry of Commerce and Industries."
        ]
      },
      {
        heading: "Activities a SEM company may perform",
        paragraphs: [
          "MICI lists activities including regional or global management, technical, financial or administrative assistance, corporate treasury, electronic processing, and accounting for the corporate group."
        ],
        bullets: [
          "Regional or global management and administration",
          "Financial and administrative assistance",
          "Corporate treasury and internal support",
          "Accounting for the corporate group",
          "Processing and consolidation of operations"
        ]
      },
      {
        heading: "What this means for the finance function",
        paragraphs: [
          "Regional headquarters often need to reconcile local requirements with global corporate policies. This may involve monthly closes, reporting in another currency, headquarters reporting packages, and stronger documentation controls than a small local business typically requires.",
          "The value of accounting support for a SEM company is therefore not just recording activity, but producing consistent information that different levels of the organization can use."
        ]
      }
    ],
    faqs: [
      {
        question: "Can a SEM company provide services to any customer?",
        answer:
          "The primary function of a SEM company is to provide services to its corporate group. Specific exceptions exist under the applicable framework, so each activity should be reviewed against the relevant rules."
      },
      {
        question: "Is accounting included among SEM activities?",
        answer:
          "Yes. MICI expressly lists accounting for the corporate group among the activities or services that a company with a SEM license may perform."
      }
    ],
    sources: [
      { label: "MICI — SEM regime", url: MICI_SEM_HOME },
      { label: "MICI — SEM company activities", url: MICI_SEM }
    ],
    related: ["sem-accounting-services-panama", "form-1119-sem-panama", "panama-law-526-economic-substance"]
  },
  {
    lang: "es",
    slug: "formulario-1119-sem-panama",
    alternateSlug: "form-1119-sem-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "Cumplimiento SEM",
    title: "Formulario 1119 de Retenciones SEM en Panamá: qué es y para qué se utiliza",
    seoTitle: "Formulario 1119 SEM Panamá: Retenciones y E-Tax 2.0 | JJL",
    description:
      "Resumen práctico del Formulario 1119 de Retenciones SEM adoptado por la DGI, su presentación y los tipos de retenciones que reporta.",
    summary:
      "La DGI adoptó el Formulario 1119 V:1 para la Declaración Jurada de Retenciones SEM y habilitó el código 958 para el pago correspondiente.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "4 min",
    keyPoints: [
      "El formulario se presenta en E-Tax 2.0",
      "La DGI lo identifica como Declaración Jurada de Retenciones SEM",
      "Está asociado al código 958 en tributación internacional",
      "Las transacciones deben estar conciliadas con la contabilidad y su soporte"
    ],
    sections: [
      {
        heading: "Qué es el Formulario 1119",
        paragraphs: [
          "La Dirección General de Ingresos identifica el Formulario 1119 V:1 como la Declaración Jurada de Retenciones SEM. Fue adoptado mediante la Resolución No. 201-1394 de 5 de febrero de 2025.",
          "La presentación se realiza en línea a través de E-Tax 2.0."
        ]
      },
      {
        heading: "Qué operaciones reporta",
        paragraphs: [
          "La DGI señala que el formulario cubre retenciones específicas relacionadas con pagos efectuados por o hacia compañías bajo el régimen SEM, según el tipo de operación descrito por la normativa y la guía oficial.",
          "Una de las reglas señaladas por la DGI es la retención del 5% sobre el 50% de determinados pagos por servicios recibidos de personas naturales o jurídicas domiciliadas fuera de Panamá, equivalente a una tasa efectiva de 2.5%."
        ]
      },
      {
        heading: "Por qué contabilidad y retenciones deben hablar el mismo idioma",
        paragraphs: [
          "Antes de preparar una declaración, los pagos, beneficiarios, conceptos, facturas y soportes deben estar identificados correctamente en la contabilidad. La conciliación reduce diferencias entre lo reportado fiscalmente y lo reflejado en los libros.",
          "En operaciones multinacionales también es importante conservar una trazabilidad clara para revisiones internas de la casa matriz."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Dónde se presenta el Formulario 1119?",
        answer: "La DGI indica que se presenta en línea mediante el sistema E-Tax 2.0."
      },
      {
        question: "¿Cuál es el código de pago asociado a Retenciones SEM?",
        answer: "La DGI señala el código 958 dentro de la Boleta de Pago de Tributación Internacional."
      }
    ],
    sources: [{ label: "DGI — Formulario 1119 V:1", url: DGI_1119 }],
    related: ["contabilidad-empresas-sem-panama", "que-es-empresa-sem-panama", "ley-526-sustancia-economica-panama"]
  },
  {
    lang: "en",
    slug: "form-1119-sem-panama",
    alternateSlug: "formulario-1119-sem-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "SEM Compliance",
    title: "Panama SEM Form 1119: what it is and what it is used for",
    seoTitle: "Panama SEM Form 1119: Withholdings and E-Tax 2.0 | JJL",
    description:
      "A practical overview of Panama DGI Form 1119 for SEM withholdings, its filing process, and the transactions it reports.",
    summary:
      "Panama's DGI adopted Form 1119 V:1 for the SEM Withholding Tax Return and enabled code 958 for the related payment.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "4 min",
    keyPoints: [
      "The form is filed through E-Tax 2.0",
      "DGI identifies it as the SEM Withholding Tax Return",
      "It is associated with code 958 for international-tax payments",
      "Transactions should reconcile with accounting records and supporting documents"
    ],
    sections: [
      {
        heading: "What is Form 1119?",
        paragraphs: [
          "Panama's General Directorate of Revenue identifies Form 1119 V:1 as the SEM Withholding Tax Return. It was adopted through Resolution No. 201-1394 of February 5, 2025.",
          "The filing is submitted online through E-Tax 2.0."
        ]
      },
      {
        heading: "What transactions does it report?",
        paragraphs: [
          "DGI states that the form covers specific withholdings related to payments made by or to companies under the SEM regime, depending on the type of transaction described by the applicable rules and official guidance.",
          "One rule highlighted by DGI is a 5% withholding on 50% of certain payments for services received from individuals or legal entities domiciled outside Panama, resulting in an effective 2.5% rate."
        ]
      },
      {
        heading: "Why accounting and withholding reporting must reconcile",
        paragraphs: [
          "Before a filing is prepared, payments, beneficiaries, concepts, invoices, and supporting documents should be correctly identified in the accounting records. Reconciliation helps reduce differences between tax reporting and the books.",
          "For multinational operations, clear traceability also supports headquarters-level internal reviews."
        ]
      }
    ],
    faqs: [
      {
        question: "Where is Form 1119 filed?",
        answer: "DGI states that the form is filed online through the E-Tax 2.0 system."
      },
      {
        question: "What payment code is associated with SEM Withholdings?",
        answer: "DGI lists code 958 in the International Tax Payment Slip."
      }
    ],
    sources: [{ label: "DGI — Form 1119 V:1", url: DGI_1119 }],
    related: ["sem-accounting-services-panama", "what-is-sem-company-panama", "panama-law-526-economic-substance"]
  },
  {
    lang: "es",
    slug: "ley-526-sustancia-economica-panama",
    alternateSlug: "panama-law-526-economic-substance",
    kind: "article",
    cluster: "sem",
    eyebrow: "Actualización 2026",
    title: "Ley 526 de 2026 en Panamá: sustancia económica para determinadas rentas pasivas de fuente extranjera",
    seoTitle: "Ley 526 Panamá 2026: Sustancia Económica y Rentas Pasivas | JJL",
    description:
      "Resumen informativo de la Ley 526 de 28 de mayo de 2026 sobre sustancia económica y determinadas rentas pasivas de fuente extranjera.",
    summary:
      "La Ley 526 modifica el Código Fiscal e introduce reglas de sustancia económica para ciertas entidades de grupos multinacionales con rentas pasivas de fuente extranjera, con vigencia desde el período fiscal 2027.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "6 min",
    keyPoints: [
      "Fue promulgada el 28 de mayo de 2026",
      "Aplica desde el período fiscal 2027",
      "Se enfoca en entidades de grupos multinacionales con determinadas rentas pasivas extranjeras",
      "La documentación contable y operativa será relevante para demostrar la realidad de la operación"
    ],
    sections: [
      {
        heading: "Qué cambió con la Ley 526",
        paragraphs: [
          "La Ley 526 adicionó al Código Fiscal un capítulo de reglas de sustancia económica para rentas pasivas de fuente extranjera. El texto se dirige a entidades integrantes de grupos multinacionales constituidas o domiciliadas en Panamá que obtengan las rentas comprendidas por la norma.",
          "La propia ley indica que comenzará a regir a partir del período fiscal 2027."
        ]
      },
      {
        heading: "Qué busca la sustancia económica",
        paragraphs: [
          "En términos generales, el enfoque de sustancia económica busca que exista una relación real entre la entidad, la actividad que genera o administra la renta y los recursos utilizados en Panamá.",
          "La evaluación concreta depende del tipo de entidad y de renta. Por eso no debe asumirse que todas las empresas panameñas o todos los ingresos extranjeros quedan automáticamente dentro del mismo tratamiento."
        ]
      },
      {
        heading: "Qué debería revisar una empresa durante 2026",
        paragraphs: [
          "Sin sustituir una evaluación legal o fiscal, desde la perspectiva contable es razonable revisar si la documentación y los procesos internos permiten explicar dónde se toman decisiones, qué recursos se utilizan, qué gastos soportan la actividad y cómo se registran las rentas relevantes.",
          "La preparación temprana permite detectar vacíos documentales antes del inicio del período fiscal 2027."
        ],
        bullets: [
          "Mapeo de entidades y fuentes de ingreso",
          "Documentación de funciones y responsables",
          "Trazabilidad de gastos, contratos y soportes",
          "Consistencia entre operación real, contabilidad y reporting",
          "Coordinación con asesores fiscales y legales para determinar aplicabilidad"
        ],
        callout:
          "Este contenido es informativo y no constituye opinión legal ni fiscal. La aplicación de la Ley 526 debe analizarse según la estructura y los hechos de cada entidad."
      }
    ],
    faqs: [
      {
        question: "¿La Ley 526 ya está vigente en 2026?",
        answer:
          "La ley fue promulgada en mayo de 2026, pero su artículo de vigencia establece que comienza a regir a partir del período fiscal 2027."
      },
      {
        question: "¿Aplica a cualquier empresa que reciba dinero del extranjero?",
        answer:
          "No debe asumirse así. El texto legal se refiere a entidades integrantes de grupos multinacionales y a determinadas rentas pasivas de fuente extranjera. La aplicabilidad requiere análisis de los hechos concretos."
      }
    ],
    sources: [{ label: "Ley 526 de 28 de mayo de 2026 — Gaceta Oficial", url: LAW_526 }],
    related: ["contabilidad-empresas-sem-panama", "renta-fuente-extranjera-panama", "que-es-empresa-sem-panama"]
  },
  {
    lang: "en",
    slug: "panama-law-526-economic-substance",
    alternateSlug: "ley-526-sustancia-economica-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "2026 Update",
    title: "Panama Law 526 of 2026: economic substance for certain foreign-source passive income",
    seoTitle: "Panama Law 526: Economic Substance Rules for 2027 | JJL",
    description:
      "An informational overview of Panama Law 526 of May 28, 2026 on economic substance and certain foreign-source passive income.",
    summary:
      "Law 526 amended Panama's Tax Code and introduced economic-substance rules for certain multinational-group entities earning foreign-source passive income, effective from fiscal year 2027.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "6 min",
    keyPoints: [
      "The law was enacted on May 28, 2026",
      "It applies beginning with fiscal year 2027",
      "It targets certain multinational-group entities with foreign-source passive income",
      "Accounting and operational documentation may be important in demonstrating how the entity actually operates"
    ],
    sections: [
      {
        heading: "What changed under Law 526",
        paragraphs: [
          "Law 526 added a chapter to Panama's Tax Code establishing economic-substance rules for foreign-source passive income. The text addresses entities that are part of multinational groups, are incorporated or domiciled in Panama, and earn income covered by the law.",
          "The law itself states that it begins to apply from fiscal year 2027."
        ]
      },
      {
        heading: "What economic substance is trying to establish",
        paragraphs: [
          "At a high level, economic-substance rules seek a real connection between the entity, the activity generating or managing the relevant income, and the resources used in Panama.",
          "The specific analysis depends on the entity and income type, so companies should not assume that every Panamanian entity or every type of foreign income receives identical treatment."
        ]
      },
      {
        heading: "What companies can review during 2026",
        paragraphs: [
          "Without replacing legal or tax analysis, an accounting review can help determine whether internal processes and documentation clearly explain where decisions are made, what resources are used, what expenses support the activity, and how relevant income is recorded.",
          "Preparing early gives the organization time to identify documentation gaps before fiscal year 2027 begins."
        ],
        bullets: [
          "Map entities and income sources",
          "Document functions and responsible personnel",
          "Maintain traceability for expenses, contracts, and support",
          "Align actual operations, accounting records, and reporting",
          "Coordinate with tax and legal advisers to determine applicability"
        ],
        callout:
          "This content is informational and is not legal or tax advice. Application of Law 526 must be assessed based on each entity's structure and facts."
      }
    ],
    faqs: [
      {
        question: "Is Law 526 already effective in 2026?",
        answer:
          "The law was enacted in May 2026, but its effective-date provision states that it begins to apply from fiscal year 2027."
      },
      {
        question: "Does it apply to every company receiving money from abroad?",
        answer:
          "That should not be assumed. The law addresses entities that are part of multinational groups and certain categories of foreign-source passive income. Applicability requires a facts-and-circumstances analysis."
      }
    ],
    sources: [{ label: "Law 526 of May 28, 2026 — Official Gazette", url: LAW_526 }],
    related: ["sem-accounting-services-panama", "foreign-source-income-panama", "what-is-sem-company-panama"]
  },
  {
    lang: "es",
    slug: "renta-fuente-extranjera-panama",
    alternateSlug: "foreign-source-income-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "Operaciones internacionales",
    title: "Renta de fuente extranjera en Panamá: qué debe organizar una empresa multinacional desde contabilidad",
    seoTitle: "Renta de Fuente Extranjera en Panamá: Control Contable 2026 | JJL",
    description:
      "Qué documentación, trazabilidad y controles contables conviene organizar cuando una entidad panameña forma parte de un grupo multinacional con actividad internacional.",
    summary:
      "La clasificación fiscal requiere asesoría según cada caso, pero la contabilidad puede prepararse para que contratos, ingresos, gastos y funciones sean trazables y coherentes con la operación real.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "5 min",
    keyPoints: [
      "No todo ingreso extranjero tiene el mismo tratamiento",
      "La trazabilidad documental es clave para análisis posteriores",
      "Contabilidad debe reflejar funciones, contratos y flujos reales",
      "Ley 526 añade una razón adicional para revisar estructuras multinacionales antes de 2027"
    ],
    sections: [
      {
        heading: "Primero: separar el concepto contable del criterio fiscal",
        paragraphs: [
          "Que un pago provenga del exterior no determina por sí solo su tratamiento fiscal. La fuente, naturaleza de la renta, funciones y estructura deben analizarse conforme a la normativa aplicable.",
          "Desde contabilidad, el objetivo es conservar la información necesaria para que ese análisis pueda hacerse con hechos y documentos, no con reconstrucciones de último minuto."
        ]
      },
      {
        heading: "Documentos y datos que conviene tener organizados",
        paragraphs: [
          "Una estructura multinacional se vuelve más fácil de revisar cuando contratos, facturas, centros de costo, beneficiarios, monedas y responsables se encuentran relacionados entre sí."
        ],
        bullets: [
          "Contratos y acuerdos intercompañía",
          "Facturas y descripción del servicio o activo",
          "Identificación de contraparte y jurisdicción",
          "Moneda, fecha y cuenta de registro",
          "Gastos asociados y centros de costo",
          "Responsables y evidencia de funciones realizadas"
        ]
      },
      {
        heading: "Por qué 2026 es un año importante para revisar esto",
        paragraphs: [
          "La Ley 526 de 2026 incorpora reglas de sustancia económica para determinadas rentas pasivas de fuente extranjera de entidades de grupos multinacionales y comienza a regir en el período fiscal 2027.",
          "Aunque la ley no convierte automáticamente toda renta extranjera en renta gravada, sí aumenta la importancia de contar con una operación documentada y coherente."
        ]
      }
    ],
    faqs: [
      {
        question: "¿JJL determina si una renta es gravada o no gravada?",
        answer:
          "JJL puede organizar y conciliar la información contable necesaria para el análisis. Cuando la clasificación requiere un criterio fiscal o legal especializado, debe validarse con el asesor correspondiente."
      }
    ],
    sources: [{ label: "Ley 526 de 28 de mayo de 2026 — Gaceta Oficial", url: LAW_526 }],
    related: ["contabilidad-empresas-sem-panama", "ley-526-sustancia-economica-panama", "formulario-1119-sem-panama"]
  },
  {
    lang: "en",
    slug: "foreign-source-income-panama",
    alternateSlug: "renta-fuente-extranjera-panama",
    kind: "article",
    cluster: "sem",
    eyebrow: "International Operations",
    title: "Foreign-source income in Panama: what multinational companies should organize from an accounting perspective",
    seoTitle: "Foreign-Source Income in Panama: Accounting Controls 2026 | JJL",
    description:
      "Documentation, traceability, and accounting controls to organize when a Panamanian entity is part of a multinational group with international activity.",
    summary:
      "Tax classification requires case-specific advice, but accounting can be structured so contracts, income, expenses, and functions are traceable and consistent with actual operations.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Julissa Lewis",
    readingTime: "5 min",
    keyPoints: [
      "Not all foreign income receives the same treatment",
      "Document traceability is essential for later analysis",
      "Accounting should reflect actual functions, contracts, and cash flows",
      "Law 526 adds another reason to review multinational structures before 2027"
    ],
    sections: [
      {
        heading: "First: separate the accounting concept from the tax conclusion",
        paragraphs: [
          "A payment coming from abroad does not by itself determine its tax treatment. Source, income nature, functions, and structure must be analyzed under the applicable rules.",
          "From an accounting perspective, the goal is to preserve the information required for that analysis so decisions are based on facts and documents rather than last-minute reconstruction."
        ]
      },
      {
        heading: "Documents and data worth organizing",
        paragraphs: [
          "A multinational structure becomes easier to review when contracts, invoices, cost centers, counterparties, currencies, and responsible personnel are connected to one another."
        ],
        bullets: [
          "Contracts and intercompany agreements",
          "Invoices and description of the service or asset",
          "Counterparty and jurisdiction identification",
          "Currency, date, and accounting entry",
          "Associated expenses and cost centers",
          "Responsible personnel and evidence of functions performed"
        ]
      },
      {
        heading: "Why 2026 is an important year to review this",
        paragraphs: [
          "Panama Law 526 of 2026 introduces economic-substance rules for certain foreign-source passive income earned by multinational-group entities and begins to apply in fiscal year 2027.",
          "The law does not automatically make every type of foreign income taxable, but it does increase the importance of maintaining a documented and coherent operating model."
        ]
      }
    ],
    faqs: [
      {
        question: "Does JJL determine whether foreign income is taxable or exempt?",
        answer:
          "JJL can organize and reconcile the accounting information needed for the analysis. When classification requires specialized tax or legal judgment, it should be validated with the appropriate adviser."
      }
    ],
    sources: [{ label: "Law 526 of May 28, 2026 — Official Gazette", url: LAW_526 }],
    related: ["sem-accounting-services-panama", "panama-law-526-economic-substance", "form-1119-sem-panama"]
  },
  {
    lang: "es",
    slug: "sipe-panama-guia-empleadores",
    alternateSlug: "sipe-panama-employer-guide",
    kind: "article",
    cluster: "payroll",
    eyebrow: "Payroll Panamá",
    title: "SIPE en Panamá: guía práctica para empleadores y equipos de nómina",
    seoTitle: "SIPE Panamá: Guía para Empleadores y Planilla | JJL",
    description:
      "Qué es SIPE, qué procesos concentra para el empleador y por qué debe integrarse a un flujo ordenado de payroll y novedades.",
    summary:
      "SIPE es la plataforma de la Caja de Seguro Social que concentra procesos como afiliación, avisos de entrada, planilla mensual, salarios y otras transacciones del empleador.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "5 min",
    keyPoints: [
      "SIPE es una plataforma oficial de la CSS",
      "Integra afiliación, avisos, planilla y reporte de salarios",
      "La calidad de las novedades internas afecta la calidad de la información reportada",
      "Payroll outsourcing puede reducir carga operativa sin quitar control a la empresa"
    ],
    sections: [
      {
        heading: "Qué es SIPE",
        paragraphs: [
          "La Caja de Seguro Social define SIPE como el Sistema de Ingresos y Prestaciones Económicas, una plataforma tecnológica utilizada por empleadores y asegurados para realizar diferentes transacciones a través de Internet.",
          "Para el empleador, la CSS describe funciones como afiliación de trabajadores, avisos de entrada, elaboración y presentación de la planilla mensual y reporte de salarios."
        ]
      },
      {
        heading: "El problema no suele ser solamente entrar al sistema",
        paragraphs: [
          "Los errores de payroll normalmente empiezan antes de SIPE: novedades entregadas tarde, información incompleta, cambios no aprobados o diferencias entre recursos humanos y contabilidad.",
          "Un flujo robusto fija fechas de corte, responsables, evidencia de aprobación y conciliaciones antes de reportar."
        ]
      },
      {
        heading: "Qué debería controlar un empleador cada mes",
        paragraphs: [
          "El calendario puede variar según la empresa, pero la lógica de control se mantiene."
        ],
        bullets: [
          "Altas, bajas y movimientos del personal",
          "Salarios, horas, variables y ausencias",
          "Vacaciones y otras novedades aprobadas",
          "Conciliación del reporte previo al cierre",
          "Archivo de soportes y evidencia de aprobación"
        ]
      }
    ],
    faqs: [
      {
        question: "¿SIPE es solo para empresas grandes?",
        answer:
          "No. La CSS indica que el sistema es utilizado por empleadores personas naturales o jurídicas, estatales y domésticos con trabajadores a su servicio."
      },
      {
        question: "¿Se puede externalizar el proceso de SIPE?",
        answer:
          "Una empresa puede apoyarse en un proveedor para preparar y procesar información, siempre bajo las autorizaciones, accesos y responsabilidades que correspondan al empleador."
      }
    ],
    sources: [
      { label: "CSS — SIPE", url: CSS_SIPE },
      { label: "CSS — Módulo de Planilla SIPE", url: CSS_SIPE_PLANILLA }
    ],
    related: ["outsourcing-planilla-panama", "cuota-patronal-css-panama-2026-2027", "decimo-tercer-mes-panama-empresas"]
  },
  {
    lang: "en",
    slug: "sipe-panama-employer-guide",
    alternateSlug: "sipe-panama-guia-empleadores",
    kind: "article",
    cluster: "payroll",
    eyebrow: "Panama Payroll",
    title: "SIPE in Panama: a practical guide for employers and payroll teams",
    seoTitle: "Panama SIPE: Employer and Payroll Guide | JJL",
    description:
      "What SIPE is, which employer processes it centralizes, and why it should be integrated into a structured payroll and employee-change workflow.",
    summary:
      "SIPE is the Panama Social Security Fund platform that centralizes processes such as worker affiliation, entry notices, monthly payroll, salary reporting, and other employer transactions.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "5 min",
    keyPoints: [
      "SIPE is an official CSS platform",
      "It integrates affiliation, notices, payroll, and salary reporting",
      "The quality of internal employee changes affects the quality of reported information",
      "Payroll outsourcing can reduce workload without removing management control"
    ],
    sections: [
      {
        heading: "What is SIPE?",
        paragraphs: [
          "Panama's Social Security Fund defines SIPE as the Income and Economic Benefits System, a technology platform used by employers and insured workers to carry out different transactions online.",
          "For employers, CSS describes functions including worker affiliation, employee-entry notices, preparation and submission of monthly payroll, and salary reporting."
        ]
      },
      {
        heading: "The problem is rarely just logging into the system",
        paragraphs: [
          "Payroll errors often start before SIPE: late changes, incomplete information, unapproved adjustments, or differences between human resources and accounting.",
          "A strong workflow establishes cut-off dates, responsible personnel, approval evidence, and reconciliations before information is reported."
        ]
      },
      {
        heading: "What employers should control each month",
        paragraphs: [
          "The exact calendar can vary by company, but the control logic remains similar."
        ],
        bullets: [
          "Employee entries, exits, and movements",
          "Salaries, hours, variable compensation, and absences",
          "Vacation and other approved changes",
          "Pre-close reconciliation",
          "Supporting files and approval evidence"
        ]
      }
    ],
    faqs: [
      {
        question: "Is SIPE only for large companies?",
        answer:
          "No. CSS states that the system is used by employers that are individuals or legal entities, as well as public and domestic employers with workers under their responsibility."
      },
      {
        question: "Can SIPE-related processing be outsourced?",
        answer:
          "A company can use a provider to prepare and process information, subject to the authorizations, access rights, and responsibilities that remain with the employer."
      }
    ],
    sources: [
      { label: "CSS — SIPE", url: CSS_SIPE },
      { label: "CSS — SIPE payroll module", url: CSS_SIPE_PLANILLA }
    ],
    related: ["payroll-outsourcing-panama", "panama-employer-social-security-contributions", "thirteenth-month-panama-employers"]
  },
  {
    lang: "es",
    slug: "cuota-patronal-css-panama-2026-2027",
    alternateSlug: "panama-employer-social-security-contributions",
    kind: "article",
    cluster: "payroll",
    eyebrow: "CSS 2026–2029",
    title: "Cuota patronal CSS en Panamá: tasas 2026, 2027 y 2029 para empleadores",
    seoTitle: "Cuota Patronal CSS Panamá 2026 y 2027 + Calculadora | JJL",
    description:
      "Tasas patronales de CSS informadas para 2026, 2027 y 2029, con una calculadora básica para estimar la cuota patronal mensual.",
    summary:
      "La CSS estableció un aumento escalonado de la cuota patronal: 13.25% hasta febrero de 2027, 14.25% desde marzo de 2027 y 15.25% desde marzo de 2029.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "4 min",
    keyPoints: [
      "13.25% desde la cuota de abril de 2025 hasta febrero de 2027",
      "14.25% desde marzo de 2027 hasta febrero de 2029",
      "15.25% desde marzo de 2029",
      "La calculadora estima solo cuota patronal CSS, no costo laboral total"
    ],
    sections: [
      {
        heading: "Tasas publicadas por la Caja de Seguro Social",
        paragraphs: [
          "La CSS comunicó que la reforma introducida por la Ley 462 de 18 de marzo de 2025 incrementa de forma escalonada la cuota que pagan los empleadores.",
          "Para las cuotas de abril de 2025 a febrero de 2027 la tasa patronal indicada es 13.25%. Desde marzo de 2027 pasa a 14.25% y desde marzo de 2029 a 15.25%."
        ]
      },
      {
        heading: "Cómo usar la calculadora",
        paragraphs: [
          "Ingrese un salario mensual para estimar únicamente la cuota patronal de seguridad social bajo cada una de las tres tasas. La herramienta sirve para visualizar el impacto del cambio escalonado, no para calcular el costo total de contratación.",
          "Otros conceptos laborales, fiscales, seguros o provisiones pueden aplicar y deben analizarse por separado."
        ]
      },
      {
        heading: "Por qué payroll debe anticipar los cambios de tasa",
        paragraphs: [
          "Cuando una tasa cambia, no solo se modifica el importe de la obligación. También deben revisarse presupuestos, proyecciones de personal y parametrizaciones de sistemas para evitar diferencias al momento del cierre.",
          "Para empresas con múltiples empleados, una variación de un punto porcentual puede ser material en el presupuesto anual."
        ]
      }
    ],
    faqs: [
      {
        question: "¿Cuál es la cuota patronal CSS en agosto de 2026?",
        answer:
          "Según la CSS, la tasa patronal aplicable a las cuotas comprendidas entre abril de 2025 y febrero de 2027 es 13.25% de los salarios."
      },
      {
        question: "¿Cuándo sube a 14.25%?",
        answer: "La CSS indica que la tasa de 14.25% comienza en marzo de 2027."
      }
    ],
    sources: [{ label: "CSS — Aumento escalonado de cuota patronal", url: CSS_RATE }],
    related: ["outsourcing-planilla-panama", "sipe-panama-guia-empleadores", "decimo-tercer-mes-panama-empresas"],
    interactive: "css-calculator"
  },
  {
    lang: "en",
    slug: "panama-employer-social-security-contributions",
    alternateSlug: "cuota-patronal-css-panama-2026-2027",
    kind: "article",
    cluster: "payroll",
    eyebrow: "CSS 2026–2029",
    title: "Panama employer CSS contribution rates for 2026, 2027, and 2029",
    seoTitle: "Panama Employer CSS Rates 2026–2027 + Calculator | JJL",
    description:
      "Employer CSS rates published for 2026, 2027, and 2029, with a basic calculator to estimate the monthly employer contribution.",
    summary:
      "Panama's CSS established a staged increase in the employer contribution rate: 13.25% through February 2027, 14.25% from March 2027, and 15.25% from March 2029.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "4 min",
    keyPoints: [
      "13.25% from the April 2025 contribution month through February 2027",
      "14.25% from March 2027 through February 2029",
      "15.25% from March 2029",
      "The calculator estimates only the employer CSS contribution, not total employment cost"
    ],
    sections: [
      {
        heading: "Rates published by Panama's Social Security Fund",
        paragraphs: [
          "CSS stated that the reform introduced by Law 462 of March 18, 2025 increases the employer contribution in stages.",
          "For contribution months from April 2025 through February 2027, the stated employer rate is 13.25%. It rises to 14.25% from March 2027 and 15.25% from March 2029."
        ]
      },
      {
        heading: "How to use the calculator",
        paragraphs: [
          "Enter a monthly salary to estimate only the employer Social Security contribution under each of the three published rates. The tool is intended to visualize the staged change, not calculate total employment cost.",
          "Other labor costs, taxes, insurance, or provisions may apply and should be reviewed separately."
        ]
      },
      {
        heading: "Why payroll should prepare for rate changes",
        paragraphs: [
          "A rate change affects more than the amount due. Budgets, workforce projections, and system parameters should also be reviewed to avoid differences at payroll close.",
          "For companies with multiple employees, a one-percentage-point movement can be material to the annual payroll budget."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the employer CSS rate in August 2026?",
        answer:
          "According to CSS, the employer rate for contribution months from April 2025 through February 2027 is 13.25% of salaries."
      },
      {
        question: "When does the rate increase to 14.25%?",
        answer: "CSS states that the 14.25% rate begins in March 2027."
      }
    ],
    sources: [{ label: "CSS — Staged employer contribution increase", url: CSS_RATE }],
    related: ["payroll-outsourcing-panama", "sipe-panama-employer-guide", "thirteenth-month-panama-employers"],
    interactive: "css-calculator"
  },
  {
    lang: "es",
    slug: "decimo-tercer-mes-panama-empresas",
    alternateSlug: "thirteenth-month-panama-employers",
    kind: "article",
    cluster: "payroll",
    eyebrow: "Payroll Panamá",
    title: "Décimo tercer mes en Panamá: cómo integrarlo a un proceso de planilla ordenado",
    seoTitle: "Décimo Tercer Mes Panamá: Control de Planilla para Empresas | JJL",
    description:
      "Buenas prácticas de control para que el décimo tercer mes se procese con información conciliada, calendario definido y trazabilidad.",
    summary:
      "El décimo tercer mes es un componente recurrente de la nómina panameña. Su correcta gestión depende de datos de salario y períodos correctamente conciliados antes del cálculo.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "4 min",
    keyPoints: [
      "Debe formar parte del calendario anual de payroll",
      "La base de datos de empleados debe estar conciliada antes del cálculo",
      "Cambios de salario y períodos trabajados requieren trazabilidad",
      "La revisión final debe quedar documentada antes del pago"
    ],
    sections: [
      {
        heading: "Tratarlo como un proceso, no como una urgencia tres veces al año",
        paragraphs: [
          "Cuando el décimo tercer mes se deja para el último momento, aparecen diferencias por cambios de salario, fechas de ingreso, ausencias o información incompleta. Un equipo de payroll ordenado lo incorpora al calendario desde el inicio del año.",
          "La preparación debe empezar con la misma fuente de datos que alimenta la planilla regular."
        ]
      },
      {
        heading: "Controles antes del cálculo",
        paragraphs: [
          "La empresa debe verificar que la información base sea consistente y que cualquier excepción esté documentada."
        ],
        bullets: [
          "Listado activo de trabajadores",
          "Fechas de ingreso y salida",
          "Historial de remuneraciones del período",
          "Novedades que puedan afectar la base",
          "Revisión y aprobación antes del pago"
        ]
      },
      {
        heading: "Outsourcing como control operativo",
        paragraphs: [
          "Externalizar nómina puede ayudar a que las fechas especiales no dependan de una sola persona interna. El proveedor mantiene calendario, checklist y evidencia de revisión, mientras la empresa conserva la aprobación final."
        ]
      }
    ],
    faqs: [
      {
        question: "¿JJL puede incluir décimo tercer mes dentro del outsourcing de planilla?",
        answer:
          "Sí. El servicio de payroll puede incorporar el cálculo y control operativo del décimo tercer mes dentro del calendario de nómina acordado con la empresa."
      }
    ],
    sources: [{ label: "CSS — SIPE y procesos de planilla", url: CSS_SIPE_PLANILLA }],
    related: ["outsourcing-planilla-panama", "sipe-panama-guia-empleadores", "cuota-patronal-css-panama-2026-2027"]
  },
  {
    lang: "en",
    slug: "thirteenth-month-panama-employers",
    alternateSlug: "decimo-tercer-mes-panama-empresas",
    kind: "article",
    cluster: "payroll",
    eyebrow: "Panama Payroll",
    title: "Panama thirteenth-month payment: how to integrate it into a controlled payroll process",
    seoTitle: "Panama Thirteenth-Month Payroll: Employer Controls | JJL",
    description:
      "Payroll-control practices for processing Panama's thirteenth-month payment with reconciled data, a defined calendar, and traceability.",
    summary:
      "The thirteenth-month payment is a recurring element of Panama payroll. Reliable processing depends on reconciled salary and employment-period data before calculation.",
    published: "2026-08-31",
    updated: "2026-08-31",
    author: "Jissbeth Lewis",
    readingTime: "4 min",
    keyPoints: [
      "It should be part of the annual payroll calendar",
      "Employee data should be reconciled before calculation",
      "Salary changes and employment periods require traceability",
      "Final review should be documented before payment"
    ],
    sections: [
      {
        heading: "Treat it as a process, not a last-minute event",
        paragraphs: [
          "When the thirteenth-month payment is left until the last minute, differences can arise from salary changes, hire dates, absences, or incomplete information. A controlled payroll team includes it in the annual calendar from the beginning.",
          "Preparation should start from the same source data used for regular payroll."
        ]
      },
      {
        heading: "Controls before calculation",
        paragraphs: [
          "The company should confirm that source information is consistent and that any exception is documented."
        ],
        bullets: [
          "Active employee list",
          "Hire and termination dates",
          "Compensation history for the relevant period",
          "Changes that may affect the calculation base",
          "Review and approval before payment"
        ]
      },
      {
        heading: "Outsourcing as an operational control",
        paragraphs: [
          "Outsourcing payroll can reduce dependency on a single internal person for special payment dates. The provider maintains the calendar, checklist, and review evidence while the company retains final approval."
        ]
      }
    ],
    faqs: [
      {
        question: "Can JJL include the thirteenth-month payment in payroll outsourcing?",
        answer:
          "Yes. Payroll support can include the calculation and operational control of the thirteenth-month payment within the payroll calendar agreed with the company."
      }
    ],
    sources: [{ label: "CSS — SIPE payroll processes", url: CSS_SIPE_PLANILLA }],
    related: ["payroll-outsourcing-panama", "sipe-panama-employer-guide", "panama-employer-social-security-contributions"]
  }
];

export function getContentPage(lang: Lang, slug: string) {
  return pages.find((page) => page.lang === lang && page.slug === slug);
}

export function getContentPages(lang?: Lang) {
  return lang ? pages.filter((page) => page.lang === lang) : pages;
}

export function getRelatedPages(page: ContentPage) {
  return page.related
    .map((slug) => getContentPage(page.lang, slug))
    .filter((item): item is ContentPage => Boolean(item));
}

export function serviceSlug(lang: Lang, cluster: "sem" | "payroll") {
  if (cluster === "sem") {
    return lang === "es" ? "contabilidad-empresas-sem-panama" : "sem-accounting-services-panama";
  }
  return lang === "es" ? "outsourcing-planilla-panama" : "payroll-outsourcing-panama";
}

export function resourceHubSlug(lang: Lang) {
  return lang === "es" ? "recursos" : "resources";
}

export const RESOURCE_HUB_META = {
  es: {
    slug: "recursos",
    alternateSlug: "resources",
    title: "Recursos de Contabilidad, SEM y Payroll en Panamá",
    seoTitle: "Recursos de Contabilidad, SEM y Payroll en Panamá | JJL",
    description:
      "Guías prácticas de JJL sobre empresas SEM, multinacionales, Ley 526, SIPE, CSS y procesos de planilla en Panamá.",
    eyebrow: "Centro de conocimiento",
    summary:
      "Contenido práctico para equipos financieros, gerencias y empleadores que necesitan entender mejor cómo operar, documentar y controlar procesos contables y de payroll en Panamá."
  },
  en: {
    slug: "resources",
    alternateSlug: "recursos",
    title: "Panama Accounting, SEM, and Payroll Resources",
    seoTitle: "Panama Accounting, SEM & Payroll Resources | JJL",
    description:
      "Practical JJL guides on SEM companies, multinationals, Law 526, SIPE, CSS, and payroll operations in Panama.",
    eyebrow: "Knowledge center",
    summary:
      "Practical content for finance teams, managers, and employers that need a clearer view of accounting, documentation, and payroll operations in Panama."
  }
} as const;
