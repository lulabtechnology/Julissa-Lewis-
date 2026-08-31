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
    title: "JJL Independent Accounting | Servicios contables digitales en Panamá",
    description:
      "Servicios contables digitales, gestión financiera estratégica, nómina, cumplimiento fiscal y soporte para empresas locales, multinacionales y operaciones de fuente extranjera en Panamá.",
    ogLocale: "es_PA",
    ogLocaleAlternate: "en_US"
  },
  en: {
    title: "JJL Independent Accounting | Accounting Services in Panama",
    description:
      "Digital accounting, strategic financial management, payroll and tax compliance support for local companies, multinational operations and foreign-source structures in Panama.",
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
