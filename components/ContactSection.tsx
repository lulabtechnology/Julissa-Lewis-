"use client";

import { FormEvent, useState } from "react";

export function ContactSection() {
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
    <section
      id="contacto"
      className="section-container py-14 sm:py-16 lg:py-20 animate-fade-up"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">Formulario de contacto</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            Cuéntame sobre tu empresa y tus necesidades contables.
          </h2>
          <p className="text-sm sm:text-base text-brandGray max-w-xl">
            Completa el formulario y recibirás una respuesta para coordinar una
            llamada o una reunión virtual donde revisaremos tu caso y definiremos
            el alcance adecuado.
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
              <span className="font-semibold text-brandNavy">Correo:</span>{" "}
              <a
                href="mailto:JJLCPA.financialserv@gmail.com"
                className="underline"
              >
                JJLCPA.financialserv@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="card p-6 sm:p-7">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  Nombre completo
                </label>
                <input
                  className="input-field"
                  name="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  Empresa (opcional)
                </label>
                <input
                  className="input-field"
                  name="empresa"
                  placeholder="Nombre de tu empresa"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-brandGray mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
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
                  placeholder="+507..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-brandGray mb-1">
                Servicio de interés
              </label>
              <select
                className="input-field"
                name="servicio"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Contabilidad general / estados financieros</option>
                <option>Outsourcing contable en la nube</option>
                <option>Facturación electrónica</option>
                <option>Gestión tributaria (ITBMS, Renta)</option>
                <option>Planilla y RR.HH.</option>
                <option>Consultoría / trámites (RUC, Aviso de Operación)</option>
                <option>Otro (especificar en el mensaje)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-brandGray mb-1">
                Mensaje
              </label>
              <textarea
                className="input-field min-h-[120px] resize-none"
                name="mensaje"
                placeholder="Cuéntame brevemente tu situación y lo que necesitas."
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={sending}
            >
              {sending
                ? "Enviando..."
                : sent
                ? "Mensaje enviado ✓"
                : "Enviar consulta"}
            </button>

            {sent && (
              <p className="text-[11px] text-green-600 pt-1">
                Gracias por tu mensaje. Este formulario aún no está conectado a
                un correo, pero puedes copiar el texto y enviarlo directamente a
                WhatsApp o correo mientras se configura la integración.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
