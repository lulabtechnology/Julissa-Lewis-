"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactSection } from "@/components/ContactSection";
import { IntegrityQuote } from "@/components/IntegrityQuote";

type Lang = "es" | "en";

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar lang={lang} toggleLang={toggleLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <IntegrityQuote lang={lang} />
      <Services lang={lang} />
      <ContactSection lang={lang} />

      <footer className="border-t border-gray-100 bg-white/90">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brandGray">
          <p>
            © {new Date().getFullYear()} Julissa Lewis.{" "}
            {lang === "es"
              ? "Todos los derechos reservados."
              : "All rights reserved."}
          </p>
          <p>
            {lang === "es" ? "Diseño web por" : "Web design by"}{" "}
            <span className="font-semibold text-brandTurquoise">
              LuLabTech
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
