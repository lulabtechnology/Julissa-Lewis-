import Image from "next/image";

type Lang = "es" | "en";

interface HeroProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Contabilidad especializada para empresas en Panamá",
    titleMain: "Control financiero para empresas",
    titleHighlight: "que operan y crecen en Panamá.",
    paragraph:
      "JJL Independent Accounting combina experiencia corporativa, contabilidad digital y conocimiento local para acompañar a multinacionales, empresas SEM y organizaciones que necesitan externalizar su planilla y cumplimiento laboral.",
    primaryCta: "Multinacionales & SEM",
    secondaryCta: "Payroll & cumplimiento",
    cardEyebrow: "JJL Independent Accounting",
    cardTitle: "Dos especialidades. Una visión integral del negocio.",
    cardText:
      "Primero entendemos cómo opera su empresa. Después definimos el nivel de soporte contable, financiero y de planilla que realmente necesita.",
    sendInquiry: "Evaluar mi empresa",
    stats: [
      { label1: "+15 años", label2: "de experiencia corporativa" },
      { label1: "SEM", label2: "operaciones multinacionales" },
      { label1: "SIPE", label2: "planilla y cumplimiento" },
      { label1: "DGI", label2: "control fiscal local" }
    ]
  },
  en: {
    badge: "Specialized accounting for companies in Panama",
    titleMain: "Financial control for companies",
    titleHighlight: "operating and growing in Panama.",
    paragraph:
      "JJL Independent Accounting combines corporate experience, digital accounting, and local knowledge to support multinationals, SEM companies, and organizations that need to outsource payroll and labor-compliance operations.",
    primaryCta: "Multinationals & SEM",
    secondaryCta: "Payroll & compliance",
    cardEyebrow: "JJL Independent Accounting",
    cardTitle: "Two specialties. One integrated view of your business.",
    cardText:
      "We first understand how your company operates. Then we define the accounting, financial, and payroll support it actually needs.",
    sendInquiry: "Evaluate my company",
    stats: [
      { label1: "15+ years", label2: "of corporate experience" },
      { label1: "SEM", label2: "multinational operations" },
      { label1: "SIPE", label2: "payroll and compliance" },
      { label1: "DGI", label2: "local tax control" }
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
              <span className="block text-brandLightBlue">{t.titleHighlight}</span>
            </h1>
            <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed">
              {t.paragraph}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={lang === "es" ? "#multinacionales-sem" : "#multinationals-sem"} className="btn-primary">
              {t.primaryCta}
            </a>
            <a href="#payroll-panama" className="btn-outline bg-white/5">
              {t.secondaryCta}
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 pt-4">
            {t.stats.map((s) => (
              <div key={s.label1} className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="text-base font-semibold text-white">{s.label1}</div>
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
