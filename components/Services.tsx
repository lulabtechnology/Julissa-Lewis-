import Image from "next/image";

const services = [
  {
    title: "Contabilidad general y en la nube",
    description:
      "Registros contables básicos, estados financieros y gestión remota mediante plataformas como QuickBooks o Alegra.",
    image: "/images/service-accounting.jpg",
    tags: ["Estados financieros", "Contabilidad en la nube"]
  },
  {
    title: "Facturación electrónica",
    description:
      "Implementación y gestión del sistema de facturación electrónica autorizado por la DGI, con capacitación al equipo.",
    image: "/images/service-tax.jpg",
    tags: ["DGI", "Cumplimiento"]
  },
  {
    title: "Gestión tributaria y cumplimiento",
    description:
      "Cálculo y presentación de impuestos (ITBMS, Renta), con asesoría fiscal continua para evitar penalidades.",
    image: "/images/service-payroll.jpg",
    tags: ["ITBMS", "Impuesto sobre la renta"]
  },
  {
    title: "Planilla y RR.HH. en la nube",
    description:
      "Procesamiento de planillas, prestaciones laborales y reportes a la CSS mediante plataformas digitales.",
    image: "/images/service-consulting.jpg",
    tags: ["Planilla", "CSS"]
  }
];

export function Services() {
  return (
    <section
      id="servicios"
      className="bg-white/80 border-y border-gray-100 py-14 sm:py-16 lg:py-20"
    >
      <div className="section-container space-y-10 animate-fade-up">
        <div className="max-w-2xl space-y-3">
          <span className="badge-pill">Servicios principales</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            Servicios contables y fiscales centrados en tu empresa.
          </h2>
          <p className="text-sm sm:text-base text-brandGray">
            Desde la organización contable básica hasta la gestión tributaria
            completa, te acompaño en cada etapa para que puedas enfocarte en el
            crecimiento de tu negocio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform duration-300"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 360px, 100vw"
                />
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-brandNavy">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-brandGray">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-brandLightBlue/10 text-[11px] text-brandBlue border border-brandLightBlue/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
