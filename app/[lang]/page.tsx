import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PriorityServices } from "@/components/PriorityServices";
import { Services } from "@/components/Services";
import { IntegrityQuote } from "@/components/IntegrityQuote";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { FeaturedResources } from "@/components/FeaturedResources";
import { SiteFooter } from "@/components/SiteFooter";
import { LazyContactSection } from "@/components/LazyContactSection";
import { profilePath } from "@/lib/phase4-authority";
import { serviceSlug } from "@/lib/phase3-content";
import { organizationSchema } from "@/lib/schema";
import {
  LINKEDIN_URL,
  SEO,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  isLang,
  localizedPath,
  type Lang
} from "@/lib/seo";

type PageProps = {
  params: { lang: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (!isLang(params.lang)) return {};

  const lang = params.lang;
  const seo = SEO[lang];
  const canonical = localizedPath(lang);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        "es-PA": "/es",
        "en": "/en",
        "x-default": "/es"
      },
      types: {
        "application/rss+xml": `/${lang}/feed.xml`
      }
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      locale: seo.ogLocale,
      alternateLocale: [seo.ogLocaleAlternate],
      images: [
        {
          url: "/social/og-default.png",
          width: 1200,
          height: 630,
          alt:
            lang === "es"
              ? "JJL Independent Accounting - servicios contables en Panamá"
              : "JJL Independent Accounting - accounting services in Panama"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/social/og-default.png"]
    }
  };
}

function jsonLd(lang: Lang) {
  const pageUrl = absoluteUrl(localizedPath(lang));
  const isSpanish = lang === "es";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...organizationSchema(lang),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: isSpanish ? "Servicios de JJL" : "JJL services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                "@id": `${SITE_URL}/#multinational-sem-accounting`,
                name: isSpanish
                  ? "Contabilidad y soporte financiero para multinacionales y empresas SEM"
                  : "Accounting and financial support for multinationals and SEM companies",
                areaServed: "Panama"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@id": `${SITE_URL}/#payroll-outsourcing`,
                "@type": "Service",
                name: isSpanish
                  ? "Outsourcing de planilla, SIPE y cumplimiento laboral"
                  : "Payroll outsourcing, SIPE and labor compliance",
                areaServed: "Panama"
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: isSpanish
                  ? "Dirección financiera y controller virtual"
                  : "Financial direction and virtual controller",
                areaServed: "Panama"
              }
            }
          ]
        }
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#multinational-sem-accounting`,
        name: isSpanish
          ? "Contabilidad y soporte financiero para multinacionales y empresas SEM en Panamá"
          : "Accounting and financial support for multinationals and SEM companies in Panama",
        serviceType: isSpanish
          ? "Contabilidad para multinacionales y empresas SEM"
          : "Multinational and SEM accounting",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Panama" },
        url: absoluteUrl(`/${lang}/${serviceSlug(lang, "sem")}`)
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#payroll-outsourcing`,
        name: isSpanish
          ? "Outsourcing de planilla, SIPE y cumplimiento laboral en Panamá"
          : "Payroll outsourcing, SIPE and labor compliance in Panama",
        serviceType: isSpanish
          ? "Outsourcing de planilla y cumplimiento laboral"
          : "Payroll outsourcing and labor compliance",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "Panama" },
        url: absoluteUrl(`/${lang}/${serviceSlug(lang, "payroll")}`)
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#julissa-lewis`,
        name: "Julissa Lewis",
        jobTitle: isSpanish
          ? "Fundadora y Contadora Principal"
          : "Founder and Principal Accountant",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: absoluteUrl(profilePath(lang, "Julissa Lewis")),
        image: absoluteUrl("/images/julissa-lewis-new.jpg"),
        sameAs: [LINKEDIN_URL],
        knowsAbout: [
          "Accounting",
          "Financial management",
          "Management control",
          "DGI compliance",
          "Digital accounting"
        ]
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#jissbeth-lewis`,
        name: "Jissbeth Lewis",
        jobTitle: isSpanish
          ? "Co-Fundadora y Especialista en Administración y Planilla"
          : "Co-Founder and Administration and Payroll Specialist",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        url: absoluteUrl(profilePath(lang, "Jissbeth Lewis")),
        image: absoluteUrl("/images/jissbeth-lewis-payroll.jpg"),
        knowsAbout: [
          "Payroll processing",
          "SIPE",
          "Caja de Seguro Social",
          "Labor compliance in Panama",
          "Human capital administration"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["es-PA", "en"]
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: SEO[lang].title,
        description: SEO[lang].description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        mainEntity: [
          { "@id": `${SITE_URL}/#multinational-sem-accounting` },
          { "@id": `${SITE_URL}/#payroll-outsourcing` }
        ],
        inLanguage: isSpanish ? "es-PA" : "en"
      }
    ]
  };
}

export default function LocalizedHomePage({ params }: PageProps) {
  if (!isLang(params.lang)) notFound();
  const lang = params.lang;
  const structuredData = JSON.stringify(jsonLd(lang)).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
      <main lang={lang === "es" ? "es-PA" : "en"} className="min-h-screen flex flex-col bg-[#F7FAFC]">
        <Navbar lang={lang} />
        <Hero lang={lang} />
        <PriorityServices lang={lang} />
        <About lang={lang} />
        <IntegrityQuote lang={lang} />
        <Services lang={lang} />
        <FeaturedResources lang={lang} />
        <LazyContactSection lang={lang} />
        <WhatsAppFloat lang={lang} />

        <SiteFooter lang={lang} />
      </main>
    </>
  );
}
