import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-white/60">
      <div className="section-container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="relative h-10 w-36">
            <Image
              src="/images/logo-julissa-lewis.png"
              alt="Logo Julissa Lewis"
              fill
              className="object-contain"
              sizes="144px"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs uppercase tracking-[0.18em] text-brandGray">
              Contabilidad & Finanzas
            </span>
            <span className="text-sm font-semibold text-brandNavy">
              Julissa Lewis, CPA
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre-mi" className="text-brandGray hover:text-brandNavy">
            Sobre mí
          </a>
          <a href="#servicios" className="text-brandGray hover:text-brandNavy">
            Servicios
          </a>
          <a href="#contacto" className="text-brandGray hover:text-brandNavy">
            Contacto
          </a>
        </nav>

        <a
          href="#contacto"
          className="btn-primary text-xs sm:text-sm px-4 py-2"
        >
          Agenda una llamada
        </a>
      </div>
    </header>
  );
}
