import Image from "next/image";
import { SocialIcon } from "@/components/SocialIcon";
import Link from "next/link";
import type { AuthorityProfile } from "@/lib/phase4-authority";
import { editorialPath, mediaPath } from "@/lib/phase4-authority";
import { getContentPages } from "@/lib/phase3-content";

export function AuthorityProfileTemplate({ profile }: { profile: AuthorityProfile }) {
  const isSpanish = profile.lang === "es";
  const authored = getContentPages(profile.lang).filter(
    (page) => page.author === profile.name
  );

  return (
    <main className="bg-[#F7FAFC]">
      <section className="relative overflow-hidden bg-gradient-to-br from-brandNavy via-[#102B4C] to-brandBlue text-white">
        <div className="absolute -right-24 top-8 h-80 w-80 rounded-full bg-brandTurquoise/20 blur-3xl" data-gsap-parallax />
        <div className="section-container relative grid gap-9 py-14 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-center lg:py-20">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl" data-gsap-reveal>
            <Image
              src={profile.image}
              alt={`${profile.name} - ${profile.role}`}
              fill
              className="object-cover object-top"
              sizes="340px"
              priority
            />
          </div>

          <div data-gsap-reveal>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brandLightBlue">
              {profile.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-brandLightBlue">{profile.role}</p>
            <p className="mt-2 text-sm text-white/70">{profile.credentialLine}</p>
            <p className="mt-6 max-w-3xl text-base leading-7 text-white/82">{profile.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={`/${profile.lang}#contacto`} className="btn-primary">
                {isSpanish ? "Contactar a JJL" : "Contact JJL"}
              </Link>
              {profile.sameAs?.map((url) => (
                <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="btn-outline border-white/35 bg-white/5 text-white hover:border-brandTurquoise">
                  <SocialIcon name="linkedin" className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-container space-y-12 py-12 lg:py-16">
        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="card space-y-5 p-6 sm:p-8" data-gsap-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandTurquoise">
              {isSpanish ? "Trayectoria" : "Background"}
            </p>
            {profile.bio.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-brandGray sm:text-base">{paragraph}</p>
            ))}
          </article>

          <aside className="card p-6 sm:p-7" data-gsap-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandTurquoise">
              {isSpanish ? "Áreas de experiencia" : "Areas of expertise"}
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brandGray">
              {profile.expertise.map((item) => (
                <li key={item} className="flex gap-3"><span className="font-bold text-brandTurquoise">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="rounded-[2rem] bg-brandNavy p-7 text-white sm:p-9" data-gsap-reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brandLightBlue">
            {isSpanish ? "Criterio de trabajo" : "Working approach"}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3" data-gsap-stagger>
            {profile.approach.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/78">{item}</div>
            ))}
          </div>
        </section>

        {authored.length ? (
          <section className="space-y-6" data-gsap-reveal>
            <div>
              <span className="badge-pill">{isSpanish ? "Autoridad temática" : "Topical authority"}</span>
              <h2 className="mt-3 text-2xl font-semibold text-brandNavy sm:text-3xl">
                {isSpanish ? `Recursos atribuidos a ${profile.name}` : `Resources attributed to ${profile.name}`}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" data-gsap-stagger>
              {authored.map((page) => (
                <Link key={page.slug} href={`/${page.lang}/${page.slug}`} className="card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-brandTurquoise">{page.eyebrow}</p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-brandNavy">{page.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brandGray">{page.description}</p>
                  <span className="mt-auto pt-5 text-xs font-semibold text-brandBlue">{isSpanish ? "Leer recurso →" : "Read resource →"}</span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="grid gap-5 md:grid-cols-2" data-gsap-stagger>
          <Link href={editorialPath(profile.lang)} className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">{isSpanish ? "Transparencia" : "Transparency"}</p>
            <h2 className="mt-2 text-xl font-semibold text-brandNavy">{isSpanish ? "Cómo JJL publica y actualiza contenido" : "How JJL publishes and updates content"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brandGray">{isSpanish ? "Fuentes, atribución, actualizaciones, correcciones y límites del contenido." : "Sources, attribution, updates, corrections, and content boundaries."}</p>
          </Link>
          <Link href={mediaPath(profile.lang)} className="card p-6 transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brandTurquoise">{isSpanish ? "Prensa" : "Press"}</p>
            <h2 className="mt-2 text-xl font-semibold text-brandNavy">{isSpanish ? "Entrevistas y comentarios profesionales" : "Interviews and professional commentary"}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brandGray">{isSpanish ? "Temas disponibles, recursos citables y contacto de medios." : "Available topics, citable resources, and media contact."}</p>
          </Link>
        </section>
      </div>
    </main>
  );
}
