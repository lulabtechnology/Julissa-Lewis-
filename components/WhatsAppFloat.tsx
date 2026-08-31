import { SocialIcon } from "@/components/SocialIcon";

type Lang = "es" | "en";

interface WhatsAppFloatProps {
  lang: Lang;
}

export function WhatsAppFloat({ lang }: WhatsAppFloatProps) {
  const message =
    lang === "es"
      ? "Hola, deseo información sobre los servicios de JJL para Multinacionales/SEM o Payroll en Panamá."
      : "Hello, I would like information about JJL services for Multinationals/SEM or Payroll in Panama.";

  return (
    <a
      href={`https://wa.me/50767641014?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp JJL Independent Accounting"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft hover:scale-105 transition-transform"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
        <SocialIcon name="whatsapp" className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
