type Lang = "es" | "en";

interface ServicesProps {
  lang: Lang;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

const content = {
  es: {
    badge: "Soporte complementario",
    title: "La contabilidad, el control financiero y la operación que sostienen nuestras dos especialidades.",
    intro:
      "Además de Multinacionales & SEM y Payroll, estructuramos el soporte operativo que cada empresa necesita según su volumen, complejidad y nivel de control interno.",
    infrastructureTitle: "Infraestructura contable digital",
    infrastructureText:
      "Implementamos contabilidad y gestión financiera en la nube, conciliaciones, facturación electrónica, digitalización documental y controles que permiten trabajar con información más ordenada, trazable y disponible para la toma de decisiones.",
    plans: [
      {
        name: "Contabilidad & Cumplimiento",
        subtitle: "Base operativa local",
        description:
          "Contabilidad recurrente, conciliaciones, soporte de facturación electrónica, preparación de información financiera y control de obligaciones locales ante la DGI.",
        tags: ["DGI", "Conciliaciones", "Facturación"]
      },
      {
        name: "Reporting & Control",
        subtitle: "Visibilidad financiera",
        description:
          "Estados financieros periódicos, análisis de variaciones y reportes de gestión para empresas que necesitan entender mejor su operación y tomar decisiones con información clara.",
        tags: ["P&L", "Balance", "Reporting"]
      },
      {
        name: "Controller & Dirección Financiera",
        subtitle: "Soporte senior",
        description:
          "Presupuestos, KPIs, control financiero, gestión multidivisa y reuniones de revisión para organizaciones con mayor complejidad, filiales o estructuras internacionales.",
        tags: ["KPIs", "Controller", "Multidivisa"]
      }
    ],
    modulesBadge: "Capacidades adicionales",
    modulesTitle: "Servicios que pueden integrarse a la solución principal.",
    modules: [
      {
        title: "Administración y Tesorería Corporativa",
        text:
          "Gestión y dispersión de fondos, ACH y pagos a proveedores o empleados desde la banca corporativa del cliente, bajo protocolos de control interno."
      },
      {
        title: "Acompañamiento Financiero Especializado",
        text:
          "Soporte para presupuestos, análisis puntuales, procesos de cierre, estructuración de reportes y proyectos financieros a la medida."
      },
      {
        title: "Alianza Legal Estratégica",
        text:
          "Coordinación de soporte corporativo, migratorio y laboral a través de una alianza legal especializada cuando la operación lo requiere."
      },
      {
        title: "Traducciones Oficiales",
        text:
          "Acceso directo al servicio de Traducción Oficial Registrada ante el MIRE para documentación corporativa y trámites.",
        cta: "Ir al servicio de traducción"
      }
    ]
  },
  en: {
    badge: "Complementary support",
    title: "The accounting, financial control, and operational support behind our two core specialties.",
    intro:
      "Beyond Multinationals & SEM and Payroll, we structure the operational support each company needs according to volume, complexity, and internal-control requirements.",
    infrastructureTitle: "Digital accounting infrastructure",
    infrastructureText:
      "We implement cloud accounting and financial management, reconciliations, electronic invoicing, document digitization, and controls that keep information organized, traceable, and available for decision-making.",
    plans: [
      {
        name: "Accounting & Compliance",
        subtitle: "Local operational foundation",
        description:
          "Recurring accounting, reconciliations, electronic-invoicing support, financial-information preparation, and control of local DGI obligations.",
        tags: ["DGI", "Reconciliations", "Invoicing"]
      },
      {
        name: "Reporting & Control",
        subtitle: "Financial visibility",
        description:
          "Periodic financial statements, variance analysis, and management reports for companies that need clearer visibility into operations and decision-making.",
        tags: ["P&L", "Balance Sheet", "Reporting"]
      },
      {
        name: "Controller & Financial Direction",
        subtitle: "Senior support",
        description:
          "Budgets, KPIs, financial control, multi-currency management, and review meetings for organizations with greater complexity, subsidiaries, or international structures.",
        tags: ["KPIs", "Controller", "Multi-currency"]
      }
    ],
    modulesBadge: "Additional capabilities",
    modulesTitle: "Services that can be integrated into the primary solution.",
    modules: [
      {
        title: "Corporate Administration and Treasury",
        text:
          "Fund management and disbursement, ACH, and supplier or employee payments from the client’s corporate banking under internal-control protocols."
      },
      {
        title: "Specialized Financial Support",
        text:
          "Support for budgets, ad-hoc analysis, closing processes, reporting structures, and tailored financial projects."
      },
      {
        title: "Strategic Legal Alliance",
        text:
          "Coordination of corporate, immigration, and labor support through a specialized legal alliance when the operation requires it."
      },
      {
        title: "Official Translations",
        text:
          "Direct access to Official Translation services registered before MIRE for corporate documentation and procedures.",
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
        <div className="max-w-4xl space-y-3">
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
              <div className="mb-5 flex items-center">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brandNavy text-white text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-brandNavy">{plan.name}</h3>
                <p className="text-sm font-medium text-brandBlue">{plan.subtitle}</p>
                <p className="text-sm text-brandGray leading-relaxed">{plan.description}</p>
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
                <h3 className="text-base font-semibold text-brandNavy">{module.title}</h3>
                <p className="text-sm text-brandGray leading-relaxed">{module.text}</p>
                {"cta" in module ? (
                  <a
                    href={TRANSLATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brandTurquoise hover:text-brandBlue transition-colors"
                  >
                    {module.cta}
                    <span aria-hidden="true">↗</span>
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
