import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-31T00:00:00-05:00");

  return [
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
      priority: 0.9,
      alternates: {
        languages: {
          "es-PA": `${SITE_URL}/es`,
          en: `${SITE_URL}/en`
        }
      }
    }
  ];
}
