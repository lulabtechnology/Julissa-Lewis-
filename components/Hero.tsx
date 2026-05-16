import Image from "next/image";

type Lang = "es" | "en";

interface HeroProps {
  lang: Lang;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

const content = {
  es: {
    badge: "Firma contable digital en Panamá",
    titleMain: "Servicios contables digitales",
    titleHighlight: "y gestión financiera estratégica.",
    paragraph:
      "Modernizamos la contabilidad de su negocio utilizando sistemas avanzados en la nube y automatización de registros. Ofrecemos soluciones integrales en finanzas, nómina y cumplimiento fiscal, diseñadas especialmente para empresas locales, operaciones de fuente extranjera y Empresas bajo el régimen SEM en Panamá.",
    primaryCta: "Cotizar solución a la medida",
    secondaryCta: "Ver perfil en LinkedIn",
    translationCta: "Traducciones oficiales",
    cardEyebrow: "JJL Independent Accounting",
    cardTitle: "Contabilidad clara, digital y estratégica",
    cardText:
      "Perfilamos la estructura de su organización para recomendar el nivel de soporte contable, fiscal, financiero y de planilla que realmente necesita.",
    sendInquiry: "Completar cuestionario",
    stats: [
      { label1: "+15 años", label2: "de experiencia corporativa" },
      { label1: "DGI", label2: "cumplimiento fiscal local" },
      { label1: "SEM", label2: "operaciones multinacionales" },
      { label1: "Nube", label2: "gestión digital segura" }
    ]
  },
  en: {
    badge: "Digital accounting firm in Panama",
    titleMain: "Digital accounting services",
    titleHighlight: "and strategic financial management.",
    paragraph:
      "We modernize your business accounting through advanced cloud-based systems and automated records. We provide integrated solutions in finance, payroll, and tax compliance, designed for local companies, foreign-source operations, and SEM regime companies in Panama.",
    primaryCta: "Request a tailored proposal",
    secondaryCta: "View LinkedIn profile",
    translationCta: "Official translations",
    cardEyebrow: "JJL Independent Accounting",
    cardTitle: "Clear, digital, and strategic accounting",
    cardText:
      "We profile your organization structure to recommend the right level of accounting, tax, financial, and payroll support.",
    sendInquiry: "Complete questionnaire",
    stats: [
      { label1: "15+ years", label2: "of corporate experience" },
      { label1: "DGI", label2: "local tax compliance" },
      { label1: "SEM", label2: "multinational operations" },
      { label1: "Cloud", label2: "secure digital management" }
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

      <div className="section-container relative py-16 lg:py-20 grid gap-12 lg:grid-cols-[minmax(0,1.16fr)_minmax(0,0.84fr)] items-center animate-fade-up">
        <div className="space-y-8">
          <div className="badge-gold text-center sm:text-left">{t.badge}</div>

          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              {t.titleMain}
              <span className="block text-brandLightBlue">
                {t.titleHighlight}
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed">
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
              <div key={s.label1} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-base font-semibold text-white">
                  {s.label1}
                </div>
                <div className="leading-snug">{s.label2}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="card overflow-hidden animate-fade-up bg-white/95">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/julissa-lewis-new.jpg"
                alt={
                  lang === "es"
                    ? "Julissa Lewis, fundadora de JJL Independent Accounting"
                    : "Julissa Lewis, founder of JJL Independent Accounting"
                }
                fill
                priority
                className="object-cover object-[center_top]"
                sizes="(min-width: 1024px) 430px, 92vw"
              />
            </div>
          </div>

          <div className="card p-6 sm:p-7 text-brandNavy animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGray mb-3">
              {t.cardEyebrow}
            </p>
            <h2 className="text-lg font-semibold mb-3">{t.cardTitle}</h2>
            <p className="text-xs text-brandGray/90 mb-4 leading-relaxed">{t.cardText}</p>

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
        </div>
      </div>
    </section>
  );
}
