import { serviceSlug } from "@/lib/phase3-content";
import Image from "next/image";

type Lang = "es" | "en";

interface PriorityServicesProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Dos especialidades principales",
    title: "Una firma enfocada en los dos retos que más pesan cuando una empresa opera y crece en Panamá.",
    intro:
      "JJL concentra su propuesta en dos áreas donde el control, la precisión y el conocimiento local marcan una diferencia real: operaciones multinacionales y gestión de planilla.",
    services: [
      {
        id: "multinacionales-sem",
        eyebrow: "Multinacionales & SEM",
        title: "Contabilidad y soporte financiero para multinacionales y empresas SEM.",
        text:
          "Acompañamiento contable, financiero y de cumplimiento para filiales, grupos empresariales, operaciones bajo régimen SEM y estructuras con actividad internacional o renta de fuente extranjera.",
        audience:
          "Ideal para CFOs, gerencias regionales, filiales y compañías internacionales con operación en Panamá.",
        bullets: [
          "Contabilidad y reporting financiero para operación local",
          "Control fiscal y documental ante obligaciones en Panamá",
          "Gestión multidivisa, tesorería y soporte de controller",
          "Acompañamiento para estructuras SEM y operaciones internacionales"
        ],
        image: "/images/service-accounting.jpg",
        cta: "Explorar Multinacionales & SEM"
      },
      {
        id: "payroll-panama",
        eyebrow: "Payroll & Cumplimiento Laboral",
        title: "Outsourcing de planilla, SIPE y cumplimiento laboral para empresas.",
        text:
          "Externalizamos la gestión de nómina para reducir carga operativa y mantener bajo control cálculos, novedades, prestaciones y obligaciones vinculadas al personal local en Panamá.",
        audience:
          "Ideal para empresas que quieren delegar planilla sin perder visibilidad ni control interno.",
        bullets: [
          "Procesamiento de planilla local y novedades",
          "SIPE y obligaciones ante la Caja de Seguro Social",
          "Décimo tercer mes, vacaciones y liquidaciones",
          "Control de prestaciones y soporte administrativo laboral"
        ],
        image: "/images/service-payroll.jpg",
        cta: "Explorar Payroll"
      }
    ]
  },
  en: {
    badge: "Two core specialties",
    title: "A firm focused on two of the most critical challenges for companies operating and growing in Panama.",
    intro:
      "JJL centers its value proposition on two areas where control, accuracy, and local knowledge make a measurable difference: multinational operations and payroll management.",
    services: [
      {
        id: "multinationals-sem",
        eyebrow: "Multinationals & SEM",
        title: "Accounting and financial support for multinationals and SEM companies.",
        text:
          "Accounting, financial, and compliance support for subsidiaries, corporate groups, SEM-regime operations, and structures with international activity or foreign-source income.",
        audience:
          "Ideal for CFOs, regional management teams, subsidiaries, and international companies operating in Panama.",
        bullets: [
          "Local accounting and financial reporting",
          "Tax and documentation control for Panama obligations",
          "Multi-currency management, treasury, and controller support",
          "Support for SEM structures and international operations"
        ],
        image: "/images/service-accounting.jpg",
        cta: "Explore Multinationals & SEM"
      },
      {
        id: "payroll-panama",
        eyebrow: "Payroll & Labor Compliance",
        title: "Payroll outsourcing, SIPE, and labor-compliance support for companies.",
        text:
          "We externalize payroll management to reduce operational burden while keeping calculations, employee changes, statutory benefits, and local workforce obligations under control.",
        audience:
          "Ideal for companies that want to delegate payroll without losing visibility or internal control.",
        bullets: [
          "Local payroll processing and employee changes",
          "SIPE and Social Security Fund obligations",
          "Thirteenth-month payment, vacation, and terminations",
          "Statutory benefit control and labor administration support"
        ],
        image: "/images/service-payroll.jpg",
        cta: "Explore Payroll"
      }
    ]
  }
} as const;

export function PriorityServices({ lang }: PriorityServicesProps) {
  const t = content[lang];

  return (
    <section id="especialidades" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="section-container space-y-10 animate-fade-up" data-gsap-reveal>
        <div className="max-w-4xl space-y-4">
          <span className="badge-pill">{t.badge}</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-brandNavy leading-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-brandGray leading-relaxed max-w-3xl">
            {t.intro}
          </p>
        </div>

        <div className="grid gap-7 lg:grid-cols-2" data-gsap-stagger>
          {t.services.map((service) => (
            <article
              id={service.id}
              key={service.id}
              className="card overflow-hidden scroll-mt-28 flex flex-col"
            >
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#EEF6FA]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 560px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brandNavy/70 via-brandNavy/10 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="inline-flex rounded-full border border-white/25 bg-brandNavy/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                    {service.eyebrow}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-brandNavy leading-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm text-brandGray leading-relaxed">
                  {service.text}
                </p>

                <div className="mt-5 rounded-2xl border border-brandLightBlue/30 bg-brandLightBlue/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brandBlue">
                    {lang === "es" ? "Pensado para" : "Built for"}
                  </p>
                  <p className="mt-2 text-sm text-brandGray leading-relaxed">
                    {service.audience}
                  </p>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-brandGray">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brandTurquoise/10 text-xs font-bold text-brandTurquoise">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={`/${lang}/${serviceSlug(lang, service.id.includes("payroll") ? "payroll" : "sem")}`} className="btn-primary w-full sm:w-auto">
                    {service.cta}
                  </a>
                  <a href={`/${lang}#contacto`} className="btn-outline w-full sm:w-auto">
                    {lang === "es" ? "Hablar con JJL" : "Talk to JJL"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
