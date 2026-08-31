import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SiteFooter } from "@/components/SiteFooter";
import { AuthorityProfileTemplate } from "@/components/AuthorityProfileTemplate";
import { AuthorityInfoTemplate } from "@/components/AuthorityInfoTemplate";
import {
  getAuthorityEntries,
  getAuthorityEntry,
  type AuthorityProfile
} from "@/lib/phase4-authority";
import { getContentPages } from "@/lib/phase3-content";
import { SITE_NAME, SITE_URL, absoluteUrl, isLang, type Lang } from "@/lib/seo";
import { organizationSchema } from "@/lib/schema";

type PageProps = {
  params: { lang: string; slug: string; subslug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAuthorityEntries().map((entry) => ({
    lang: entry.lang,
    slug: entry.section,
    subslug: entry.slug
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLang(params.lang)) return {};
  const entry = getAuthorityEntry(params.lang, params.slug, params.subslug);
  if (!entry) return {};

  const canonical = `/${entry.lang}/${entry.section}/${entry.slug}`;
  const alternateLang: Lang = entry.lang === "es" ? "en" : "es";
  const alternatePath = `/${alternateLang}/${entry.alternateSection}/${entry.alternateSlug}`;
  const socialImage =
    entry.type === "profile"
      ? entry.name === "Julissa Lewis"
        ? "/social/og-julissa.png"
        : "/social/og-jissbeth.png"
      : "/social/og-default.png";

  return {
    title: entry.seoTitle,
    description: entry.description,
    authors: [{ name: entry.type === "profile" ? entry.name : SITE_NAME, url: canonical }],
    creator: entry.type === "profile" ? entry.name : SITE_NAME,
    alternates: {
      canonical,
      languages: {
        "es-PA": entry.lang === "es" ? canonical : alternatePath,
        en: entry.lang === "en" ? canonical : alternatePath,
        "x-default": entry.lang === "es" ? canonical : alternatePath
      },
      types: {
        "application/rss+xml": `/${entry.lang}/feed.xml`
      }
    },
    openGraph: {
      type: entry.type === "profile" ? "profile" : "website",
      url: canonical,
      siteName: SITE_NAME,
      title: entry.seoTitle,
      description: entry.description,
      locale: entry.lang === "es" ? "es_PA" : "en_US",
      alternateLocale: [entry.lang === "es" ? "en_US" : "es_PA"],
      images: [{
        url: socialImage,
        width: 1200,
        height: 630,
        alt: entry.type === "profile" ? `${entry.name} - JJL Independent Accounting` : entry.type === "press" ? "JJL Independent Accounting media center" : "JJL Independent Accounting content standards"
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: entry.seoTitle,
      description: entry.description,
      images: [socialImage]
    }
  };
}

function authorityJsonLd(entry: NonNullable<ReturnType<typeof getAuthorityEntry>>) {
  const url = absoluteUrl(`/${entry.lang}/${entry.section}/${entry.slug}`);
  const graph: Record<string, unknown>[] = [
    organizationSchema(entry.lang),
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: absoluteUrl(`/${entry.lang}`) },
        {
          "@type": "ListItem",
          position: 2,
          name:
            entry.type === "profile"
              ? entry.lang === "es" ? "Equipo" : "Team"
              : entry.type === "press"
                ? entry.lang === "es" ? "Prensa" : "Press"
                : entry.lang === "es" ? "Estándares" : "Standards",
          item:
            entry.type === "profile"
              ? absoluteUrl(`/${entry.lang}#sobre-mi`)
              : absoluteUrl(`/${entry.lang}`)
        },
        {
          "@type": "ListItem",
          position: 3,
          name: entry.type === "profile" ? entry.name : entry.title,
          item: url
        }
      ]
    }
  ];

  if (entry.type === "profile") {
    const profile = entry as AuthorityProfile;
    const personId = `${SITE_URL}/#${profile.name === "Julissa Lewis" ? "julissa-lewis" : "jissbeth-lewis"}`;
    const authored = getContentPages(profile.lang).filter((page) => page.author === profile.name);

    graph.push(
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        jobTitle: profile.role,
        description: profile.description,
        url,
        image: absoluteUrl(profile.image),
        worksFor: { "@id": `${SITE_URL}/#organization` },
        knowsAbout: profile.expertise,
        sameAs: profile.sameAs ?? [],
        subjectOf: authored.map((page) => ({
          "@type": page.kind === "article" ? "Article" : "WebPage",
          url: absoluteUrl(`/${profile.lang}/${page.slug}`),
          name: page.title
        }))
      },
      {
        "@type": "ProfilePage",
        "@id": `${url}#profilepage`,
        url,
        name: profile.seoTitle,
        description: profile.description,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: profile.lang === "es" ? "es-PA" : "en"
      }
    );
  } else {
    graph.push({
      "@type": entry.type === "press" ? "CollectionPage" : "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: entry.title,
      description: entry.description,
      dateModified: entry.updated,
      publisher: { "@id": `${SITE_URL}/#organization` },
      about: { "@id": `${SITE_URL}/#organization` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: entry.lang === "es" ? "es-PA" : "en"
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

export default function AuthorityPage({ params }: PageProps) {
  if (!isLang(params.lang)) notFound();
  const entry = getAuthorityEntry(params.lang, params.slug, params.subslug);
  if (!entry) notFound();

  const alternateLang: Lang = entry.lang === "es" ? "en" : "es";
  const alternateHref = `/${alternateLang}/${entry.alternateSection}/${entry.alternateSlug}`;
  const json = JSON.stringify(authorityJsonLd(entry)).replace(/</g, "\\u003c");

  return (
    <div lang={entry.lang === "es" ? "es-PA" : "en"} className="min-h-screen bg-[#F7FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      <Navbar lang={entry.lang} alternateHref={alternateHref} />
      {entry.type === "profile" ? (
        <AuthorityProfileTemplate profile={entry} />
      ) : (
        <AuthorityInfoTemplate page={entry} />
      )}
      <WhatsAppFloat lang={entry.lang} />
      <SiteFooter lang={entry.lang} />
    </div>
  );
}
