"use client";

import { FormEvent } from "react";

type Lang = "es" | "en";

interface ContactSectionProps {
  lang: Lang;
}

const EMAIL_TO = "jjlaccounting@julissalewis.com";

export function ContactSection({ lang }: ContactSectionProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") ?? "");
    const empresa = String(data.get("empresa") ?? "");
    const email = String(data.get("email") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");
    const servicio = String(data.get("servicio") ?? "");
    const mensaje = String(data.get("mensaje") ?? "");

    const subject =
      lang === "es"
        ? "Nueva consulta desde julissalewis.com"
        : "New inquiry from julissalewis.com";

    const body =
      lang === "es"
        ? `Hola Julissa,

Recibiste una nueva consulta desde el sitio web.

Nombre: ${nombre}
Empresa: ${empresa}
Correo: ${email}
WhatsApp: ${whatsapp}
Servicio de interés: ${servicio}

Mensaje:
${mensaje}

-- 
Enviado desde julissalewis.com`
        : `Hi Julissa,

You received a new inquiry from the website.

Name: ${nombre}
Company: ${empresa}
Email: ${email}
WhatsApp: ${whatsapp}
Service of interest: ${servicio}

Message:
${mensaje}

--
Sent from julissalewis.com`;

    const mailto = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abre la app de correo (móvil y desktop)
    window.location.href = mailto;

    // Opcional: limpiar campos después de abrir el correo
    form.reset();
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
              ? "Al enviar, se abrirá tu aplicación de correo con el mensaje listo para enviar."
              : "When you submit, your email app will open with the message ready to send."}
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
              <a href={`mailto:${EMAIL_TO}`} className="underline">
                {EMAIL_TO}
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
                  placeholder={lang === "es" ? "Tu nombre" : "Your full name"}
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
                  placeholder={lang === "es" ? "Nombre de tu empresa" : "Company name"}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  {lang === "es" ? "Correo electrónico" : "Email address"}
                </label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  placeholder={lang === "es" ? "tucorreo@ejemplo.com" : "youremail@example.com"}
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
              <select className="input-field" name="servicio" defaultValue="" required>
                <option value="" disabled>
                  {lang === "es" ? "Selecciona una opción" : "Select an option"}
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
                  {lang === "es" ? "Facturación electrónica" : "Electronic invoicing"}
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
                  {lang === "es" ? "Otro (especificar en el mensaje)" : "Other (specify in the message)"}
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

            <button type="submit" className="btn-primary w-full">
              {lang === "es" ? "Enviar por correo" : "Send via email"}
            </button>

            <p className="text-[11px] text-brandGray pt-1">
              {lang === "es"
                ? "Al presionar, se abrirá tu aplicación de correo con el mensaje listo para enviar."
                : "When you press, your email app will open with the message ready to send."}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
