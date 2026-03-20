type Lang = "es" | "en";

interface AboutProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Perfil profesional",
    title: "Estrategia financiera con visión global.",
    paragraphs: [
      "Soy madre, esposa y profesional independiente, convencida de que los negocios sólidos se construyen sobre valores inquebrantables y una gestión financiera clara.",
      "Mi trayectoria combina más de 15 años de experiencia corporativa en empresas transnacionales americanas y multinacionales globales, junto con una formación académica de alto nivel.",
      "Como fundadora de JJL Independent Accounting, impulso la transformación digital financiera de mis clientes mediante herramientas líderes como QuickBooks, Alegra y soluciones en la nube, para ofrecer información oportuna, estratégica y útil en la toma de decisiones."
    ],
    credentialsTitle: "Respaldo académico y profesional",
    credentials: [
      "Máster en Dirección en Finanzas – ADEN University.",
      "Especialización en Finanzas Corporativas y Avanzadas – The Georgetown University & ADEN University.",
      "Postgrado en Contabilidad Gerencial – Universidad Latina de Panamá.",
      "Licenciada en Contabilidad – Universidad Latina de Panamá.",
      "Socio Activo del Colegio de Contadores Públicos Autorizados de Panamá (CCPP) e Idónea ante el MICI."
    ],
    noteTitle: "Mi enfoque",
    note: "Combino integridad, experiencia corporativa y tecnología financiera para construir una contabilidad más moderna, estratégica y confiable."
  },
  en: {
    badge: "Professional profile",
    title: "Strategic finance with a global vision.",
    paragraphs: [
      "I am a mother, wife, and independent professional, firmly convinced that strong businesses are built on unwavering values and clear financial management.",
      "My career combines more than 15 years of corporate experience in American transnationals and global multinationals, together with high-level academic training.",
      "As the founder of JJL Independent Accounting, I lead my clients’ financial digital transformation through industry-leading tools such as QuickBooks, Alegra, and cloud-based solutions to deliver timely, strategic, and decision-ready information."
    ],
    credentialsTitle: "Academic and professional credentials",
    credentials: [
      "Master in Financial Management – ADEN University.",
      "Specialization in Corporate and Advanced Finance – The Georgetown University & ADEN University.",
      "Postgraduate Degree in Management Accounting – Universidad Latina de Panamá.",
      "B.S. in Accounting – Universidad Latina de Panamá.",
      "Active Member of the Certified Public Accountants Association of Panama (CCPP) and Licensed CPA (MICI)."
    ],
    noteTitle: "My approach",
    note: "I combine integrity, corporate experience, and financial technology to deliver accounting that is more modern, strategic, and reliable."
  }
} as const;

export function About({ lang }: AboutProps) {
  const t = content[lang];

  return (
    <section
      id="sobre-mi"
      className="section-container py-14 sm:py-16 lg:py-20 animate-fade-up"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">{t.badge}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            {t.title}
          </h2>

          {t.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm sm:text-base text-brandGray leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="card p-6 sm:p-7 space-y-5">
          <h3 className="text-sm font-semibold text-brandNavy">
            {t.credentialsTitle}
          </h3>
          <ul className="space-y-3 text-sm text-brandGray leading-relaxed">
            {t.credentials.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-brandTurquoise font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-brandLightBlue/30 bg-brandLightBlue/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandBlue mb-2">
              {t.noteTitle}
            </p>
            <p className="text-sm text-brandGray leading-relaxed">{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
