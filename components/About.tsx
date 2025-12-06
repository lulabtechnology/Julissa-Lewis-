type Lang = "es" | "en";

interface AboutProps {
  lang: Lang;
}

export function About({ lang }: AboutProps) {
  const title =
    lang === "es"
      ? "Acompañamiento contable integral, cercano y confiable."
      : "Comprehensive, close and trustworthy accounting support.";

  const p1 =
    lang === "es"
      ? "Brindo servicio del ciclo completo contable, manejo de planilla, preparación y presentación de declaraciones de renta, certificación de ingresos y acompañamiento en la gestión financiera del negocio."
      : "I provide full-cycle accounting services, payroll management, preparation and filing of income tax returns, income certifications and support in your company’s financial management.";

  const p2 =
    lang === "es"
      ? "Cuento con más de 10 años de experiencia trabajando con empresas multinacionales, comprometida con los más altos estándares éticos y profesionales del Colegio de Contadores Públicos Autorizados de Panamá (CCPAP)."
      : "I have over 10 years of experience working with multinational companies, committed to the highest ethical and professional standards of the Certified Public Accountants Association of Panama (CCPAP).";

  const p3 =
    lang === "es"
      ? "Mi enfoque es modernizar su contabilidad con herramientas líderes como QuickBooks, Alegra y soluciones en la nube para que tenga información clara, oportuna y lista para la toma de decisiones."
      : "My focus is to modernize your accounting with leading tools such as QuickBooks, Alegra and cloud-based solutions so that you always have clear and timely information for decision-making.";

  return (
    <section
      id="sobre-mi"
      className="section-container py-14 sm:py-16 lg:py-20 animate-fade-up"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">
            {lang === "es" ? "Sobre Julissa" : "About Julissa"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            {p1}
          </p>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            {p2}
          </p>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            {p3}
          </p>
        </div>

        <div className="card p-6 sm:p-7 space-y-5">
          <h3 className="text-sm font-semibold text-brandNavy">
            {lang === "es"
              ? "¿Qué puedes esperar al trabajar conmigo?"
              : "What can you expect when working with me?"}
          </h3>
          <ul className="space-y-3 text-sm text-brandGray">
            <li>
              •{" "}
              {lang === "es"
                ? "Comunicación clara y seguimiento constante."
                : "Clear communication and ongoing follow-up."}
            </li>
            <li>
              •{" "}
              {lang === "es"
                ? "Información financiera organizada y accesible."
                : "Organized and easily accessible financial information."}
            </li>
            <li>
              •{" "}
              {lang === "es"
                ? "Cumplimiento riguroso de normas tributarias y laborales."
                : "Rigorous compliance with tax and labor regulations."}
            </li>
            <li>
              •{" "}
              {lang === "es"
                ? "Uso de herramientas digitales para agilizar procesos."
                : "Use of digital tools to streamline processes."}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
