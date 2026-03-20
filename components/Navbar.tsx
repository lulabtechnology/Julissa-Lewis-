import Image from "next/image";

type Lang = "es" | "en";

interface NavbarProps {
  lang: Lang;
  toggleLang: () => void;
}

export function Navbar({ lang, toggleLang }: NavbarProps) {
  const labels =
    lang === "es"
      ? {
          about: "Sobre mí",
          services: "Servicios",
          contact: "Contacto",
          translation: "Servicios bilingües",
          cta: "Agenda una llamada"
        }
      : {
          about: "About",
          services: "Services",
          contact: "Contact",
          translation: "Translation services",
          cta: "Schedule a call"
        };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100 animate-fade-in">
      <div className="section-container flex items-center justify-between py-3 gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative h-14 w-56 sm:h-16 sm:w-64 shrink-0">
            <Image
              src="/images/logo-julissa-lewis.png"
              alt="Logo Julissa Lewis"
              fill
              className="object-contain"
              sizes="(min-width: 640px) 256px, 224px"
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
        </div>

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
            href="https://euridesyoung.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-brandTurquoise font-semibold hover:text-brandBlue transition-colors"
          >
            {labels.translation}
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggleLang}
            className="text-[11px] font-semibold px-3 py-1 rounded-full border border-brandNavy/15 bg-white/70 text-brandNavy hover:bg-brandNavy hover:text-white transition"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a
            href="#contacto"
            className="btn-primary text-xs sm:text-sm px-4 py-2"
          >
            {labels.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
