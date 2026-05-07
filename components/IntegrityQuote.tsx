type Lang = "es" | "en";

interface IntegrityQuoteProps {
  lang: Lang;
}

const content = {
  es: {
    heading: "Filosofía profesional",
    text:
      "La integridad es la base del éxito, la sabiduría es su hija y la humildad es la madre de todas las virtudes... Quien alcanza el éxito con integridad y humildad, construye un legado perdurable. Agradezco a Dios por cada paso en este camino, por permitirme servir con mis talentos y por la oportunidad de edificar este propósito con Su guía."
  },
  en: {
    heading: "Professional philosophy",
    text:
      "Integrity is the foundation of success, wisdom is its daughter, and humility is the mother of all virtues... Those who achieve success with integrity and humility build an enduring legacy. I thank God for every step on this journey, for allowing me to serve through my talents, and for the opportunity to build this purpose under His guidance."
  }
} as const;

export function IntegrityQuote({ lang }: IntegrityQuoteProps) {
  const t = content[lang];

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-brandNavy via-[#111827] to-brandBlue text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/20 bg-white/5 px-6 sm:px-10 py-8 sm:py-10 shadow-soft backdrop-blur animate-fade-in">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-brandLightBlue/80 text-center">
            {t.heading}
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 text-center">
            {t.text}
          </p>
        </div>
      </div>
    </section>
  );
}
