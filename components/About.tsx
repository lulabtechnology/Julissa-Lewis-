import Image from "next/image";
import Link from "next/link";
import { profilePath } from "@/lib/phase4-authority";

type Lang = "es" | "en";

interface AboutProps {
  lang: Lang;
}

const content = {
  es: {
    badge: "Nuestro equipo",
    title: "Dos perfiles ejecutivos para una gestión contable, financiera y laboral más completa.",
    intro:
      "JJL Independent Accounting combina dirección financiera senior, contabilidad digital, cumplimiento fiscal y administración de planilla bajo una estructura cercana, profesional y orientada al control.",
    profiles: [
      {
        name: "Julissa Lewis",
        role: "Fundadora & Contadora Principal",
        title: "CPA, Consultora Financiera.",
        image: "/images/julissa-lewis-new.jpg",
        bio:
          "Mi trayectoria combina más de 15 años de experiencia liderando las finanzas, los presupuestos y el control de gestión en reconocidas corporaciones transnacionales y de tecnología global, respaldada por una formación académica internacional (Georgetown University / ADEN Business School). Como Fundadora de la firma, me dedico a transformar la contabilidad tradicional en un modelo digital eficiente en la nube. Mi enfoque es brindarle estados financieros claros y un estricto control de cumplimiento ante la DGI para que pueda dirigir su negocio con total tranquilidad.",
        highlights: [
          "Dirección financiera y control de gestión",
          "Estados financieros y cumplimiento ante la DGI",
          "Transformación contable digital en la nube"
        ]
      },
      {
        name: "Jissbeth Lewis",
        role: "Co-Fundadora & Especialista en Administración y Planilla",
        title: "Especialista en Gestión de Nómina y Cumplimiento Laboral.",
        image: "/images/jissbeth-lewis-payroll.jpg",
        bio:
          "Especialista en la administración de capital humano y procesamiento de nóminas con amplia trayectoria dentro de firmas globales de consultoría corporativa y servicios de externalización de primer nivel. Dirige de forma exclusiva nuestra suite de gestión de planilla, garantizando que el pago de sus empleados y el cálculo de sus obligaciones ante la Caja de Seguro Social (SIPE) y el Ministerio de Trabajo se ejecuten a tiempo, con total precisión y bajo los controles que su empresa exige.",
        highlights: [
          "Procesamiento experto de nómina local",
          "Control de SIPE, CSS y obligaciones laborales",
          "Administración de capital humano y prestaciones"
        ]
      }
    ]
  },
  en: {
    badge: "Our team",
    title: "Two executive profiles for stronger accounting, financial, and labor management.",
    intro:
      "JJL Independent Accounting brings together senior financial direction, digital accounting, tax compliance, and payroll administration through a close, professional, control-oriented structure.",
    profiles: [
      {
        name: "Julissa Lewis",
        role: "Founder & Principal Accountant",
        title: "CPA, Financial Consultant.",
        image: "/images/julissa-lewis-new.jpg",
        bio:
          "My career combines more than 15 years of experience leading finance, budgeting, and management control for renowned transnational and global technology corporations, supported by international academic training (Georgetown University / ADEN Business School). As Founder of the firm, I focus on transforming traditional accounting into an efficient digital cloud-based model. My approach is to provide clear financial statements and strict DGI compliance control so you can lead your business with confidence.",
        highlights: [
          "Financial direction and management control",
          "Financial statements and DGI compliance",
          "Cloud-based digital accounting transformation"
        ]
      },
      {
        name: "Jissbeth Lewis",
        role: "Co-Founder & Administration and Payroll Specialist",
        title: "Payroll Management and Labor Compliance Specialist.",
        image: "/images/jissbeth-lewis-payroll.jpg",
        bio:
          "Specialist in human capital administration and payroll processing with broad experience in global corporate consulting and top-tier outsourcing firms. She exclusively leads our payroll management suite, ensuring employee payments and the calculation of obligations before the Social Security Fund (SIPE) and the Ministry of Labor are executed on time, accurately, and under the controls your company requires.",
        highlights: [
          "Expert local payroll processing",
          "SIPE, CSS, and labor obligation control",
          "Human capital and benefit administration"
        ]
      }
    ]
  }
} as const;

export function About({ lang }: AboutProps) {
  const t = content[lang];

  return (
    <section
      id="sobre-mi"
      className="section-container py-14 sm:py-16 lg:py-20 animate-fade-up"
    >
      <div className="max-w-3xl space-y-4 mb-10">
        <span className="badge-pill">{t.badge}</span>
        <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-brandGray leading-relaxed">
          {t.intro}
        </p>
      </div>

      <div className="grid gap-7 lg:grid-cols-2">
        {t.profiles.map((profile) => (
          <article key={profile.name} className="card overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-transform duration-300">
            <div className="relative h-[420px] sm:h-[500px] w-full bg-[#EEF6FA]">
              <Image
                src={profile.image}
                alt={`${profile.name} - ${profile.role}`}
                fill
                className="object-cover object-[center_top]"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
            <div className="p-6 sm:p-7 space-y-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brandTurquoise">
                  {profile.role}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-brandNavy">
                  {profile.name}
                </h3>
                <p className="text-sm font-medium text-brandBlue mt-1">
                  {profile.title}
                </p>
              </div>

              <p className="text-sm text-brandGray leading-relaxed">
                {profile.bio}
              </p>

              <div className="rounded-2xl border border-brandLightBlue/30 bg-brandLightBlue/10 p-4">
                <ul className="space-y-2 text-sm text-brandGray">
                  {profile.highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[2px] text-brandTurquoise font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={profilePath(lang, profile.name)} className="inline-flex text-sm font-semibold text-brandTurquoise hover:text-brandBlue">
                {lang === "es" ? "Ver perfil profesional →" : "View professional profile →"}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
