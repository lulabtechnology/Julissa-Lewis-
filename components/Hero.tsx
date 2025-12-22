import Image from "next/image";

type Lang = "es" | "en";

interface HeroProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Modernizando su contabilidad con herramientas líderes",
    titleMain: "Contabilidad y gestión tributaria",
    titleHighlight: "con enfoque estratégico y ético.",
    paragraph:
      "Servicio del ciclo contable completo, planilla, gestión tributaria y facturación electrónica, con más de 10 años de experiencia trabajando con empresas multinacionales y el respaldo del Colegio de Contadores Públicos Autorizados de Panamá (CCPAP).",
    primaryCta: "Quiero una asesoría",
    secondaryCta: "Ver perfil en LinkedIn",
    stats: [
      { label1: "+10 años", label2: "de experiencia" },
      { label1: "Full ciclo", label2: "contable y planilla" },
      { label1: "CCPAP", label2: "estándares éticos" },
      { label1: "QuickBooks", label2: "Certificación Pro-Advisor QuickBooks en línea" }
    ]
  },
  en: {
    badge: "Modernizing your accounting with leading tools",
    titleMain: "Accounting and tax management",
    titleHighlight: "with a strategic and ethical focus.",
    paragraph:
      "Full-cycle accounting, payroll, tax management and e-invoicing services, backed by 10+ years of experience with multinational companies and the standards of the Certified Public Accountants Association of Panama (CCPAP).",
    primaryCta: "Request a consultation",
    secondaryCta: "View LinkedIn profile",
    stats: [
      { label1: "10+ years", label2: "of experience" },
      { label1: "Full cycle", label2: "accounting & payroll" },
      { label1: "CCPAP", label2: "ethical standards" },
      { label1: "QuickBooks", label2: "QuickBooks Online ProAdvisor Certification" }
    ]
  }
};

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
          <div className="badge-gold">{t.badge}</div>

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
              href="https://www.linkedin.com/in/julissa-lewis-5a530b138"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              {t.secondaryCta}
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
          <div clas
