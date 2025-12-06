import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7FAFC]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ContactSection />

      <footer className="border-t border-gray-100 bg-white/90">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brandGray">
          <p>
            © {new Date().getFullYear()} Julissa Lewis. Todos los derechos
            reservados.
          </p>
          <p>
            Diseño web por{" "}
            <span className="font-semibold text-brandTurquoise">
              LuLabTech
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}
