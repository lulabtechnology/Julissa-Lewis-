import Image from "next/image";

type Lang = "es" | "en";

interface NavbarProps {
  lang: Lang;
  toggleLang: () => void;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

export function Navbar({ lang, toggleLang }: NavbarProps) {
  const labels =
    lang === "es"
      ? {
          about: "Sobre mí",
          services: "Servicios",
          contact: "Contacto",
          translation: "Servicios de traducción",
          cta: "Agenda una llamada",
          ctaMobile: "Llamada"
        }
      : {
          about: "About",
          services: "Services",
          contact: "Contact",
          translation: "Translation services",
          cta: "Schedule a call",
          ctaMobile: "Call"
        };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-100 animate-fade-in">
      <div className="section-container py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="flex items-center gap-3 min-w-0" aria-label="Julissa Lewis">
            <div className="relative h-11 w-32 sm:h-16 sm:w-64 shrink-0">
              <Image
                src="/images/logo-julissa-lewis.png"
                alt="Logo Julissa Lewis"
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

          <nav className="hidden lg:flex items-center gap-5 text-sm">
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
            <button
              type="button"
              onClick={toggleLang}
              className="h-10 min-w-10 rounded-full border border-brandNavy/15 bg-white text-xs font-bold text-brandNavy shadow-sm hover:bg-brandNavy hover:text-white transition"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {lang === "es" ? "EN" : "ES"}
            </button>

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
