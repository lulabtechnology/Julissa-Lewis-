import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brandNavy via-[#0B1630] to-brandBlue text-white">
      <div className="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none">
        <div className="absolute -top-32 -right-40 h-80 w-80 rounded-full bg-brandTurquoise blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brandLightBlue blur-3xl" />
      </div>

      <div className="section-container relative py-16 lg:py-20 grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
        {/* Columna texto */}
        <div className="space-y-8">
          <div className="badge-pill bg-white/5 border-white/20 text-xs text-brandLightBlue">
            Modernizando su contabilidad con herramientas líderes
          </div>

          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Contabilidad y gestión tributaria
              <span className="block text-brandLightBlue">
                con enfoque estratégico y ético.
              </span>
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-xl">
              Servicio del ciclo contable completo, planilla, gestión
              tributaria y facturación electrónica, con más de 10 años de
              experiencia trabajando con empresas multinacionales y el respaldo
              del Colegio de Contadores Públicos Autorizados de Panamá (CCPAP).
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#contacto" className="btn-primary">
              Quiero una asesoría
            </a>
            <a
              href="https://www.linkedin.com/in/julissa-lewis-5a530b138"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Ver perfil en LinkedIn
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70 pt-4">
            <div>
              <div className="text-base font-semibold text-white">
                +10 años
              </div>
              <div>de experiencia</div>
            </div>
            <div>
              <div className="text-base font-semibold text-white">Full ciclo</div>
              <div>contable y planilla</div>
            </div>
            <div>
              <div className="text-base font-semibold text-white">CCPAP</div>
              <div>estándares éticos</div>
            </div>
            <div>
              <div className="text-base font-semibold text-white">
                QuickBooks
              </div>
              <div>certificación en progreso</div>
            </div>
          </div>
        </div>

        {/* Columna tarjeta contacto + foto */}
        <div className="space-y-5">
          <div className="card p-6 sm:p-7 text-brandNavy">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandGray mb-3">
              Primer contacto
            </p>
            <h2 className="text-lg font-semibold mb-3">
              Agenda una sesión exploratoria
            </h2>
            <p className="text-xs text-brandGray mb-4">
              Cuéntame sobre tu empresa y definimos juntos el esquema contable,
              fiscal y de planilla que más te conviene.
            </p>

            <dl className="space-y-3 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-brandGray">WhatsApp</dt>
                <dd className="font-medium">
                  <a href="https://wa.me/50767641014" target="_blank">
                    +507 6764-1014
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-brandGray">Correo</dt>
                <dd className="font-medium break-all">
                  <a href="mailto:JJLCPA.financialserv@gmail.com">
                    JJLCPA.financialserv@gmail.com
                  </a>
                </dd>
              </div>
            </dl>

            <a href="#contacto" className="btn-primary w-full mt-5">
              Enviar mi consulta
            </a>
          </div>

          <div className="relative h-52 sm:h-64 md:h-72 card overflow-hidden">
            <Image
              src="/images/julissa-hero-office.jpg"
              alt="Julissa Lewis en entorno profesional"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 360px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
