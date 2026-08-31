import Image from "next/image";

type Lang = "es" | "en";

interface NavbarProps {
  lang: Lang;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

export function Navbar({ lang }: NavbarProps) {
  const labels =
    lang === "es"
      ? {
          about: "Nuestro equipo",
          services: "Planes",
          contact: "Cotizar",
          translation: "Traducciones oficiales",
          cta: "Completar cuestionario",
          ctaMobile: "Cotizar"
        }
      : {
          about: "Our team",
          services: "Plans",
          contact: "Quote",
          translation: "Official translations",
          cta: "Complete questionnaire",
          ctaMobile: "Quote"
        };

  const alternateLang = lang === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100 animate-fade-in">
      <div className="section-container py-3">
        <div className="flex items-center justify-between gap-3">
          <a
            href={`/${lang}`}
            className="flex items-center gap-3 min-w-0"
            aria-label="JJL Independent Accounting"
          >
            <div className="relative h-11 w-32 sm:h-16 sm:w-64 shrink-0">
              <Image
                src="/images/logo-julissa-lewis.png"
                alt="JJL Independent Accounting"
                fill
                className="object-contain"
                sizes="(min-width: 640px) 256px, 128px"
                priority
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.18em] text-brandGray">
                {lang === "es"
                  ? "Contabilidad & Finanzas"
                  : "Accounting & Finance"}
              </span>
              <span className="text-sm font-semibold text-brandNavy">
                Julissa Lewis, CPA
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5 text-sm" aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}>
            <a
              href="#sobre-mi"
              className="text-brandNavy/80 hover:text-brandNavy transition-colors"
            >
              {labels.about}
            </a>
            <a
              href="#servicios"
              className="text-brandNavy/80 hover:text-brandNavy transition-colors"
            >
              {labels.services}
            </a>
            <a
              href="#contacto"
              className="text-brandNavy/80 hover:text-brandNavy transition-colors"
            >
              {labels.contact}
            </a>
            <a
              href={TRANSLATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brandTurquoise font-semibold hover:text-brandBlue transition-colors"
            >
              {labels.translation}
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`/${alternateLang}`}
              hrefLang={alternateLang}
              className="h-10 min-w-10 inline-flex items-center justify-center rounded-full border border-brandNavy/15 bg-white text-xs font-bold text-brandNavy shadow-sm hover:bg-brandNavy hover:text-white transition"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {lang === "es" ? "EN" : "ES"}
            </a>

            <a
              href="#contacto"
              className="btn-primary h-10 px-3 text-xs sm:px-4 sm:text-sm"
            >
              <span className="hidden sm:inline">{labels.cta}</span>
              <span className="sm:hidden">{labels.ctaMobile}</span>
            </a>
          </div>
        </div>

        <a
          href={TRANSLATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex lg:hidden w-full items-center justify-center gap-1 rounded-full border border-brandTurquoise/40 bg-brandTurquoise/10 px-4 py-2 text-xs font-semibold text-brandTurquoise hover:bg-brandTurquoise hover:text-white transition"
        >
          {labels.translation}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
