"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NotFoundView() {
  const pathname = usePathname();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const isSpanish = lang === "es";

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7FAFC] text-brandNavy">
      <section className="relative min-h-screen">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-brandNavy via-brandTurquoise to-brandBlue" />
        <div className="section-container flex min-h-screen flex-col items-center justify-center py-16 text-center">
          <Link href={`/${lang}`} aria-label="JJL Independent Accounting" className="relative mb-8 h-20 w-[300px] max-w-full">
            <Image src="/brand/jjl-logo.svg" alt="JJL Independent Accounting" fill className="object-contain" priority />
          </Link>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brandTurquoise">Error 404</p>
          <h1 className="mt-4 text-5xl font-semibold sm:text-7xl">{isSpanish ? "Página no encontrada" : "Page not found"}</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-brandGray sm:text-base">
            {isSpanish
              ? "La dirección que buscas no existe o cambió. Puedes volver al inicio, explorar nuestras especialidades o consultar el centro de conocimiento."
              : "The address you requested does not exist or has changed. Return home, explore our specialties, or visit the knowledge center."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href={`/${lang}`} className="btn-primary">{isSpanish ? "Volver al inicio" : "Back home"}</Link>
            <Link href={isSpanish ? "/es/recursos" : "/en/resources"} className="btn-outline">{isSpanish ? "Ver recursos" : "View resources"}</Link>
            <Link href={isSpanish ? "/en" : "/es"} className="btn-outline">{isSpanish ? "English site" : "Sitio en español"}</Link>
          </div>
          <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-2">
            <Link href={isSpanish ? "/es/contabilidad-empresas-sem-panama" : "/en/sem-accounting-services-panama"} className="card p-5 text-left transition hover:-translate-y-1">
              <strong>{isSpanish ? "Multinacionales & SEM" : "Multinationals & SEM"}</strong>
              <p className="mt-2 text-sm text-brandGray">{isSpanish ? "Contabilidad, reporting y soporte financiero en Panamá." : "Accounting, reporting, and financial support in Panama."}</p>
            </Link>
            <Link href={isSpanish ? "/es/outsourcing-planilla-panama" : "/en/payroll-outsourcing-panama"} className="card p-5 text-left transition hover:-translate-y-1">
              <strong>Payroll & SIPE</strong>
              <p className="mt-2 text-sm text-brandGray">{isSpanish ? "Outsourcing de planilla y cumplimiento laboral." : "Payroll outsourcing and labor compliance."}</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
