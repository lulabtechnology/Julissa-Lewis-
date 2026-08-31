import { getContentPages } from "@/lib/phase3-content";
import { SITE_NAME, SITE_URL, isLang } from "@/lib/seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _request: Request,
  { params }: { params: { lang: string } }
) {
  if (!isLang(params.lang)) {
    return new Response("Not found", { status: 404 });
  }

  const lang = params.lang;
  const isSpanish = lang === "es";
  const articles = getContentPages(lang)
    .filter((page) => page.kind === "article")
    .sort((a, b) => b.updated.localeCompare(a.updated));

  const items = articles
    .map((page) => {
      const url = `${SITE_URL}/${lang}/${page.slug}`;
      const date = new Date(`${page.updated}T12:00:00-05:00`).toUTCString();
      return `
    <item>
      <title>${escapeXml(page.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(page.description)}</description>
      <author>${escapeXml(page.author)}</author>
      <pubDate>${date}</pubDate>
    </item>`;
    })
    .join("");

  const feedUrl = `${SITE_URL}/${lang}/feed.xml`;
  const hubUrl = `${SITE_URL}/${lang}/${isSpanish ? "recursos" : "resources"}`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_NAME} — ${isSpanish ? "Recursos" : "Resources"}`)}</title>
    <link>${escapeXml(hubUrl)}</link>
    <description>${escapeXml(isSpanish ? "Guías de JJL sobre contabilidad, SEM, multinacionales, payroll, SIPE y CSS en Panamá." : "JJL guides on accounting, SEM, multinationals, payroll, SIPE, and CSS in Panama.")}</description>
    <language>${isSpanish ? "es-PA" : "en"}</language>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
