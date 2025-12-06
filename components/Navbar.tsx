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
          cta: "Agenda una llamada"
        }
      : {
          about: "About",
          services: "Services",
          contact: "Contact",
          cta: "Schedule a call"
        };

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-100 animate-fade-in">
      <div className="section-container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          {/* Logo un poco más grande */}
          <div className="relative h-12 w-44">
            <Image
              src="/images/logo-julissa-lewis.png"
              alt="Logo Julissa Lewis"
              fill
              className="object-contain"
              sizes="176px"
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

        <nav className="hidden md:flex items-center gap-6 text-sm">
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
        </nav>

        <div className="flex items-center gap-3">
          {/* Botón idioma */}
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
