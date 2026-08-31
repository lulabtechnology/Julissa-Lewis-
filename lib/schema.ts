import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  type Lang
} from "@/lib/seo";

/**
 * Stable entity graph shared across every indexable page.
 * We intentionally avoid fabricating a street address or geo coordinates.
 */
export function organizationSchema(lang: Lang): Record<string, unknown> {
  const isSpanish = lang === "es";

  return {
    "@type": ["Organization", "AccountingService", "ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/brand/jjl-logo.png"),
      contentUrl: absoluteUrl("/brand/jjl-logo.png"),
      caption: SITE_NAME
    },
    image: absoluteUrl("/social/og-default.png"),
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PA"
    },
    areaServed: {
      "@type": "Country",
      name: "Panama"
    },
    availableLanguage: ["Spanish", "English"],
    founder: [
      { "@id": `${SITE_URL}/#julissa-lewis` },
      { "@id": `${SITE_URL}/#jissbeth-lewis` }
    ],
    employee: [
      { "@id": `${SITE_URL}/#julissa-lewis` },
      { "@id": `${SITE_URL}/#jissbeth-lewis` }
    ],
    knowsAbout: isSpanish
      ? [
          "Contabilidad empresarial en Panamá",
          "Empresas SEM en Panamá",
          "Contabilidad para multinacionales",
          "Outsourcing de planilla",
          "SIPE",
          "Caja de Seguro Social",
          "Cumplimiento laboral operativo",
          "Reporting financiero"
        ]
      : [
          "Business accounting in Panama",
          "SEM companies in Panama",
          "Multinational accounting",
          "Payroll outsourcing",
          "SIPE",
          "Caja de Seguro Social",
          "Operational labor compliance",
          "Financial reporting"
        ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE,
      email: CONTACT_EMAIL,
      contactType: "customer service",
      areaServed: "PA",
      availableLanguage: ["Spanish", "English"]
    }
  };
}
