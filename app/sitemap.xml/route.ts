import { SITE_URL } from "@/lib/seo";
import { getContentPages, RESOURCE_HUB_META } from "@/lib/phase3-content";
import { getAuthorityEntries } from "@/lib/phase4-authority";

type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
  alternates: { es: string; en: string; default: string };
};

export const revalidate = 86400;

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getSitemapEntries(): SitemapEntry[] {
  const lastModified = "2026-08-31";
  const entries: SitemapEntry[] = [
    {
      url: `${SITE_URL}/es`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { es: `${SITE_URL}/es`, en: `${SITE_URL}/en`, default: `${SITE_URL}/es` }
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: { es: `${SITE_URL}/es`, en: `${SITE_URL}/en`, default: `${SITE_URL}/es` }
    },
    {
      url: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        es: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
        en: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`,
        default: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`
      }
    },
    {
      url: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        es: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
        en: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`,
        default: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`
      }
    }
  ];

  for (const page of getContentPages()) {
    const esUrl = page.lang === "es" ? `${SITE_URL}/es/${page.slug}` : `${SITE_URL}/es/${page.alternateSlug}`;
    const enUrl = page.lang === "en" ? `${SITE_URL}/en/${page.slug}` : `${SITE_URL}/en/${page.alternateSlug}`;
    entries.push({
      url: `${SITE_URL}/${page.lang}/${page.slug}`,
      lastModified: page.updated,
      changeFrequency: page.kind === "service" ? "weekly" : "monthly",
      priority: page.kind === "service" ? 0.92 : 0.76,
      alternates: { es: esUrl, en: enUrl, default: esUrl }
    });
  }

  for (const entry of getAuthorityEntries()) {
    const alternateLang = entry.lang === "es" ? "en" : "es";
    const canonical = `${SITE_URL}/${entry.lang}/${entry.section}/${entry.slug}`;
    const alternate = `${SITE_URL}/${alternateLang}/${entry.alternateSection}/${entry.alternateSlug}`;
    const esUrl = entry.lang === "es" ? canonical : alternate;
    const enUrl = entry.lang === "en" ? canonical : alternate;
    entries.push({
      url: canonical,
      lastModified: entry.type === "profile" ? lastModified : entry.updated,
      changeFrequency: "monthly",
      priority: entry.type === "profile" ? 0.82 : entry.type === "press" ? 0.74 : 0.68,
      alternates: { es: esUrl, en: enUrl, default: esUrl }
    });
  }

  return entries;
}

export function GET() {
  const rows = getSitemapEntries()
    .map(
      (entry) => `  <url>\n    <loc>${xmlEscape(entry.url)}</loc>\n    <lastmod>${entry.lastModified}</lastmod>\n    <changefreq>${entry.changeFrequency}</changefreq>\n    <priority>${entry.priority.toFixed(2)}</priority>\n    <xhtml:link rel="alternate" hreflang="es-PA" href="${xmlEscape(entry.alternates.es)}" />\n    <xhtml:link rel="alternate" hreflang="en" href="${xmlEscape(entry.alternates.en)}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(entry.alternates.default)}" />\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${rows}\n</urlset>\n`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600"
    }
  });
}
