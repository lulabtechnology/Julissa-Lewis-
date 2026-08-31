import Link from "next/link";
import Image from "next/image";
import type { Lang } from "@/lib/seo";
import { editorialPath, mediaPath, methodologyPath, sourcesPath } from "@/lib/phase4-authority";
import { resourceHubSlug, serviceSlug } from "@/lib/phase3-content";
import { LINKEDIN_URL } from "@/lib/seo";
import { SocialIcon } from "@/components/SocialIcon";

export function SiteFooter({ lang }: { lang: Lang }) {
  const isSpanish = lang === "es";

  return (
    <footer className="border-t border-gray-100 bg-white/95">
      <div className="section-container py-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-xs text-brandGray">
            <div className="relative h-12 w-12 shrink-0"><Image src="/brand/jjl-mark.svg" alt="" fill className="object-contain" /></div>
            <div>
            <p>
              © {new Date().getFullYear()} JJL Independent Accounting. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <p className="mt-1">
              {isSpanish ? "Diseñado por" : "Designed by"}{" "}
              <a
                href="https://lulabtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brandTurquoise hover:text-brandBlue"
              >
                Lulab Technology
              </a>
            </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-brandNavy/75" aria-label={isSpanish ? "Confianza y transparencia" : "Trust and transparency"}>
            <Link href={editorialPath(lang)} className="hover:text-brandTurquoise">
              {isSpanish ? "Política editorial" : "Editorial policy"}
            </Link>
            <Link href={methodologyPath(lang)} className="hover:text-brandTurquoise">
              {isSpanish ? "Metodología" : "Methodology"}
            </Link>
            <Link href={mediaPath(lang)} className="hover:text-brandTurquoise">
              {isSpanish ? "Prensa" : "Press"}
            </Link>
            <Link href={sourcesPath(lang)} className="hover:text-brandTurquoise">
              {isSpanish ? "Fuentes" : "Sources"}
            </Link>
            <Link href={`/${lang}/${resourceHubSlug(lang)}`} className="hover:text-brandTurquoise">
              {isSpanish ? "Recursos" : "Resources"}
            </Link>
            <Link href={`/${lang}/${serviceSlug(lang, "sem")}`} className="hover:text-brandTurquoise">SEM</Link>
            <Link href={`/${lang}/${serviceSlug(lang, "payroll")}`} className="hover:text-brandTurquoise">Payroll</Link>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Julissa Lewis" className="inline-flex items-center gap-1 hover:text-brandTurquoise">
              <SocialIcon name="linkedin" className="h-4 w-4" /> LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
