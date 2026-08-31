import Image from "next/image";
import { resourceHubSlug, serviceSlug } from "@/lib/phase3-content";

type Lang = "es" | "en";

interface NavbarProps {
  lang: Lang;
  alternateHref?: string;
}

const TRANSLATION_URL = "https://euridesyoung.com/";

export function Navbar({ lang, alternateHref }: NavbarProps) {
  const labels =
    lang === "es"
      ? {
          sem: "SEM & Multinacionales",
          payroll: "Payroll",
          resources: "Recursos",
          about: "Equipo",
          translation: "Traducciones oficiales",
          cta: "Evaluar mi empresa",
          ctaMobile: "Cotizar"
        }
      : {
          sem: "SEM & Multinationals",
          payroll: "Payroll",
          resources: "Resources",
          about: "Team",
          translation: "Official translations",
          cta: "Evaluate my company",
          ctaMobile: "Quote"
        };

  const alternateLang = lang === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur animate-fade-in">
      <div className="section-container py-3">
        <div className="flex items-center justify-between gap-3">
          <a
            href={`/${lang}`}
            className="flex min-w-0 items-center gap-3"
            aria-label="JJL Independent Accounting"
          >
            <div className="relative h-11 w-32 shrink-0 sm:h-16 sm:w-64">
              <Image
                src="/images/logo-julissa-lewis.png"
                alt="JJL Independent Accounting"
                fill
                className="object-contain"
                sizes="(min-width: 640px) 256px, 128px"
                priority
              />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.18em] text-brandGray">
                Accounting • Payroll • SEM
              </span>
              <span className="text-sm font-semibold text-brandNavy">Julissa Lewis, CPA</span>
            </div>
          </a>

          <nav
            className="hidden xl:flex items-center gap-5 text-sm"
            aria-label={lang === "es" ? "Navegación principal" : "Main navigation"}
          >
            <a href={`/${lang}/${serviceSlug(lang, "sem")}`} className="text-brandNavy/80 transition-colors hover:text-brandNavy">
              {labels.sem}
            </a>
            <a href={`/${lang}/${serviceSlug(lang, "payroll")}`} className="text-brandNavy/80 transition-colors hover:text-brandNavy">
              {labels.payroll}
            </a>
            <a href={`/${lang}/${resourceHubSlug(lang)}`} className="text-brandNavy/80 transition-colors hover:text-brandNavy">
              {labels.resources}
            </a>
            <a href={`/${lang}#sobre-mi`} className="text-brandNavy/80 transition-colors hover:text-brandNavy">
              {labels.about}
            </a>
            <a
              href={TRANSLATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brandTurquoise transition-colors hover:text-brandBlue"
            >
              {labels.translation}
              <span aria-hidden="true">↗</span>
            </a>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={alternateHref ?? `/${alternateLang}`}
              hrefLang={alternateLang}
              className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-brandNavy/20 bg-white text-xs font-bold text-brandNavy shadow-sm transition hover:bg-brandNavy hover:text-white"
              aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
            >
              {lang === "es" ? "EN" : "ES"}
            </a>

            <a href={`/${lang}#contacto`} className="btn-primary h-10 px-3 text-xs sm:px-4 sm:text-sm">
              <span className="hidden sm:inline">{labels.cta}</span>
              <span className="sm:hidden">{labels.ctaMobile}</span>
            </a>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 xl:hidden">
          <a href={`/${lang}/${serviceSlug(lang, "sem")}`} className="rounded-full border border-brandNavy/10 bg-[#F7FAFC] px-3 py-2 text-center text-[11px] font-semibold text-brandNavy">
            SEM
          </a>
          <a href={`/${lang}/${serviceSlug(lang, "payroll")}`} className="rounded-full border border-brandNavy/10 bg-[#F7FAFC] px-3 py-2 text-center text-[11px] font-semibold text-brandNavy">
            Payroll
          </a>
          <a href={`/${lang}/${resourceHubSlug(lang)}`} className="rounded-full border border-brandNavy/10 bg-[#F7FAFC] px-3 py-2 text-center text-[11px] font-semibold text-brandNavy">
            {labels.resources}
          </a>
        </div>
      </div>
    </header>
  );
}
