import Image from "next/image";

type Lang = "es" | "en";

interface HeroProps {
  lang: Lang;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

const content = {
  es: {
    badge: "Modernizando su contabilidad con herramientas líderes",
    titleMain: "Estrategia financiera",
    titleHighlight: "con visión global.",
    paragraph:
      "Soy Madre, Esposa y Profesional Independiente. Como fundadora de JJL Independent Accounting, modernizo la contabilidad de mis clientes con QuickBooks y Alegra, brindando información clara, oportuna y estratégica para la toma de decisiones.",
    primaryCta: "Quiero una asesoría",
    secondaryCta: "Ver perfil en LinkedIn",
    translationCta: "Servicios de traducción",
    cardEyebrow: "Primer contacto",
    cardTitle: "Agenda una sesión exploratoria",
    cardText:
      "Cuéntame sobre tu empresa y definimos juntos el esquema contable, fiscal y de planilla que más te conviene.",
    sendInquiry: "Enviar mi consulta",
    stats: [
      { label1: "+15 años", label2: "de experiencia corporativa" },
      { label1: "QuickBooks", label2: "y Alegra" },
      { label1: "CCPP", label2: "socio activo" },
      { label1: "MICI", label2: "idoneidad profesional" }
    ]
  },
  en: {
    badge: "Modernizing accounting with leading tools",
    titleMain: "Strategic finance",
    titleHighlight: "with a global vision.",
    paragraph:
      "I am a Mother, Wife, and Independent Professional. As the founder of JJL Independent Accounting, I modernize my clients' accounting operations with QuickBooks and Alegra, providing clear, timely, and strategic information for decision-making.",
    primaryCta: "Request a consultation",
    secondaryCta: "View LinkedIn profile",
    translationCta: "Translation services",
    cardEyebrow: "First contact",
    cardTitle: "Book an exploratory session",
    cardText:
      "Tell me about your company and we will define together the accounting, tax, and payroll scheme that best suits your business.",
    sendInquiry: "Send my inquiry",
    stats: [
      { label1: "15+ years", label2: "of corporate experience" },
      { label1: "QuickBooks", label2: "and Alegra" },
      { label1: "CCPP", label2: "active member" },
      { label1: "MICI", label2: "licensed CPA" }
    ]
  }
} as const;

export function Hero({ lang }: HeroProps) {
  const t = content[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandNavy via-[#0B1630] to-brandBlue text-white">
      <div className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none">
        <div className="absolute -top-32 -right-40 h-80 w-80 rounded-full bg-brandTurquoise blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brandLightBlue blur-3xl animate-float-slow" />
      </div>

      <div className="section-container relative py-16 lg:py-20 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center animate-fade-up">
        <div className="space-y-8">
          <div className="badge-gold text-center sm:text-left">{t.badge}</div>

          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              {t.titleMain}
              <span className="block text-brandLightBlue">
                {t.titleHighlight}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-xl">
              {t.paragraph}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary">
              {t.primaryCta}
            </a>
            <a
              href="https://www.linkedin.com/in/julissa-lewis-cpa-5a530b138?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline bg-white/5"
            >
              {t.secondaryCta}
            </a>
            <a
              href={TRANSLATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline bg-white/5"
            >
              {t.translationCta}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 pt-4">
            {t.stats.map((s) => (
              <div key={s.label1}>
                <div className="text-base font-semibold text-white">
                  {s.label1}
                </div>
                <div className="leading-snug">{s.label2}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="card p-6 sm:p-7 text-brandNavy animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGray mb-3">
              {t.cardEyebrow}
            </p>
            <h2 className="text-lg font-semibold mb-3">{t.cardTitle}</h2>
            <p className="text-xs text-brandGray/90 mb-4">{t.cardText}</p>

            <dl className="space-y-3 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-brandGray">WhatsApp</dt>
                <dd className="font-medium">
                  <a href="https://wa.me/50767641014" target="_blank" rel="noopener noreferrer">
                    +507 6764-1014
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-brandGray">{lang === "es" ? "Correo" : "Email"}</dt>
                <dd className="font-medium break-all">
                  <a href="mailto:jjlaccounting@julissalewis.com">
                    jjlaccounting@julissalewis.com
                  </a>
                </dd>
              </div>
            </dl>

            <a href="#contacto" className="btn-primary w-full mt-5">
              {t.sendInquiry}
            </a>
          </div>

          <div className="card overflow-hidden animate-fade-up flex items-center justify-center bg-[#020617]">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/images/julissa-hero-office.jpg"
                alt={
                  lang === "es"
                    ? "Julissa Lewis en entorno profesional"
                    : "Julissa Lewis in a professional setting"
                }
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 384px, 80vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
