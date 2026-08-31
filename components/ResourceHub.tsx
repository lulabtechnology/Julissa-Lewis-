import Link from "next/link";
import { getContentPages, RESOURCE_HUB_META, serviceSlug } from "@/lib/phase3-content";
import type { Lang } from "@/lib/seo";

export function ResourceHub({ lang }: { lang: Lang }) {
  const meta = RESOURCE_HUB_META[lang];
  const articles = getContentPages(lang).filter((page) => page.kind === "article");
  const sem = articles.filter((page) => page.cluster === "sem");
  const payroll = articles.filter((page) => page.cluster === "payroll");
  const isSpanish = lang === "es";

  return (
    <main className="bg-[#F7FAFC]">
      <section className="relative overflow-hidden bg-brandNavy text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brandTurquoise/25 blur-3xl" data-gsap-parallax />
        <div className="section-container relative py-16 lg:py-24" data-gsap-reveal>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brandLightBlue">
            {meta.eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{meta.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{meta.summary}</p>
        </div>
      </section>

      <div className="section-container space-y-14 py-14 lg:py-20">
        <section className="grid gap-5 lg:grid-cols-2" data-gsap-stagger>
          <Link href={`/${lang}/${serviceSlug(lang, "sem")}`} className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brandNavy to-brandBlue p-7 text-white shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandLightBlue">{isSpanish ? "Servicio principal" : "Core service"}</p>
            <h2 className="mt-3 text-2xl font-semibold">{isSpanish ? "Contabilidad para SEM & Multinacionales" : "SEM & Multinational Accounting"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{isSpanish ? "Accounting, reporting, cumplimiento local y soporte financiero para operaciones internacionales." : "Accounting, reporting, local compliance, and financial support for international operations."}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-white">{isSpanish ? "Explorar especialidad →" : "Explore specialty →"}</span>
          </Link>
          <Link href={`/${lang}/${serviceSlug(lang, "payroll")}`} className="group relative overflow-hidden rounded-[2rem] border border-brandLightBlue/30 bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">{isSpanish ? "Servicio principal" : "Core service"}</p>
            <h2 className="mt-3 text-2xl font-semibold text-brandNavy">{isSpanish ? "Outsourcing de Planilla & SIPE" : "Payroll Outsourcing & SIPE"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brandGray">{isSpanish ? "Procesamiento de nómina, SIPE, CSS, prestaciones y controles operativos para empleadores." : "Payroll processing, SIPE, CSS, benefits, and operational controls for employers."}</p>
            <span className="mt-6 inline-flex text-sm font-semibold text-brandTurquoise">{isSpanish ? "Explorar especialidad →" : "Explore specialty →"}</span>
          </Link>
        </section>

        <ResourceCluster title={isSpanish ? "Multinacionales, SEM & operaciones internacionales" : "Multinationals, SEM & international operations"} pages={sem} />
        <ResourceCluster title={isSpanish ? "Payroll, SIPE & cumplimiento laboral" : "Payroll, SIPE & labor compliance"} pages={payroll} />
      </div>
    </main>
  );
}

function ResourceCluster({ title, pages }: { title: string; pages: ReturnType<typeof getContentPages> }) {
  return (
    <section className="space-y-6" data-gsap-reveal>
      <h2 className="text-2xl font-semibold text-brandNavy sm:text-3xl">{title}</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
        {pages.map((page) => (
          <Link key={page.slug} href={`/${page.lang}/${page.slug}`} className="card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brandTurquoise">{page.eyebrow}</p>
            <h3 className="mt-3 text-lg font-semibold leading-snug text-brandNavy">{page.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brandGray">{page.description}</p>
            <div className="mt-auto pt-5 text-xs font-semibold text-brandBlue">{page.readingTime ?? ""} <span className="ml-2">→</span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
