export function About() {
  return (
    <section
      id="sobre-mi"
      className="section-container py-14 sm:py-16 lg:py-20 animate-fade-up"
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">Sobre Julissa</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            Acompañamiento contable integral, cercano y confiable.
          </h2>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            Brindo servicio del ciclo completo contable, manejo de planilla,
            preparación y presentación de declaraciones de renta, certificación
            de ingresos y acompañamiento en la gestión financiera del negocio.
          </p>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            Cuento con más de 10 años de experiencia trabajando con empresas
            multinacionales, comprometida con los más altos estándares éticos y
            profesionales del Colegio de Contadores Públicos Autorizados de
            Panamá (CCPAP).
          </p>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            Mi enfoque es modernizar su contabilidad con herramientas líderes
            como QuickBooks, Alegra y soluciones en la nube para que tenga
            información clara, oportuna y lista para la toma de decisiones.
          </p>
        </div>

        <div className="card p-6 sm:p-7 space-y-5">
          <h3 className="text-sm font-semibold text-brandNavy">
            ¿Qué puedes esperar al trabajar conmigo?
          </h3>
          <ul className="space-y-3 text-sm text-brandGray">
            <li>• Comunicación clara y seguimiento constante.</li>
            <li>• Información financiera organizada y accesible.</li>
            <li>• Cumplimiento riguroso de normas tributarias y laborales.</li>
            <li>• Uso de herramientas digitales para agilizar procesos.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
