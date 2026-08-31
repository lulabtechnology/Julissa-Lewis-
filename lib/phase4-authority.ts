import type { Lang } from "@/lib/seo";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/seo";

export type AuthorityProfile = {
  type: "profile";
  lang: Lang;
  section: string;
  slug: string;
  alternateSection: string;
  alternateSlug: string;
  name: "Julissa Lewis" | "Jissbeth Lewis";
  role: string;
  credentialLine: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  image: string;
  bio: string[];
  expertise: string[];
  approach: string[];
  sameAs?: string[];
};

export type AuthorityInfoPage = {
  type: "standard" | "press";
  lang: Lang;
  section: string;
  slug: string;
  alternateSection: string;
  alternateSlug: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  summary: string;
  updated: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
};

export type AuthorityEntry = AuthorityProfile | AuthorityInfoPage;

const entries: AuthorityEntry[] = [
  {
    type: "profile",
    lang: "es",
    section: "equipo",
    slug: "julissa-lewis",
    alternateSection: "team",
    alternateSlug: "julissa-lewis",
    name: "Julissa Lewis",
    role: "Fundadora & Contadora Principal",
    credentialLine: "CPA · Consultora Financiera",
    seoTitle: "Julissa Lewis, CPA | Dirección Financiera en Panamá | JJL",
    description:
      "Perfil profesional de Julissa Lewis, fundadora de JJL Independent Accounting, con enfoque en contabilidad, dirección financiera, multinacionales y cumplimiento en Panamá.",
    eyebrow: "Perfil profesional",
    intro:
      "Julissa Lewis lidera la práctica contable y financiera de JJL Independent Accounting, con enfoque en control de gestión, contabilidad digital, reporting y soporte a empresas que operan en Panamá.",
    image: "/images/julissa-lewis-new.jpg",
    bio: [
      "Su trayectoria combina más de 15 años de experiencia liderando finanzas, presupuestos y control de gestión en corporaciones transnacionales y de tecnología global, junto con formación académica internacional mencionada por JJL en Georgetown University y ADEN Business School.",
      "En JJL impulsa un modelo de contabilidad digital orientado a estados financieros claros, trazabilidad, cumplimiento ante la DGI y soporte a operaciones multinacionales, incluyendo empresas que requieren coordinación financiera local y reporting hacia casa matriz."
    ],
    expertise: [
      "Contabilidad y cierres financieros",
      "Dirección financiera y control de gestión",
      "Reporting para multinacionales y empresas SEM",
      "Cumplimiento contable y soporte ante DGI",
      "Contabilidad digital y procesos en la nube",
      "Tesorería, presupuestos y controles internos"
    ],
    approach: [
      "Priorizar información financiera clara para la toma de decisiones.",
      "Documentar los procesos y mantener trazabilidad entre operación, contabilidad y reportes.",
      "Separar el alcance contable de cualquier interpretación legal o fiscal que requiera un especialista adicional."
    ],
    sameAs: [LINKEDIN_URL]
  },
  {
    type: "profile",
    lang: "en",
    section: "team",
    slug: "julissa-lewis",
    alternateSection: "equipo",
    alternateSlug: "julissa-lewis",
    name: "Julissa Lewis",
    role: "Founder & Principal Accountant",
    credentialLine: "CPA · Financial Consultant",
    seoTitle: "Julissa Lewis, CPA | Accounting in Panama | JJL",
    description:
      "Professional profile of Julissa Lewis, founder of JJL Independent Accounting, focused on accounting, financial direction, multinationals, and Panama compliance.",
    eyebrow: "Professional profile",
    intro:
      "Julissa Lewis leads JJL Independent Accounting's accounting and financial practice, with a focus on management control, digital accounting, reporting, and support for companies operating in Panama.",
    image: "/images/julissa-lewis-new.jpg",
    bio: [
      "Her career combines more than 15 years of experience leading finance, budgeting, and management control in transnational and global technology corporations, together with international academic training referenced by JJL at Georgetown University and ADEN Business School.",
      "At JJL she promotes a digital accounting model focused on clear financial statements, traceability, DGI compliance, and support for multinational operations that require local financial coordination and reporting to headquarters."
    ],
    expertise: [
      "Accounting and financial close",
      "Financial direction and management control",
      "Reporting for multinationals and SEM companies",
      "Accounting compliance and DGI support",
      "Digital and cloud-based accounting processes",
      "Treasury, budgeting, and internal controls"
    ],
    approach: [
      "Prioritize clear financial information for decision-making.",
      "Document processes and maintain traceability across operations, accounting, and reporting.",
      "Keep accounting scope distinct from legal or tax interpretation that requires specialized counsel."
    ],
    sameAs: [LINKEDIN_URL]
  },
  {
    type: "profile",
    lang: "es",
    section: "equipo",
    slug: "jissbeth-lewis",
    alternateSection: "team",
    alternateSlug: "jissbeth-lewis",
    name: "Jissbeth Lewis",
    role: "Co-Fundadora & Especialista en Administración y Planilla",
    credentialLine: "Gestión de Nómina · SIPE · Cumplimiento Laboral",
    seoTitle: "Jissbeth Lewis | Payroll y SIPE en Panamá | JJL",
    description:
      "Perfil profesional de Jissbeth Lewis, especialista de JJL en payroll, SIPE, CSS, administración de capital humano y cumplimiento laboral operativo en Panamá.",
    eyebrow: "Perfil profesional",
    intro:
      "Jissbeth Lewis dirige la práctica de administración y payroll de JJL Independent Accounting, enfocada en convertir la nómina en un proceso documentado, puntual y controlable.",
    image: "/images/jissbeth-lewis-payroll.jpg",
    bio: [
      "Su experiencia se concentra en administración de capital humano, procesamiento de nóminas y servicios de externalización corporativa. En JJL lidera el flujo operativo de planilla y la coordinación de información que alimenta SIPE y las obligaciones relacionadas con la Caja de Seguro Social.",
      "Su enfoque combina calendario, controles de novedades, revisión previa, evidencia de aprobación y trazabilidad para que la empresa pueda externalizar el procesamiento sin perder visibilidad sobre su nómina."
    ],
    expertise: [
      "Outsourcing y procesamiento de planilla",
      "SIPE y flujos operativos para empleadores",
      "Caja de Seguro Social y controles de payroll",
      "Décimo tercer mes y prestaciones",
      "Vacaciones, novedades y movimientos de personal",
      "Administración de capital humano"
    ],
    approach: [
      "Definir responsables y fechas antes de cada cierre.",
      "Separar preparación, revisión y aprobación para reducir errores operativos.",
      "Escalar a asesoría laboral especializada cuando un caso requiere interpretación jurídica."
    ]
  },
  {
    type: "profile",
    lang: "en",
    section: "team",
    slug: "jissbeth-lewis",
    alternateSection: "equipo",
    alternateSlug: "jissbeth-lewis",
    name: "Jissbeth Lewis",
    role: "Co-Founder & Administration and Payroll Specialist",
    credentialLine: "Payroll Management · SIPE · Labor Compliance",
    seoTitle: "Jissbeth Lewis | Payroll, SIPE & Labor Compliance in Panama | JJL",
    description:
      "Professional profile of Jissbeth Lewis, JJL specialist in payroll, SIPE, CSS, human-capital administration, and operational labor compliance in Panama.",
    eyebrow: "Professional profile",
    intro:
      "Jissbeth Lewis leads JJL Independent Accounting's administration and payroll practice, focused on turning payroll into a documented, timely, and controllable process.",
    image: "/images/jissbeth-lewis-payroll.jpg",
    bio: [
      "Her experience focuses on human-capital administration, payroll processing, and corporate outsourcing services. At JJL she leads payroll operations and the coordination of information that feeds SIPE and related Social Security Fund obligations.",
      "Her approach combines calendars, payroll-change controls, pre-close review, approval evidence, and traceability so companies can outsource processing without losing visibility over payroll."
    ],
    expertise: [
      "Payroll outsourcing and processing",
      "SIPE employer workflows",
      "Social Security Fund payroll controls",
      "Thirteenth-month and statutory benefits",
      "Vacation, payroll changes, and employee movements",
      "Human-capital administration"
    ],
    approach: [
      "Define owners and dates before every close.",
      "Separate preparation, review, and approval to reduce operational errors.",
      "Escalate matters to specialized labor counsel when legal interpretation is required."
    ]
  },
  {
    type: "standard",
    lang: "es",
    section: "estandares",
    slug: "politica-editorial",
    alternateSection: "standards",
    alternateSlug: "editorial-policy",
    seoTitle: "Política Editorial | JJL Independent Accounting Panamá",
    description:
      "Cómo JJL estructura, atribuye, actualiza y limita su contenido sobre contabilidad, SEM, payroll, SIPE y cumplimiento en Panamá.",
    eyebrow: "Confianza & transparencia",
    title: "Política editorial y estándares de contenido",
    summary:
      "JJL publica recursos para ayudar a empresas y equipos financieros a comprender procesos contables y de payroll en Panamá. Esta política explica qué fuentes priorizamos, cómo atribuimos los contenidos y cuáles son sus límites.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Fuentes primero, opinión después",
        paragraphs: [
          "Cuando una guía incluye tasas, formularios, fechas, requisitos públicos o referencias regulatorias, JJL prioriza fuentes primarias y oficiales antes de cualquier fuente secundaria."
        ],
        bullets: [
          "Leyes y Gaceta Oficial cuando el tema depende de una norma.",
          "DGI para formularios y obligaciones tributarias publicadas.",
          "CSS para SIPE, planilla y tasas de seguridad social.",
          "MICI y la Dirección SEM para información del régimen de multinacionales.",
          "Fuentes secundarias solo como contexto, nunca para reemplazar una fuente primaria disponible."
        ]
      },
      {
        heading: "Autoría y responsabilidad temática",
        paragraphs: [
          "Cada recurso identifica a la persona responsable del contenido según el tema. Julissa Lewis se asocia principalmente con contabilidad, dirección financiera, multinacionales y SEM; Jissbeth Lewis con payroll, SIPE y administración de nómina.",
          "La atribución no convierte una guía general en asesoría individual. La situación concreta de cada empresa puede requerir revisión contable, fiscal, legal o laboral específica."
        ]
      },
      {
        heading: "Actualizaciones y correcciones",
        paragraphs: [
          "Las páginas muestran una fecha de actualización. Cuando una fuente oficial cambia de forma material, la guía correspondiente debe revisarse y su fecha de modificación debe reflejar el cambio.",
          `Si detecta un dato que debe corregirse, puede escribir a ${CONTACT_EMAIL}. JJL puede actualizar, aclarar o retirar información que haya quedado desfasada.`
        ]
      },
      {
        heading: "Lo que JJL no hace con el contenido",
        paragraphs: [
          "No usamos premios, afiliaciones, resultados de clientes, credenciales, estadísticas o menciones de terceros que no puedan respaldarse. Tampoco presentamos una explicación general como sustituto de una opinión legal o fiscal individualizada."
        ]
      }
    ]
  },
  {
    type: "standard",
    lang: "en",
    section: "standards",
    slug: "editorial-policy",
    alternateSection: "estandares",
    alternateSlug: "politica-editorial",
    seoTitle: "Editorial Policy & Content Standards | JJL Independent Accounting",
    description:
      "How JJL structures, attributes, updates, and limits its content on accounting, SEM, payroll, SIPE, and compliance in Panama.",
    eyebrow: "Trust & transparency",
    title: "Editorial policy and content standards",
    summary:
      "JJL publishes resources to help companies and finance teams understand accounting and payroll processes in Panama. This policy explains the sources we prioritize, how content is attributed, and the limits of the material.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Sources first, opinion second",
        paragraphs: [
          "When a guide includes rates, forms, dates, public requirements, or regulatory references, JJL prioritizes primary and official sources before secondary sources."
        ],
        bullets: [
          "Laws and the Official Gazette when a topic depends on legislation.",
          "DGI for published tax forms and obligations.",
          "CSS for SIPE, payroll, and social-security contribution rates.",
          "MICI and the SEM Directorate for multinational-headquarters information.",
          "Secondary sources only for context, not as a substitute when a primary source is available."
        ]
      },
      {
        heading: "Authorship and subject responsibility",
        paragraphs: [
          "Each resource identifies the person responsible for the content according to the topic. Julissa Lewis is primarily associated with accounting, financial direction, multinationals, and SEM; Jissbeth Lewis with payroll, SIPE, and payroll administration.",
          "Attribution does not turn general guidance into individualized advice. A company's specific circumstances may require dedicated accounting, tax, legal, or labor review."
        ]
      },
      {
        heading: "Updates and corrections",
        paragraphs: [
          "Pages display an update date. When an official source changes materially, the corresponding guide should be reviewed and its modification date should reflect the change.",
          `If you identify information that should be corrected, contact ${CONTACT_EMAIL}. JJL may update, clarify, or remove information that has become outdated.`
        ]
      },
      {
        heading: "What JJL does not add to its content",
        paragraphs: [
          "We do not use awards, affiliations, client outcomes, credentials, statistics, or third-party mentions that cannot be substantiated. General educational material is not presented as a substitute for individualized legal or tax advice."
        ]
      }
    ]
  },
  {
    type: "standard",
    lang: "es",
    section: "estandares",
    slug: "metodologia-fuentes-actualizaciones",
    alternateSection: "standards",
    alternateSlug: "source-update-methodology",
    seoTitle: "Metodología de Fuentes y Actualizaciones | JJL",
    description:
      "Metodología de JJL para seleccionar fuentes, fechar contenidos, actualizar cambios regulatorios y presentar calculadoras o ejemplos informativos.",
    eyebrow: "Metodología",
    title: "Cómo usamos fuentes, fechas y actualizaciones",
    summary:
      "El objetivo de esta metodología es que una persona —o un motor de búsqueda o IA— pueda distinguir con claridad qué afirma JJL, qué proviene de una fuente oficial y cuándo fue revisada la página.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Jerarquía de evidencia",
        paragraphs: ["Para datos regulatorios o administrativos usamos una jerarquía simple de evidencia."],
        bullets: [
          "1. Ley o publicación oficial primaria.",
          "2. Portal de la institución responsable del trámite o proceso.",
          "3. Comunicados oficiales que explican tasas o calendarios.",
          "4. Fuentes profesionales secundarias solo para contexto adicional."
        ]
      },
      {
        heading: "Fecha publicada vs. fecha actualizada",
        paragraphs: [
          "La fecha publicada indica cuándo se incorporó el recurso al centro de conocimiento. La fecha actualizada cambia cuando hay una modificación material de contenido, fuente o criterio operativo relevante."
        ]
      },
      {
        heading: "Calculadoras y ejemplos",
        paragraphs: [
          "Las calculadoras se limitan al dato que describen. Por ejemplo, el estimador de cuota patronal CSS no intenta representar el costo laboral total de un empleado. Cada herramienta muestra su alcance y debe interpretarse como apoyo informativo."
        ]
      },
      {
        heading: "Separación entre información y asesoría",
        paragraphs: [
          "Una guía puede ayudar a preparar preguntas, organizar documentación o entender un proceso, pero la aplicación final depende de los hechos de cada empresa. Los temas legales o fiscales que excedan el alcance contable deben validarse con el profesional correspondiente."
        ]
      }
    ]
  },
  {
    type: "standard",
    lang: "en",
    section: "standards",
    slug: "source-update-methodology",
    alternateSection: "estandares",
    alternateSlug: "metodologia-fuentes-actualizaciones",
    seoTitle: "Source & Update Methodology | JJL Accounting Panama",
    description:
      "JJL methodology for selecting sources, dating content, updating regulatory changes, and presenting informational calculators and examples.",
    eyebrow: "Methodology",
    title: "How we use sources, dates, and updates",
    summary:
      "The goal is to make it clear to readers — and to search or AI systems — what JJL states, what comes from an official source, and when a page was last reviewed.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Evidence hierarchy",
        paragraphs: ["For regulatory or administrative data, we use a simple evidence hierarchy."],
        bullets: [
          "1. Law or primary official publication.",
          "2. Website of the institution responsible for the process.",
          "3. Official releases explaining rates or calendars.",
          "4. Secondary professional sources only for additional context."
        ]
      },
      {
        heading: "Published date vs. updated date",
        paragraphs: [
          "The published date reflects when a resource entered the knowledge center. The updated date changes when there is a material modification to content, a source, or a relevant operational criterion."
        ]
      },
      {
        heading: "Calculators and examples",
        paragraphs: [
          "Calculators are limited to the value they describe. For example, the CSS employer-contribution estimator does not attempt to represent an employee's total labor cost. Each tool states its scope and should be treated as informational support."
        ]
      },
      {
        heading: "Information vs. advice",
        paragraphs: [
          "A guide can help prepare questions, organize documents, or understand a process, but final application depends on each company's facts. Legal or tax matters outside accounting scope should be validated with the appropriate professional."
        ]
      }
    ]
  },
  {
    type: "press",
    lang: "es",
    section: "prensa",
    slug: "centro-de-medios",
    alternateSection: "press",
    alternateSlug: "media-center",
    seoTitle: "Prensa y Centro de Medios | JJL Independent Accounting Panamá",
    description:
      "Temas de comentario experto, perfiles profesionales, recursos citables y contacto de JJL Independent Accounting para prensa y medios.",
    eyebrow: "Prensa & medios",
    title: "Centro de medios de JJL Independent Accounting",
    summary:
      "Un punto de referencia para periodistas, editores, cámaras empresariales y organizaciones que buscan contexto contable u operativo sobre empresas, SEM y payroll en Panamá.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Temas para entrevistas o comentarios",
        paragraphs: [
          "JJL puede ser contactada para aportar contexto profesional dentro de su alcance contable y operativo. La disponibilidad y el enfoque de cada participación se confirman antes de cualquier publicación."
        ],
        bullets: [
          "Contabilidad y reporting para multinacionales que operan en Panamá.",
          "Operación contable de empresas SEM y coordinación con casa matriz.",
          "Preparación contable y documental relacionada con operaciones de fuente extranjera.",
          "Outsourcing de planilla, SIPE y controles de nómina.",
          "Cuota patronal CSS, décimo tercer mes y organización del calendario de payroll.",
          "Digitalización de procesos contables y control financiero para empresas."
        ]
      },
      {
        heading: "Voceras por tema",
        paragraphs: [
          "Julissa Lewis: contabilidad, dirección financiera, multinacionales, SEM, reporting y control de gestión.",
          "Jissbeth Lewis: payroll, SIPE, CSS, administración de nómina y controles operativos de recursos humanos."
        ]
      },
      {
        heading: "Cómo citar los recursos de JJL",
        paragraphs: [
          "Las guías del centro de conocimiento incluyen autor responsable, fecha de actualización y enlaces a las fuentes públicas utilizadas. Si un medio cita una cifra o fecha regulatoria, recomendamos enlazar también a la fuente oficial indicada en la propia guía."
        ]
      },
      {
        heading: "Contacto para medios",
        paragraphs: [
          `Solicitudes de entrevistas, aclaraciones o colaboración editorial: ${CONTACT_EMAIL}. Para Julissa Lewis también está disponible el perfil de LinkedIn enlazado desde su página profesional.`
        ]
      }
    ]
  },
  {
    type: "press",
    lang: "en",
    section: "press",
    slug: "media-center",
    alternateSection: "prensa",
    alternateSlug: "centro-de-medios",
    seoTitle: "Press & Media Center | JJL Independent Accounting Panama",
    description:
      "Expert-commentary topics, professional profiles, citable resources, and media contact information for JJL Independent Accounting in Panama.",
    eyebrow: "Press & media",
    title: "JJL Independent Accounting media center",
    summary:
      "A reference point for journalists, editors, business chambers, and organizations seeking accounting or operational context on companies, SEM, and payroll in Panama.",
    updated: "2026-08-31",
    sections: [
      {
        heading: "Topics for interviews or commentary",
        paragraphs: [
          "JJL can be contacted for professional context within its accounting and operational scope. Availability and the focus of each participation are confirmed before publication."
        ],
        bullets: [
          "Accounting and reporting for multinationals operating in Panama.",
          "Accounting operations for SEM companies and headquarters coordination.",
          "Accounting and documentation preparation for foreign-source operations.",
          "Payroll outsourcing, SIPE, and payroll controls.",
          "CSS employer contributions, thirteenth-month payments, and payroll calendars.",
          "Digital accounting processes and financial control for companies."
        ]
      },
      {
        heading: "Subject-matter spokespeople",
        paragraphs: [
          "Julissa Lewis: accounting, financial direction, multinationals, SEM, reporting, and management control.",
          "Jissbeth Lewis: payroll, SIPE, CSS, payroll administration, and operational HR controls."
        ]
      },
      {
        heading: "How to cite JJL resources",
        paragraphs: [
          "Knowledge-center guides include a responsible author, update date, and links to the public sources used. When a publication cites a regulatory figure or date, we recommend also linking to the official source identified in the guide."
        ]
      },
      {
        heading: "Media contact",
        paragraphs: [
          `Interview requests, clarification, or editorial collaboration: ${CONTACT_EMAIL}. Julissa Lewis's LinkedIn profile is also linked from her professional profile page.`
        ]
      }
    ]
  }
];

