"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";

type Lang = "es" | "en";

const rates = [
  { rate: 0.1325, es: "Hasta febrero 2027", en: "Through February 2027" },
  { rate: 0.1425, es: "Desde marzo 2027", en: "From March 2027" },
  { rate: 0.1525, es: "Desde marzo 2029", en: "From March 2029" }
] as const;

function money(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "es" ? "es-PA" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(value);
}

export function PayrollCssCalculator({ lang }: { lang: Lang }) {
  const [salary, setSalary] = useState("1500");
  const parsed = Number.parseFloat(salary.replace(",", "."));
  const base = Number.isFinite(parsed) && parsed > 0 ? parsed : 0;

  const results = useMemo(
    () => rates.map((item) => ({ ...item, amount: base * item.rate })),
    [base]
  );

  const t =
    lang === "es"
      ? {
          badge: "Herramienta interactiva",
          title: "Calculadora básica de cuota patronal CSS",
          intro:
            "Ingrese un salario mensual para visualizar la cuota patronal de seguridad social bajo las tasas escalonadas publicadas por la CSS.",
          label: "Salario mensual",
          current: "Tasa vigente en agosto de 2026",
          disclaimer:
            "Estimación informativa. Calcula únicamente la cuota patronal CSS y no el costo laboral total. No incluye otros aportes, seguros, provisiones, impuestos o beneficios."
        }
      : {
          badge: "Interactive tool",
          title: "Basic employer CSS contribution calculator",
          intro:
            "Enter a monthly salary to visualize the employer Social Security contribution under the staged rates published by CSS.",
          label: "Monthly salary",
          current: "Rate in effect in August 2026",
          disclaimer:
            "Informational estimate. It calculates only the employer CSS contribution, not total employment cost. It excludes other contributions, insurance, provisions, taxes, and benefits."
        };

  return (
    <section
      className="relative overflow-hidden rounded-[2rem] border border-brandLightBlue/30 bg-brandNavy p-6 text-white shadow-soft sm:p-8"
      data-gsap-reveal
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brandTurquoise/25 blur-3xl" />
      <div className="relative">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brandLightBlue">
          {t.badge}
        </span>
        <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">{t.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">{t.intro}</p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <label className="block rounded-3xl border border-white/10 bg-white/5 p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              {t.label}
            </span>
            <div className="mt-3 flex items-center rounded-2xl bg-white px-4 py-3 text-brandNavy">
              <span className="mr-2 text-sm font-semibold">$</span>
              <input
                value={salary}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSalary(event.target.value)}
                inputMode="decimal"
                aria-label={t.label}
                className="w-full bg-transparent text-2xl font-semibold outline-none"
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-white/60">{t.current}: 13.25%</p>
          </label>

          <div className="grid gap-3 sm:grid-cols-3" data-gsap-stagger>
            {results.map((item, index) => (
              <article
                key={item.rate}
                className={`rounded-3xl border p-5 ${
                  index === 0
                    ? "border-brandLightBlue/50 bg-brandLightBlue/20"
                    : "border-white/10 bg-white/5"
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                  {lang === "es" ? item.es : item.en}
                </p>
                <p className="mt-3 text-2xl font-semibold">{(item.rate * 100).toFixed(2)}%</p>
                <p className="mt-1 text-sm text-brandLightBlue">{money(item.amount, lang)}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-white/50">{t.disclaimer}</p>
      </div>
    </section>
  );
}
