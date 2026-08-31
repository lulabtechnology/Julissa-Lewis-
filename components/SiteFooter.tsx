import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { editorialPath, mediaPath, methodologyPath } from "@/lib/phase4-authority";

export function SiteFooter({ lang }: { lang: Lang }) {
  const isSpanish = lang === "es";

  return (
    <footer className="border-t border-gray-100 bg-white/95">
      <div className="section-container py-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-xs text-brandGray">
            <p>
              © {new Date().getFullYear()} JJL Independent Accounting. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}
            </p>
            <p className="mt-1">
              {isSpanish ? "Diseño web por" : "Web design by"}{" "}
              <a
                href="https://lulabtech.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brandTurquoise"
              >
                LuLabTech
              </a>
            </p>
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
