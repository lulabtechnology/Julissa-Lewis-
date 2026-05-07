type Lang = "es" | "en";

interface AboutProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Perfil profesional",
    title: "Julissa Lewis | Estrategia financiera con visión global.",
    paragraphs: [
      "Soy Madre, Esposa y Profesional Independiente, convencida de que los negocios sólidos se construyen sobre valores inquebrantables. Mi trayectoria combina más de 15 años de experiencia corporativa en empresas transnacionales americanas y multinacionales globales, con una formación académica de élite.",
      "Como fundadora de JJL Independent Accounting, mi enfoque es la transformación digital financiera. Modernizo la contabilidad de mis clientes utilizando herramientas líderes como QuickBooks y Alegra, garantizando que tengan información clara, oportuna y estratégica para la toma de decisiones."
    ],
    credentialsTitle: "Mi respaldo académico y profesional",
    credentials: [
      "Máster en Dirección en Finanzas – ADEN University.",
      "Especialización en Finanzas Corporativas y Avanzadas – The Georgetown University & ADEN University.",
      "Postgrado en Contabilidad Gerencial – Universidad Latina de Panamá.",
      "Licenciada en Contabilidad – Universidad Latina de Panamá.",
      "Socio Activo del Colegio de Contadores Públicos Autorizados de Panamá (CCPP) e Idónea ante el MICI."
    ],
    noteTitle: "Mi enfoque",
    note: "Transformación digital financiera con integridad, experiencia corporativa y herramientas modernas para tomar decisiones con información clara y confiable."
  },
  en: {
    badge: "Professional profile",
    title: "Julissa Lewis | Strategic finance with a global vision.",
    paragraphs: [
      "I am a Mother, Wife, and Independent Professional, firmly believing that strong businesses are built on unwavering values. My career blends over 15 years of corporate experience in American transnationals and global multinationals with elite academic training.",
      "As the founder of JJL Independent Accounting, my focus is on financial digital transformation. I modernize my clients' accounting operations using industry-leading tools like QuickBooks and Alegra, ensuring they have clear, timely, and strategic information for decision-making."
    ],
    credentialsTitle: "Academic & professional credentials",
    credentials: [
      "Master in Financial Management – ADEN University.",
      "Specialization in Corporate & Advanced Finance – The Georgetown University & ADEN University.",
      "Postgraduate Degree in Management Accounting – Universidad Latina de Panamá.",
      "B.S. in Accounting – Universidad Latina de Panamá.",
      "Active Member of the Certified Public Accountants Association of Panama (CCPP) and Licensed CPA (MICI)."
    ],
    noteTitle: "My approach",
    note: "Financial digital transformation with integrity, corporate experience, and modern tools to support decisions with clear and reliable information."
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
