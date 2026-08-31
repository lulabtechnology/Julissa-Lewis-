import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { ResourceHub } from "@/components/ResourceHub";
import {
  getContentPage,
  getContentPages,
  RESOURCE_HUB_META,
  resourceHubSlug
} from "@/lib/phase3-content";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  isLang,
  type Lang
} from "@/lib/seo";

type PageProps = {
  params: { lang: string; slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  const contentParams = getContentPages().map((page) => ({
    lang: page.lang,
    slug: page.slug
  }));

  return [
    ...contentParams,
    { lang: "es", slug: resourceHubSlug("es") },
    { lang: "en", slug: resourceHubSlug("en") }
  ];
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLang(params.lang)) return {};
  const lang = params.lang;
  const hub = RESOURCE_HUB_META[lang];

  if (params.slug === hub.slug) {
    const canonical = `/${lang}/${hub.slug}`;
    return {
      title: hub.seoTitle,
      description: hub.description,
      alternates: {
        canonical,
        languages: {
          "es-PA": `/es/${RESOURCE_HUB_META.es.slug}`,
          en: `/en/${RESOURCE_HUB_META.en.slug}`,
          "x-default": `/es/${RESOURCE_HUB_META.es.slug}`
        }
      },
      openGraph: {
        type: "website",
        url: canonical,
        siteName: SITE_NAME,
        title: hub.seoTitle,
        description: hub.description,
        locale: lang === "es" ? "es_PA" : "en_US",
        alternateLocale: [lang === "es" ? "en_US" : "es_PA"]
      }
    };
  }

  const page = getContentPage(lang, params.slug);
  if (!page) return {};

  const canonical = `/${lang}/${page.slug}`;
  const alternateLang: Lang = lang === "es" ? "en" : "es";
  const alternatePath = `/${alternateLang}/${page.alternateSlug}`;

  return {
    title: page.seoTitle,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        "es-PA": lang === "es" ? canonical : alternatePath,
        en: lang === "en" ? canonical : alternatePath,
        "x-default": lang === "es" ? canonical : alternatePath
      }
    },
    openGraph: {
      type: page.kind === "article" ? "article" : "website",
      url: canonical,
      siteName: SITE_NAME,
      title: page.seoTitle,
      description: page.description,
      locale: lang === "es" ? "es_PA" : "en_US",
      alternateLocale: [lang === "es" ? "en_US" : "es_PA"],
      images: [
        {
          url: page.cluster === "payroll" ? "/images/service-payroll.jpg" : "/images/service-accounting.jpg",
          width: 1024,
          height: 559,
          alt: page.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: [page.cluster === "payroll" ? "/images/service-payroll.jpg" : "/images/service-accounting.jpg"]
    }
  };
}

function contentJsonLd(lang: Lang, slug: string) {
  const page = getContentPage(lang, slug);
  if (!page) return null;

  const url = absoluteUrl(`/${lang}/${page.slug}`);
  const authorId = page.author === "Jissbeth Lewis" ? `${SITE_URL}/#jissbeth-lewis` : `${SITE_URL}/#julissa-lewis`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Organization", "AccountingService"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      areaServed: { "@type": "Country", name: "Panama" }
    },
    {
      "@type": "Person",
      "@id": authorId,
      name: page.author,
      jobTitle:
        page.author === "Jissbeth Lewis"
          ? lang === "es"
            ? "Especialista en Administración y Planilla"
            : "Administration and Payroll Specialist"
          : lang === "es"
            ? "Fundadora y Contadora Principal"
            : "Founder and Principal Accountant",
      worksFor: { "@id": `${SITE_URL}/#organization` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: SITE_NAME,
          item: absoluteUrl(`/${lang}`)
        },
        {
          "@type": "ListItem",
          position: 2,
          name:
            page.kind === "service"
              ? lang === "es"
                ? "Especialidades"
                : "Specialties"
              : lang === "es"
                ? "Recursos"
                : "Resources",
          item:
            page.kind === "service"
              ? absoluteUrl(`/${lang}#especialidades`)
              : absoluteUrl(`/${lang}/${resourceHubSlug(lang)}`)
        },
        {
          "@type": "ListItem",
          position: 3,
          name: page.title,
          item: url
        }
      ]
    }
  ];

  if (page.kind === "service") {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.title,
      description: page.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Panama" },
      url,
      inLanguage: lang === "es" ? "es-PA" : "en"
    });
  } else {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: page.title,
      description: page.description,
      datePublished: page.published,
      dateModified: page.updated,
      author: { "@id": authorId },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: url,
      inLanguage: lang === "es" ? "es-PA" : "en"
    });
  }

  if (page.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function hubJsonLd(lang: Lang) {
  const meta = RESOURCE_HUB_META[lang];
  const url = absoluteUrl(`/${lang}/${meta.slug}`);
  const articles = getContentPages(lang).filter((page) => page.kind === "article");

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: lang === "es" ? "es-PA" : "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: articles.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/${lang}/${page.slug}`),
        name: page.title
      }))
    }
  };
}

export default function KnowledgePage({ params }: PageProps) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const hub = RESOURCE_HUB_META[lang];
  const isHub = params.slug === hub.slug;
  const page = isHub ? undefined : getContentPage(lang, params.slug);
  if (!isHub && !page) notFound();

  const structured = isHub ? hubJsonLd(lang) : contentJsonLd(lang, params.slug);
  const json = JSON.stringify(structured).replace(/</g, "\\u003c");
  const alternateLang: Lang = lang === "es" ? "en" : "es";
  const alternateHref = isHub
    ? `/${alternateLang}/${RESOURCE_HUB_META[alternateLang].slug}`
    : `/${alternateLang}/${page!.alternateSlug}`;

  return (
    <div lang={lang === "es" ? "es-PA" : "en"} className="min-h-screen bg-[#F7FAFC]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
      <Navbar lang={lang} alternateHref={alternateHref} />
      {isHub ? <ResourceHub lang={lang} /> : <ContentPageTemplate page={page!} />}
      <WhatsAppFloat lang={lang} />
      <footer className="border-t border-gray-100 bg-white">
        <div className="section-container flex flex-col items-center justify-between gap-3 py-6 text-xs text-brandGray sm:flex-row">
          <p>© {new Date().getFullYear()} JJL Independent Accounting. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}</p>
          <p>{lang === "es" ? "Diseño web por" : "Web design by"} <a href="https://lulabtech.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brandTurquoise">LuLabTech</a></p>
        </div>
      </footer>
    </div>
  );
}
