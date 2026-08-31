import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcon";
import { LazyPayrollCssCalculator } from "@/components/LazyPayrollCssCalculator";
import type { ContentPage } from "@/lib/phase3-content";
import { getRelatedPages, resourceHubSlug, serviceSlug } from "@/lib/phase3-content";
import { editorialPath, methodologyPath, profilePath, sourcesPath } from "@/lib/phase4-authority";

type Props = {
  page: ContentPage;
};

export function ContentPageTemplate({ page }: Props) {
  const related = getRelatedPages(page);
  const isSpanish = page.lang === "es";
  const servicePath = `/${page.lang}/${serviceSlug(page.lang, page.cluster === "sem" ? "sem" : "payroll")}`;
  const authorPath = page.author === "JJL Independent Accounting" ? `/${page.lang}` : profilePath(page.lang, page.author);
  const updatedLabel = page.updated.split("-").reverse().join("/");

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brandNavy via-[#102B4C] to-brandBlue text-white">
        <div
          className="absolute -right-24 top-12 h-72 w-72 rounded-full bg-brandTurquoise/25 blur-3xl"
          data-gsap-parallax
        />
        <div className="section-container relative py-14 sm:py-20 lg:py-24">
          <nav className="mb-7 text-xs text-white/60" aria-label={isSpanish ? "Migas de pan" : "Breadcrumb"}>
            <Link href={`/${page.lang}`} className="hover:text-white">
              JJL
            </Link>
            <span className="mx-2">/</span>
            {page.kind === "service" ? (
              <Link href={`/${page.lang}#especialidades`} className="hover:text-white">
                {isSpanish ? "Especialidades" : "Specialties"}
              </Link>
            ) : (
              <Link href={`/${page.lang}/${resourceHubSlug(page.lang)}`} className="hover:text-white">
                {isSpanish ? "Recursos" : "Resources"}
              </Link>
            )}
            <span className="mx-2">/</span>
            <span>{page.cluster === "sem" ? "SEM" : "Payroll"}</span>
          </nav>

          <div className="max-w-4xl" data-gsap-reveal>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brandLightBlue">
              {page.eyebrow}
            </span>
            <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base">
              {page.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/65">
              <span>
                {page.kind === "article" ? (isSpanish ? "Por" : "By") : (isSpanish ? "Especialista responsable" : "Subject specialist")}: {" "}
                <Link href={authorPath} className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-brandTurquoise">
                  {page.author}
                </Link>
              </span>
              <span>{isSpanish ? "Actualizado" : "Updated"}: {updatedLabel}</span>
              {page.readingTime ? <span>{page.readingTime}</span> : null}
              <Link href={editorialPath(page.lang)} className="font-medium text-brandLightBlue hover:text-white">
                {isSpanish ? "Estándares editoriales ↗" : "Editorial standards ↗"}
              </Link>
            </div>
            {page.kind === "service" ? (
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={`/${page.lang}#contacto`} className="btn-primary">
                  {isSpanish ? "Solicitar evaluación" : "Request assessment"}
                </Link>
                <a
                  href={`https://wa.me/50767641014?text=${encodeURIComponent(
                    isSpanish
                      ? `Hola JJL, quiero información sobre ${page.title}.`
                      : `Hello JJL, I would like information about ${page.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white/40 bg-white/5 text-white hover:border-brandTurquoise"
                >
                  <SocialIcon name="whatsapp" className="mr-2 h-4 w-4" /> WhatsApp
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <main className="bg-[#F7FAFC]">
        <div className="section-container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:py-16">
          <article className="min-w-0 space-y-10">
            <section className="card p-6 sm:p-8" data-gsap-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandTurquoise">
                {isSpanish ? "En breve" : "At a glance"}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2" data-gsap-stagger>
                {page.keyPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-brandLightBlue/25 bg-brandLightBlue/10 p-4 text-sm leading-relaxed text-brandGray">
                    <span className="mr-2 font-bold text-brandTurquoise">✓</span>
                    {point}
                  </div>
                ))}
              </div>
            </section>

            {page.sections.map((section) => (
              <section key={section.heading} className="space-y-4" data-gsap-reveal>
                <h2 className="text-2xl font-semibold leading-tight text-brandNavy sm:text-3xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-brandGray sm:text-base">
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="grid gap-3 pt-1 sm:grid-cols-2" data-gsap-stagger>
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-relaxed text-brandGray shadow-sm">
                        <span className="mr-2 font-bold text-brandTurquoise">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {section.callout ? (
                  <div className="rounded-2xl border-l-4 border-brandTurquoise bg-brandTurquoise/10 p-5 text-sm leading-relaxed text-brandGray">
                    {section.callout}
                  </div>
                ) : null}
              </section>
            ))}

            {page.interactive === "css-calculator" ? <LazyPayrollCssCalculator lang={page.lang} /> : null}

            <section className="space-y-5" data-gsap-reveal>
              <div>
                <span className="badge-pill">FAQ</span>
                <h2 className="mt-3 text-2xl font-semibold text-brandNavy sm:text-3xl">
                  {isSpanish ? "Preguntas frecuentes" : "Frequently asked questions"}
                </h2>
              </div>
              <div className="space-y-3">
                {page.faqs.map((faq) => (
                  <details key={faq.question} className="group card p-5 open:ring-1 open:ring-brandLightBlue/30">
                    <summary className="cursor-pointer list-none pr-7 text-sm font-semibold text-brandNavy sm:text-base">
                      {faq.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-brandGray">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8" data-gsap-reveal>
              <h2 className="text-lg font-semibold text-brandNavy">
                {isSpanish ? "Fuentes oficiales y de referencia" : "Official and reference sources"}
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-brandGray">
                {isSpanish
                  ? "JJL utiliza fuentes oficiales para mantener estas guías alineadas con información pública disponible. La aplicación a un caso concreto debe validarse profesionalmente."
                  : "JJL uses official sources to keep these guides aligned with publicly available information. Application to a specific case should be professionally validated."}
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {page.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-medium text-brandTurquoise hover:text-brandBlue">
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {related.length ? (
              <section className="space-y-5" data-gsap-reveal>
                <div>
                  <span className="badge-pill">{isSpanish ? "Cluster relacionado" : "Related cluster"}</span>
                  <h2 className="mt-3 text-2xl font-semibold text-brandNavy">
                    {isSpanish ? "Siga profundizando" : "Continue exploring"}
                  </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2" data-gsap-stagger>
                  {related.map((item) => (
                    <Link key={item.slug} href={`/${item.lang}/${item.slug}`} className="card p-5 transition hover:-translate-y-1 hover:shadow-xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brandTurquoise">{item.eyebrow}</p>
                      <h3 className="mt-2 text-base font-semibold leading-snug text-brandNavy">{item.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-brandGray">{item.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="card p-5" data-gsap-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">
                {page.cluster === "sem"
                  ? isSpanish ? "Multinacionales & SEM" : "Multinationals & SEM"
                  : isSpanish ? "Payroll Panamá" : "Panama Payroll"}
              </p>
              <h2 className="mt-3 text-lg font-semibold text-brandNavy">
                {isSpanish ? "¿Necesita apoyo operativo?" : "Need operational support?"}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-brandGray">
                {isSpanish
                  ? "Conozca el servicio especializado de JJL o solicite una evaluación de su operación."
                  : "Explore JJL's specialized service or request an assessment of your operation."}
              </p>
              {page.kind === "article" ? (
                <Link href={servicePath} className="btn-primary mt-5 w-full">
                  {isSpanish ? "Ver servicio" : "View service"}
                </Link>
              ) : null}
              <Link
                href={`/${page.lang}#contacto`}
                className={`${page.kind === "article" ? "btn-outline mt-3" : "btn-primary mt-5"} w-full`}
              >
                {isSpanish ? "Hablar con JJL" : "Talk to JJL"}
              </Link>
            </div>

            <Link href={`/${page.lang}/${resourceHubSlug(page.lang)}`} className="block rounded-3xl border border-brandLightBlue/25 bg-brandLightBlue/10 p-5 text-sm font-semibold text-brandNavy transition hover:bg-brandLightBlue/20">
              {isSpanish ? "Ver todos los recursos →" : "View all resources →"}
            </Link>

            <div className="card p-5" data-gsap-reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">
                {isSpanish ? "Autoridad & trazabilidad" : "Authority & traceability"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brandGray">
                {isSpanish
                  ? "Este contenido está atribuido a una persona responsable, muestra fecha de actualización y enlaza sus fuentes para que la información pueda verificarse."
                  : "This content is attributed to a responsible person, displays an update date, and links its sources so the information can be verified."}
              </p>
              <div className="mt-4 space-y-2 text-xs font-semibold text-brandNavy">
                <Link href={authorPath} className="block hover:text-brandTurquoise">{page.author} →</Link>
                <Link href={editorialPath(page.lang)} className="block hover:text-brandTurquoise">{isSpanish ? "Política editorial" : "Editorial policy"} →</Link>
                <Link href={methodologyPath(page.lang)} className="block hover:text-brandTurquoise">{isSpanish ? "Metodología de fuentes" : "Source methodology"} →</Link>
                <Link href={sourcesPath(page.lang)} className="block hover:text-brandTurquoise">{isSpanish ? "Directorio de fuentes" : "Source directory"} →</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
