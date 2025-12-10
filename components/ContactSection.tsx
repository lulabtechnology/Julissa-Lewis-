"use client";

import { FormEvent, useState } from "react";

type Lang = "es" | "en";

interface ContactSectionProps {
  lang: Lang;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 900);
  }

  return (
    <section id="contacto" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="section-container animate-fade-up grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">
            {lang === "es" ? "Formulario de contacto" : "Contact form"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            {lang === "es"
              ? "Cuéntame sobre tu empresa y tus necesidades contables."
              : "Tell me about your company and your accounting needs."}
          </h2>
          <p className="text-sm sm:text-base text-brandGray max-w-xl">
            {lang === "es"
              ? "Completa el formulario y recibirás una respuesta para coordinar una llamada o una reunión virtual donde revisaremos tu caso y definiremos el alcance adecuado."
              : "Fill out the form and you will receive a response to schedule a call or virtual meeting where we will review your case and define the right scope."}
          </p>

          <div className="text-sm text-brandGray space-y-1">
            <p>
              <span className="font-semibold text-brandNavy">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/50767641014"
                target="_blank"
                className="underline"
              >
                +507 6764-1014
              </a>
            </p>
            <p>
              <span className="font-semibold text-brandNavy">
                {lang === "es" ? "Correo:" : "Email:"}
              </span>{" "}
              <a
                href="jjlaccounting@julissalewis.com"
                className="underline"
              >
                jjlaccounting@julissalewis.com
              </a>
            </p>
          </div>
        </div>

        <div className="card p-6 sm:p-7">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  {lang === "es" ? "Nombre completo" : "Full name"}
                </label>
                <input
                  className="input-field"
                  name="nombre"
                  placeholder={
                    lang === "es" ? "Tu nombre" : "Your full name"
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  {lang === "es" ? "Empresa (opcional)" : "Company (optional)"}
                </label>
                <input
                  className="input-field"
                  name="empresa"
                  placeholder={
                    lang === "es" ? "Nombre de tu empresa" : "Company name"
                  }
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  {lang === "es"
                    ? "Correo electrónico"
                    : "Email address"}
                </label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  placeholder={
                    lang === "es"
                      ? "tucorreo@ejemplo.com"
                      : "youremail@example.com"
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  WhatsApp
                </label>
                <input
                  className="input-field"
                  name="whatsapp"
                  placeholder={lang === "es" ? "+507..." : "WhatsApp number"}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-brandGray mb-1">
                {lang === "es" ? "Servicio de interés" : "Service of interest"}
              </label>
              <select
                className="input-field"
                name="servicio"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  {lang === "es"
                    ? "Selecciona una opción"
                    : "Select an option"}
                </option>
                <option>
                  {lang === "es"
                    ? "Contabilidad general / estados financieros"
                    : "General accounting / financial statements"}
                </option>
                <option>
                  {lang === "es"
                    ? "Outsourcing contable en la nube"
                    : "Cloud-based accounting outsourcing"}
                </option>
                <option>
                  {lang === "es"
                    ? "Facturación electrónica"
                    : "Electronic invoicing"}
                </option>
                <option>
                  {lang === "es"
                    ? "Gestión tributaria (ITBMS, Renta)"
                    : "Tax management (ITBMS, income tax)"}
                </option>
                <option>
                  {lang === "es"
                    ? "Planilla, RR.HH. y Anexo 03"
                    : "Payroll, HR and Anexo 03"}
                </option>
                <option>
                  {lang === "es"
                    ? "Consultoría / trámites (RUC, Aviso de Operación)"
                    : "Consulting / procedures (RUC, business license)"}
                </option>
                <option>
                  {lang === "es"
                    ? "Otro (especificar en el mensaje)"
                    : "Other (specify in the message)"}
                </option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-brandGray mb-1">
                {lang === "es" ? "Mensaje" : "Message"}
              </label>
              <textarea
                className="input-field min-h-[120px] resize-none"
                name="mensaje"
                placeholder={
                  lang === "es"
                    ? "Cuéntame brevemente tu situación y lo que necesitas."
                    : "Briefly describe your situation and what you need."
                }
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={sending}
            >
              {sending
                ? lang === "es"
                  ? "Enviando..."
                  : "Sending..."
                : sent
                ? lang === "es"
                  ? "Mensaje enviado ✓"
                  : "Message sent ✓"
                : lang === "es"
                ? "Enviar consulta"
                : "Send inquiry"}
            </button>

            {sent && (
              <p className="text-[11px] text-green-600 pt-1">
                {lang === "es"
                  ? "Gracias por tu mensaje. Este formulario aún no está conectado a un correo, pero puedes copiar el texto y enviarlo directamente a WhatsApp o correo mientras se configura la integración."
                  : "Thank you for your message. This form is not yet connected to an email inbox, but you can copy the text and send it directly via WhatsApp or email while the integration is configured."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