entries.push(
  {
    type: "standard", lang: "es", section: "fuentes", slug: "referencias-oficiales",
    alternateSection: "sources", alternateSlug: "official-references",
    seoTitle: "Fuentes Oficiales y Referencias | JJL Independent Accounting",
    description: "Fuentes oficiales utilizadas por JJL para verificar contenido sobre SEM, DGI, SIPE, CSS, planilla y cumplimiento empresarial en Panamá.",
    eyebrow: "Fuentes verificables", title: "Fuentes oficiales y referencias de JJL",
    summary: "Directorio de las fuentes públicas que JJL utiliza para respaldar, revisar y actualizar sus guías de contabilidad, SEM y payroll en Panamá.",
    updated: "2026-08-31",
    sections: [
      { heading: "Instituciones y fuentes primarias", paragraphs: ["JJL prioriza fuentes oficiales antes de publicaciones secundarias."], bullets: [
        "MICI y portal SEM: régimen y actividades de Sedes de Empresas Multinacionales.",
        "DGI / MEF: formularios, obligaciones e información tributaria pública.",
        "Caja de Seguro Social (CSS): SIPE, planilla y comunicados de cuotas.",
        "Gaceta Oficial y Órgano Judicial: leyes y publicaciones normativas primarias."
      ]},
      { heading: "Cómo se usan estas referencias", paragraphs: ["Cada guía enlaza sus fuentes específicas. Este directorio sirve como capa adicional de transparencia y no sustituye la validación profesional de cada caso."] },
      { heading: "Enlaces oficiales principales", paragraphs: ["MICI: https://mici.gob.pa/ · SEM: https://sem.gob.pa/ · DGI: https://dgi.mef.gob.pa/ · CSS: https://www.css.gob.pa/ · Gaceta Oficial: https://www.gacetaoficial.gob.pa/"] }
    ]
  },
  {
    type: "standard", lang: "en", section: "sources", slug: "official-references",
    alternateSection: "fuentes", alternateSlug: "referencias-oficiales",
    seoTitle: "Official Sources & References | JJL Independent Accounting",
    description: "Official sources used by JJL to verify content on SEM, DGI, SIPE, CSS, payroll, and business compliance in Panama.",
    eyebrow: "Verifiable sources", title: "JJL official sources and references",
    summary: "A directory of public sources JJL uses to support, review, and update its accounting, SEM, and payroll guides in Panama.",
    updated: "2026-08-31",
    sections: [
      { heading: "Institutions and primary sources", paragraphs: ["JJL prioritizes official sources before secondary publications."], bullets: [
        "MICI and the SEM portal: multinational headquarters regime and authorized activities.",
        "DGI / MEF: forms, obligations, and public tax information.",
        "Caja de Seguro Social (CSS): SIPE, payroll, and employer-contribution releases.",
        "Official Gazette and Judicial Branch: primary laws and regulatory publications."
      ]},
      { heading: "How these references are used", paragraphs: ["Each guide links its specific sources. This directory adds a transparency layer and does not replace professional validation for a specific case."] },
      { heading: "Main official links", paragraphs: ["MICI: https://mici.gob.pa/ · SEM: https://sem.gob.pa/ · DGI: https://dgi.mef.gob.pa/ · CSS: https://www.css.gob.pa/ · Official Gazette: https://www.gacetaoficial.gob.pa/"] }
    ]
  }
);

