export const SITE_URL = "https://jjlindependentaccounting.com";
export const SITE_NAME = "JJL Independent Accounting";
export const LEGACY_DOMAIN = "julissalewis.com";
export const CONTACT_EMAIL = "jjlaccounting@julissalewis.com";
export const CONTACT_PHONE = "+50767641014";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/julissa-lewis-cpa-5a530b138";

export type Lang = "es" | "en";

export const SUPPORTED_LANGS: Lang[] = ["es", "en"];

export function isLang(value: string): value is Lang {
  return SUPPORTED_LANGS.includes(value as Lang);
}

export const SEO = {
  es: {
    title: "Contabilidad para Multinacionales, SEM y Payroll en Panamá | JJL",
    description:
      "Contabilidad para multinacionales y empresas SEM, outsourcing de planilla, SIPE y cumplimiento laboral en Panamá con JJL Independent Accounting.",
    ogLocale: "es_PA",
    ogLocaleAlternate: "en_US"
  },
  en: {
    title: "Multinational Accounting & Payroll Services in Panama | JJL",
    description:
      "Accounting for multinationals and SEM companies in Panama, plus payroll outsourcing, SIPE and labor-compliance support from JJL Independent Accounting.",
    ogLocale: "en_US",
    ogLocaleAlternate: "es_PA"
  }
} as const;

export function localizedPath(lang: Lang) {
  return `/${lang}`;
}

export function absoluteUrl(path = "") {
  return `${SITE_URL}${path}`;
}
