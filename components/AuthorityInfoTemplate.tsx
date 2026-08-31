import Link from "next/link";
import type { AuthorityInfoPage } from "@/lib/phase4-authority";
import { editorialPath, mediaPath, methodologyPath, profilePath } from "@/lib/phase4-authority";
import { resourceHubSlug } from "@/lib/phase3-content";

export function AuthorityInfoTemplate({ page }: { page: AuthorityInfoPage }) {
  const isSpanish = page.lang === "es";

  return (
    <main className="bg-[#F7FAFC]">
      <section className="relative overflow-hidden bg-brandNavy text-white">
        <div className="absolute -right-28 -top-24 h-96 w-96 rounded-full bg-brandTurquoise/20 blur-3xl" data-gsap-parallax />
        <div className="section-container relative py-16 lg:py-24" data-gsap-reveal>
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brandLightBlue">{page.eyebrow}</span>
          <h1 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/78 sm:text-base">{page.summary}</p>
          <p className="mt-5 text-xs text-white/55">{isSpanish ? "Actualizado" : "Updated"}: 31/08/2026</p>
        </div>
      </section>

      <div className="section-container grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:py-16">
        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.heading} className="space-y-4" data-gsap-reveal>
              <h2 className="text-2xl font-semibold text-brandNavy sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-brandGray sm:text-base">{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="grid gap-3 pt-2 sm:grid-cols-2" data-gsap-stagger>
                  {section.bullets.map((item) => (
                    <li key={item} className="rounded-2xl border border-gray-100 bg-white p-4 text-sm leading-relaxed text-brandGray shadow-sm">
                      <span className="mr-2 font-bold text-brandTurquoise">•</span>{item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start" data-gsap-reveal>
          <div className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">JJL Independent Accounting</p>
            <h2 className="mt-3 text-lg font-semibold text-brandNavy">{isSpanish ? "Autoridad verificable, sin adornos" : "Verifiable authority, without embellishment"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brandGray">{isSpanish ? "La estrategia de autoridad de JJL conecta personas reales, contenido atribuido y fuentes públicas en lugar de depender de claims genéricos." : "JJL's authority strategy connects real people, attributed content, and public sources instead of relying on generic claims."}</p>
          </div>

          <div className="card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">{isSpanish ? "Explorar" : "Explore"}</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-brandNavy">
              <Link className="block hover:text-brandTurquoise" href={profilePath(page.lang, "Julissa Lewis")}>Julissa Lewis →</Link>
              <Link className="block hover:text-brandTurquoise" href={profilePath(page.lang, "Jissbeth Lewis")}>Jissbeth Lewis →</Link>
              <Link className="block hover:text-brandTurquoise" href={`/${page.lang}/${resourceHubSlug(page.lang)}`}>{isSpanish ? "Centro de conocimiento" : "Knowledge center"} →</Link>
              {page.type !== "press" ? <Link className="block hover:text-brandTurquoise" href={mediaPath(page.lang)}>{isSpanish ? "Centro de medios" : "Media center"} →</Link> : null}
              {page.slug !== (isSpanish ? "politica-editorial" : "editorial-policy") ? <Link className="block hover:text-brandTurquoise" href={editorialPath(page.lang)}>{isSpanish ? "Política editorial" : "Editorial policy"} →</Link> : null}
              {page.slug !== (isSpanish ? "metodologia-fuentes-actualizaciones" : "source-update-methodology") ? <Link className="block hover:text-brandTurquoise" href={methodologyPath(page.lang)}>{isSpanish ? "Metodología" : "Methodology"} →</Link> : null}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
