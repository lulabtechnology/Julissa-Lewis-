type Lang = "es" | "en";

interface IntegrityQuoteProps {
  lang: Lang;
}

export function IntegrityQuote({ lang }: IntegrityQuoteProps) {
  const heading =
    lang === "es" ? "Filosofía profesional" : "Professional philosophy";

  const text =
    lang === "es"
      ? "La integridad es la base del éxito, la sabiduría es su hija y la humildad es la madre de todas las virtudes, ya que requiere coraje para vivir según principios correctos, incluso cuando nadie mira. Quien busca el éxito sin integridad, fracasará; quien lo alcanza con integridad y humildad, construye un legado perdurable."
      : "Integrity is the foundation of success, wisdom is its daughter, and humility is the mother of all virtues, as it takes courage to live according to the right principles even when no one is watching. Those who seek success without integrity will fail; those who achieve it with integrity and humility build an enduring legacy.";

  return (
    <section className="py-14 sm:py-16 bg-gradient-to-r from-brandNavy via-[#111827] to-brandBlue text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/20 bg-white/5 px-6 sm:px-10 py-8 sm:py-10 shadow-soft backdrop-blur animate-fade-in">
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-brandLightBlue/80 text-center">
            {heading}
          </p>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/90 text-center">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
