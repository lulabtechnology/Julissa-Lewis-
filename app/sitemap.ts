import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getContentPages, RESOURCE_HUB_META } from "@/lib/phase3-content";
import { getAuthorityEntries } from "@/lib/phase4-authority";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-31T00:00:00-05:00");

  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/es`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          "es-PA": `${SITE_URL}/es`,
          en: `${SITE_URL}/en`
        }
      }
    },
    {
      url: `${SITE_URL}/en`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
      alternates: {
        languages: {
          "es-PA": `${SITE_URL}/es`,
          en: `${SITE_URL}/en`
        }
      }
    }
  ];

  const hubs: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          "es-PA": `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
          en: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`
        }
      }
    },
    {
      url: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      alternates: {
        languages: {
          "es-PA": `${SITE_URL}/es/${RESOURCE_HUB_META.es.slug}`,
          en: `${SITE_URL}/en/${RESOURCE_HUB_META.en.slug}`
        }
      }
    }
  ];

  const content = getContentPages().map((page) => {
    const esUrl =
      page.lang === "es"
        ? `${SITE_URL}/es/${page.slug}`
        : `${SITE_URL}/es/${page.alternateSlug}`;
    const enUrl =
      page.lang === "en"
        ? `${SITE_URL}/en/${page.slug}`
        : `${SITE_URL}/en/${page.alternateSlug}`;

    return {
      url: `${SITE_URL}/${page.lang}/${page.slug}`,
      lastModified: new Date(`${page.updated}T00:00:00-05:00`),
      changeFrequency: page.kind === "service" ? "weekly" : "monthly",
      priority: page.kind === "service" ? 0.92 : 0.76,
      alternates: {
        languages: {
          "es-PA": esUrl,
          en: enUrl
        }
      }
    } satisfies MetadataRoute.Sitemap[number];
  });

  const authority = getAuthorityEntries().map((entry) => {
    const alternateLang = entry.lang === "es" ? "en" : "es";
    const canonical = `${SITE_URL}/${entry.lang}/${entry.section}/${entry.slug}`;
    const alternate = `${SITE_URL}/${alternateLang}/${entry.alternateSection}/${entry.alternateSlug}`;

    return {
      url: canonical,
      lastModified: entry.type === "profile" ? lastModified : new Date(`${entry.updated}T00:00:00-05:00`),
      changeFrequency: entry.type === "profile" ? "monthly" : "monthly",
      priority: entry.type === "profile" ? 0.82 : entry.type === "press" ? 0.74 : 0.68,
      alternates: {
        languages: {
          "es-PA": entry.lang === "es" ? canonical : alternate,
          en: entry.lang === "en" ? canonical : alternate
        }
      }
    } satisfies MetadataRoute.Sitemap[number];
  });

  return [...home, ...hubs, ...content, ...authority];
}