export function getAuthorityEntries(lang?: Lang) {
  return lang ? entries.filter((entry) => entry.lang === lang) : entries;
}

export function getAuthorityEntry(lang: Lang, section: string, slug: string) {
  return entries.find((entry) => entry.lang === lang && entry.section === section && entry.slug === slug);
}

export function getAuthorProfile(lang: Lang, name: "Julissa Lewis" | "Jissbeth Lewis") {
  return entries.find(
    (entry): entry is AuthorityProfile =>
      entry.type === "profile" && entry.lang === lang && entry.name === name
  );
}

export function profilePath(lang: Lang, name: "Julissa Lewis" | "Jissbeth Lewis") {
  const profile = getAuthorProfile(lang, name);
  return profile ? `/${lang}/${profile.section}/${profile.slug}` : `/${lang}`;
}

export function editorialPath(lang: Lang) {
  return lang === "es" ? "/es/estandares/politica-editorial" : "/en/standards/editorial-policy";
}

export function methodologyPath(lang: Lang) {
  return lang === "es"
    ? "/es/estandares/metodologia-fuentes-actualizaciones"
    : "/en/standards/source-update-methodology";
}

export function mediaPath(lang: Lang) {
  return lang === "es" ? "/es/prensa/centro-de-medios" : "/en/press/media-center";
}

export function sourcesPath(lang: Lang) {
  return lang === "es" ? "/es/fuentes/referencias-oficiales" : "/en/sources/official-references";
}
