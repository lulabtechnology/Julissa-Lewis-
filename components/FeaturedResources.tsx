import Link from "next/link";
import { getContentPages, resourceHubSlug } from "@/lib/phase3-content";
import type { Lang } from "@/lib/seo";

export function FeaturedResources({ lang }: { lang: Lang }) {
  const isSpanish = lang === "es";
  const articles = getContentPages(lang).filter((page) => page.kind === "article");
  const featured = [
    ...articles.filter((page) => page.cluster === "sem").slice(0, 3),
    ...articles.filter((page) => page.cluster === "payroll").slice(0, 3)
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="section-container space-y-8" data-gsap-reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <span className="badge-pill">{isSpanish ? "SEO + GEO Knowledge Hub" : "SEO + GEO Knowledge Hub"}</span>
            <h2 className="mt-4 text-2xl font-semibold text-brandNavy sm:text-3xl">
              {isSpanish ? "Guías que responden las preguntas que sus clientes ya están buscando." : "Guides that answer the questions your clients are already searching for."}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brandGray sm:text-base">
              {isSpanish ? "Contenido firmado, actualizado y conectado a fuentes oficiales para construir autoridad temática alrededor de SEM, multinacionales y payroll en Panamá." : "Signed, updated content connected to official sources to build topical authority around SEM, multinationals, and payroll in Panama."}
            </p>
          </div>
          <Link href={`/${lang}/${resourceHubSlug(lang)}`} className="btn-outline shrink-0">
            {isSpanish ? "Ver todos los recursos" : "View all resources"}
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
          {featured.map((page) => (
            <Link key={page.slug} href={`/${lang}/${page.slug}`} className="card p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brandTurquoise">{page.eyebrow}</p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-brandNavy">{page.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-brandGray">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
