type Lang = "es" | "en";

interface ServicesProps {
  lang: Lang;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

const content = {
  es: {
    badge: "Planes y soluciones",
    title: "Servicios estructurados por nivel de control y crecimiento.",
    intro:
      "Reemplazamos paquetes genéricos por planes conceptuales que se adaptan al volumen, etapa y nivel de dirección financiera que su empresa necesita.",
    infrastructureTitle: "Infraestructura contable digital",
    infrastructureText:
      "Implementamos sistemas de contabilidad digital y gestión financiera en la nube con encriptación bancaria. Integramos plataformas autorizadas por los PAC para la facturación electrónica y un modelo avanzado de digitalización documental con Inteligencia Artificial, garantizando el registro automático de comprobantes y el resguardo seguro de archivos en la nube hasta por 10 años.",
    plans: [
      {
        name: "Plan Esencial",
        subtitle: "Soporte Operativo & Cumplimiento",
        description:
          "Diseñado para empresas que requieren establecer una base sólida de cumplimiento fiscal local y regularización ante la DGI. Incluye monitoreo de facturación electrónica, conciliación automatizada en la nube y la preparación de la Declaración Jurada de Renta Anual. Ideal para clientes que autogestionan su registro diario y buscan supervisión CPA.",
        tags: ["DGI", "Facturación electrónica", "Conciliación"]
      },
      {
        name: "Plan Integral",
        subtitle: "Control Operativo & Análisis Trimestral",
        description:
          "Para negocios en crecimiento que exigen visibilidad periódica de su salud financiera. Suma al plan esencial la entrega trimestral de Estados Financieros analíticos (P&L y Balance) junto con un análisis de variaciones operativas para la toma de decisiones.",
        tags: ["P&L", "Balance", "Análisis trimestral"]
      },
      {
        name: "Plan Corporativo",
        subtitle: "Virtual Controller & Dirección Estratégica",
        description:
          "Nuestro servicio de más alto nivel para multinacionales, filiales o estructuras offshore. Dirección financiera senior con entrega mensual de reportes ejecutivos (Senior Reporting), diseño y control presupuestario, análisis de indicadores clave (KPIs), gestión multidivisa y juntas mensuales de revisión.",
        tags: ["KPIs", "Senior reporting", "Multidivisa"]
      }
    ],
    modulesBadge: "Complementos modulares",
    modulesTitle: "Servicios llave en mano para completar la operación.",
    modules: [
      {
        title: "Módulo de Nómina",
        text:
          "Procesamiento y cálculo experto de planilla local (SIPE / Caja de Seguro Social), liquidaciones, décimo tercer mes y control de prestaciones de ley."
      },
      {
        title: "Administración y Tesorería Corporativa",
        text:
          "Servicio especializado para la gestión y dispersión de fondos, ACH, pago directo a proveedores y empleados desde la banca corporativa del cliente bajo estrictos protocolos de control interno."
      },
      {
        title: "Alianza Legal Estratégica",
        text:
          "Acompañamiento legal corporativo para la constitución de sociedades anónimas, registros comerciales avanzados, asesoría migratoria y auditoría de contratos laborales a través de nuestra alianza legal estratégica."
      },
      {
        title: "Traducciones Oficiales",
        text:
          "Contacto directo para el servicio de Traducción Oficial Registrada ante el MIRE (Ministerio de Relaciones Exteriores).",
        cta: "Ir al servicio de traducción"
      }
    ]
  },
  en: {
    badge: "Plans and solutions",
    title: "Services structured by control level and business growth.",
    intro:
      "We replace generic packages with conceptual plans that adapt to your company’s volume, stage, and financial direction needs.",
    infrastructureTitle: "Digital accounting infrastructure",
    infrastructureText:
      "We implement digital accounting and cloud-based financial management systems with bank-grade encryption. We integrate platforms authorized by PAC providers for electronic invoicing and an advanced document digitization model with Artificial Intelligence, ensuring automatic receipt registration and secure cloud file storage for up to 10 years.",
    plans: [
      {
        name: "Essential Plan",
        subtitle: "Operational Support & Compliance",
        description:
          "Designed for companies that need to establish a solid foundation for local tax compliance and DGI regularization. Includes electronic invoicing monitoring, automated cloud reconciliation, and preparation of the Annual Income Tax Return. Ideal for clients who self-manage daily records and need CPA supervision.",
        tags: ["DGI", "Electronic invoicing", "Reconciliation"]
      },
      {
        name: "Integral Plan",
        subtitle: "Operational Control & Quarterly Analysis",
        description:
          "For growing businesses that require periodic visibility into financial health. Adds quarterly analytical Financial Statements (P&L and Balance Sheet) to the essential plan, together with operational variance analysis for decision-making.",
        tags: ["P&L", "Balance Sheet", "Quarterly analysis"]
      },
      {
        name: "Corporate Plan",
        subtitle: "Virtual Controller & Strategic Direction",
        description:
          "Our highest-level service for multinationals, subsidiaries, or offshore structures. Senior financial direction with monthly executive reports, budget design and control, key indicator analysis (KPIs), multi-currency management, and monthly review meetings.",
        tags: ["KPIs", "Senior reporting", "Multi-currency"]
      }
    ],
    modulesBadge: "Modular add-ons",
    modulesTitle: "Turnkey services to complete the operation.",
    modules: [
      {
        title: "Payroll Module",
        text:
          "Expert processing and calculation of local payroll (SIPE / Social Security Fund), terminations, thirteenth-month payment, and statutory benefit control."
      },
      {
        title: "Corporate Administration and Treasury",
        text:
          "Specialized service for fund management and disbursement, ACH, and direct payments to suppliers and employees from the client’s corporate banking under strict internal control protocols."
      },
      {
        title: "Strategic Legal Alliance",
        text:
          "Corporate legal support for the incorporation of corporations, advanced commercial registrations, immigration advisory, and labor contract audits through our strategic legal alliance."
      },
      {
        title: "Official Translations",
        text:
          "Direct contact for Official Translation services registered before the MIRE (Ministry of Foreign Affairs).",
        cta: "Go to translation service"
      }
    ]
  }
} as const;

export function Services({ lang }: ServicesProps) {
  const t = content[lang];

  return (
    <section
      id="servicios"
      className="bg-[#EDF2F7] border-y border-gray-100 py-14 sm:py-16 lg:py-20"
    >
      <div className="section-container space-y-12 animate-fade-up">
        <div className="max-w-3xl space-y-3">
          <span className="badge-pill">{t.badge}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="card p-6 sm:p-8 bg-gradient-to-br from-white to-brandLightBlue/10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandTurquoise mb-3">
            {t.infrastructureTitle}
          </p>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed max-w-5xl">
            {t.infrastructureText}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {t.plans.map((plan, index) => (
            <article
              key={plan.name}
              className="card p-6 sm:p-7 hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 flex flex-col"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandNavy text-white text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full bg-brandTurquoise/10 px-3 py-1 text-[11px] font-semibold text-brandTurquoise">
                  {lang === "es" ? "Sin tarifas públicas" : "No public fees"}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-brandNavy">
                  {plan.name}
                </h3>
                <p className="text-sm font-medium text-brandBlue">
                  {plan.subtitle}
                </p>
                <p className="text-sm text-brandGray leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                {plan.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brandLightBlue/10 text-[11px] text-brandBlue border border-brandLightBlue/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="badge-pill">{t.modulesBadge}</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
              {t.modulesTitle}
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {t.modules.map((module) => (
              <article key={module.title} className="card p-6 sm:p-7 space-y-3">
                <h3 className="text-base font-semibold text-brandNavy">
                  {module.title}
                </h3>
                <p className="text-sm text-brandGray leading-relaxed">
                  {module.text}
                </p>
                {"cta" in module ? (
                  <a
                    href={TRANSLATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline mt-2 w-full sm:w-auto"
                  >
                    {module.cta}
                    <span aria-hidden="true" className="ml-1">↗</span>
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
