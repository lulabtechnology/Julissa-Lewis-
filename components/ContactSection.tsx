"use client";

import { FormEvent, useMemo, useState } from "react";

type Lang = "es" | "en";

interface ContactSectionProps {
  lang: Lang;
}

type FormState = {
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string;
  estructura: string;
  volumen: string;
  planilla: string;
  especializados: string[];
};

const EMAIL_TO = "jjlaccounting@julissalewis.com";
const TRANSLATION_URL = "https://euridesyoung.com/";
const SUCCESS_ES =
  "Hemos recibido su perfil con éxito. En JJL Independent Accounting creemos en potenciar los negocios en todas sus etapas de crecimiento. Nuestro equipo evaluará la estructura actual de su organización para enviarle una propuesta a la medida en las próximas 24 horas, orientada a optimizar y formalizar sus operaciones financieras. ¡Gracias por confiar en nosotros!";
const SUCCESS_EN =
  "We have successfully received your profile. At JJL Independent Accounting, we believe in empowering businesses at every stage of growth. Our team will evaluate your organization’s current structure to send you a tailored proposal within the next 24 hours, focused on optimizing and formalizing your financial operations. Thank you for trusting us!";

const initialState: FormState = {
  nombre: "",
  empresa: "",
  email: "",
  whatsapp: "",
  estructura: "",
  volumen: "",
  planilla: "",
  especializados: []
};

const content = {
  es: {
    badge: "Cuestionario de perfilamiento",
    title: "Cotice una solución diseñada para la estructura real de su empresa.",
    intro:
      "Complete estos pasos para que el equipo pueda evaluar volumen, planilla, obligaciones y servicios especializados antes de preparar una propuesta a la medida.",
    stepLabel: "Paso",
    next: "Siguiente",
    back: "Atrás",
    submit: "Enviar perfil",
    sending: "Enviando...",
    success: SUCCESS_ES,
    fallback:
      "No se pudo enviar de forma automática. Abriremos su correo con el perfil listo para enviarlo a JJL Independent Accounting.",
    required: "Complete los campos requeridos para continuar.",
    contact: "Datos de contacto",
    structure: "Estructura comercial",
    operation: "Volumen y planilla",
    addons: "Servicios especializados",
    fields: {
      nombre: "Nombre completo",
      empresa: "Empresa",
      email: "Correo corporativo",
      whatsapp: "WhatsApp"
    },
    placeholders: {
      nombre: "Nombre y apellido",
      empresa: "Nombre de la empresa",
      email: "correo@empresa.com",
      whatsapp: "+507..."
    },
    estructuraOptions: [
      "PYME Local / Operación Comercial Tradicional en Panamá.",
      "Sede de Empresa Multinacional (SEM).",
      "Operación Offshore (100% Renta de Fuente Extranjera).",
      "Emprendimiento, Gestión Inicial o Proyecto en fase de formalización."
    ],
    volumenOptions: [
      "Menos de 50 movimientos bancarios o facturas al mes.",
      "Entre 50 y 150 movimientos bancarios o facturas al mes.",
      "Más de 150 movimientos bancarios o facturas al mes."
    ],
    planillaOptions: [
      "No requerimos gestión de nómina (Contratistas independientes).",
      "Sí, planilla de 1 a 5 empleados.",
      "Sí, planilla de 6 a 10 empleados.",
      "Sí, planilla para más de 10 empleados."
    ],
    especializadosOptions: [
      "Gestión de Tesorería (Dispersión y pago directo desde banca corporativa).",
      "Dirección Financiera Externa (Presupuestos, KPIs y Controller Virtual).",
      "Servicios Legales Especializados (Constitución o trámites migratorios).",
      "Traducción Oficial Certificada de Documentos (Sello MIRE).",
      "Otros Servicios Especializados (Consultoría financiera spot, auditoría de procesos o proyectos a la medida)."
    ],
    sideTitle: "Contacto directo",
    sideText:
      "También puede contactarnos por WhatsApp o correo. El cuestionario ayuda a perfilar mejor la propuesta antes de la primera conversación.",
    translationCta: "Ir a servicios de traducción"
  },
  en: {
    badge: "Profiling questionnaire",
    title: "Request a solution designed for your company’s real structure.",
    intro:
      "Complete these steps so the team can evaluate volume, payroll, obligations, and specialized services before preparing a tailored proposal.",
    stepLabel: "Step",
    next: "Next",
    back: "Back",
    submit: "Submit profile",
    sending: "Sending...",
    success: SUCCESS_EN,
    fallback:
      "Automatic delivery could not be completed. We will open your email app with the profile ready to send to JJL Independent Accounting.",
    required: "Please complete the required fields to continue.",
    contact: "Contact information",
    structure: "Commercial structure",
    operation: "Volume and payroll",
    addons: "Specialized services",
    fields: {
      nombre: "Full name",
      empresa: "Company",
      email: "Corporate email",
      whatsapp: "WhatsApp"
    },
    placeholders: {
      nombre: "Full name",
      empresa: "Company name",
      email: "email@company.com",
      whatsapp: "+507..."
    },
    estructuraOptions: [
      "Local SME / Traditional commercial operation in Panama.",
      "Multinational company headquarters (SEM).",
      "Offshore operation (100% foreign-source income).",
      "Startup, initial management, or formalization-stage project."
    ],
    volumenOptions: [
      "Fewer than 50 bank movements or invoices per month.",
      "Between 50 and 150 bank movements or invoices per month.",
      "More than 150 bank movements or invoices per month."
    ],
    planillaOptions: [
      "We do not require payroll management (independent contractors).",
      "Yes, payroll for 1 to 5 employees.",
      "Yes, payroll for 6 to 10 employees.",
      "Yes, payroll for more than 10 employees."
    ],
    especializadosOptions: [
      "Treasury Management (Disbursement and direct payments from corporate banking).",
      "External Financial Direction (Budgets, KPIs, and Virtual Controller).",
      "Specialized Legal Services (Incorporation or immigration procedures).",
      "Certified Official Translation of Documents (MIRE seal).",
      "Other Specialized Services (Spot financial consulting, process audit, or custom projects)."
    ],
    sideTitle: "Direct contact",
    sideText:
      "You may also contact us by WhatsApp or email. The questionnaire helps us profile the proposal before the first conversation.",
    translationCta: "Go to translation services"
  }
} as const;

export function ContactSection({ lang }: ContactSectionProps) {
  const t = content[lang];
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = useMemo(
    () => [t.contact, t.structure, t.operation, t.addons],
    [t.contact, t.structure, t.operation, t.addons]
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  }

  function toggleSpecialized(value: string) {
    setForm((prev) => {
      const exists = prev.especializados.includes(value);
      return {
        ...prev,
        especializados: exists
          ? prev.especializados.filter((item) => item !== value)
          : [...prev.especializados, value]
      };
    });
    setError("");
  }

  function validateStep(currentStep = step) {
    if (currentStep === 0) {
      return Boolean(
        form.nombre.trim() &&
          form.empresa.trim() &&
          form.email.trim() &&
          form.whatsapp.trim()
      );
    }

    if (currentStep === 1) {
      return Boolean(form.estructura);
    }

    if (currentStep === 2) {
      return Boolean(form.volumen && form.planilla);
    }

    return true;
  }

  function goNext() {
    if (!validateStep()) {
      setError(t.required);
      return;
    }
    setStep((current) => Math.min(current + 1, steps.length - 1));
    setError("");
  }

  function buildMailto() {
    const subject =
      lang === "es"
        ? "Nuevo perfil de cliente desde jjlindependentaccounting.com"
        : "New client profile from jjlindependentaccounting.com";

    const body =
      lang === "es"
        ? `Hola equipo JJL Independent Accounting,\n\nSe completó un nuevo perfil desde el sitio web.\n\nDatos de contacto:\nNombre completo: ${form.nombre}\nEmpresa: ${form.empresa}\nCorreo corporativo: ${form.email}\nWhatsApp: ${form.whatsapp}\n\nTipo de estructura comercial:\n${form.estructura}\n\nVolumen transaccional estimado:\n${form.volumen}\n\nPersonal y planilla local en Panamá:\n${form.planilla}\n\nServicios especializados requeridos:\n${form.especializados.length ? form.especializados.map((item) => `- ${item}`).join("\n") : "No especificado"}\n\n--\nEnviado desde jjlindependentaccounting.com`
        : `Hello JJL Independent Accounting team,\n\nA new profile was completed from the website.\n\nContact information:\nFull name: ${form.nombre}\nCompany: ${form.empresa}\nCorporate email: ${form.email}\nWhatsApp: ${form.whatsapp}\n\nCommercial structure type:\n${form.estructura}\n\nEstimated transaction volume:\n${form.volumen}\n\nLocal staff and payroll in Panama:\n${form.planilla}\n\nSpecialized services required:\n${form.especializados.length ? form.especializados.map((item) => `- ${item}`).join("\n") : "Not specified"}\n\n--\nSent from jjlindependentaccounting.com`;

    return `mailto:${EMAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const allValid = [0, 1, 2, 3].every((item) => validateStep(item));
    if (!allValid) {
      setError(t.required);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...form, lang })
      });

      if (!response.ok) {
        throw new Error("Email delivery failed");
      }

      setSuccess(t.success);
      setForm(initialState);
      setStep(0);
    } catch {
      setError(t.fallback);
      window.location.href = buildMailto();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="section-container animate-fade-up grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] items-start">
        <div className="space-y-5">
          <span className="badge-pill">{t.badge}</span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-brandNavy">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-brandGray max-w-xl leading-relaxed">
            {t.intro}
          </p>

          <div className="card p-6 sm:p-7 space-y-4">
            <h3 className="text-base font-semibold text-brandNavy">
              {t.sideTitle}
            </h3>
            <p className="text-sm text-brandGray leading-relaxed">{t.sideText}</p>
            <div className="text-sm text-brandGray space-y-2">
              <p>
                <span className="font-semibold text-brandNavy">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/50767641014"
                  target="_blank"
                  rel="noopener noreferrer"
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

            <a
              href={TRANSLATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              {t.translationCta}
              <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          </div>
        </div>

        <div className="card p-6 sm:p-7">
          <div className="mb-6">
            <div className="flex items-center justify-between gap-3 text-xs text-brandGray mb-3">
              <span>
                {t.stepLabel} {step + 1} / {steps.length}
              </span>
              <span className="font-medium text-brandNavy">{steps[step]}</span>
            </div>
            <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-brandTurquoise transition-all duration-300"
                style={{ width: `${((step + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>

          {success ? (
            <div className="rounded-3xl border border-brandTurquoise/25 bg-brandTurquoise/10 p-5 text-sm text-brandNavy leading-relaxed">
              {success}
            </div>
          ) : null}

          <form className="space-y-5" onSubmit={handleSubmit}>
            {step === 0 ? (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label={t.fields.nombre}
                    value={form.nombre}
                    placeholder={t.placeholders.nombre}
                    onChange={(value) => updateField("nombre", value)}
                    required
                  />
                  <Field
                    label={t.fields.empresa}
                    value={form.empresa}
                    placeholder={t.placeholders.empresa}
                    onChange={(value) => updateField("empresa", value)}
                    required
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    type="email"
                    label={t.fields.email}
                    value={form.email}
                    placeholder={t.placeholders.email}
                    onChange={(value) => updateField("email", value)}
                    required
                  />
                  <Field
                    label={t.fields.whatsapp}
                    value={form.whatsapp}
                    placeholder={t.placeholders.whatsapp}
                    onChange={(value) => updateField("whatsapp", value)}
                    required
                  />
                </div>
              </div>
            ) : null}

            {step === 1 ? (
              <RadioGroup
                name="estructura"
                options={t.estructuraOptions}
                value={form.estructura}
                onChange={(value) => updateField("estructura", value)}
              />
            ) : null}

            {step === 2 ? (
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold text-brandNavy mb-3">
                    {lang === "es" ? "Volumen transaccional estimado" : "Estimated transaction volume"}
                  </h3>
                  <RadioGroup
                    name="volumen"
                    options={t.volumenOptions}
                    value={form.volumen}
                    onChange={(value) => updateField("volumen", value)}
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brandNavy mb-3">
                    {lang === "es" ? "Personal y planilla local en Panamá" : "Local staff and payroll in Panama"}
                  </h3>
                  <RadioGroup
                    name="planilla"
                    options={t.planillaOptions}
                    value={form.planilla}
                    onChange={(value) => updateField("planilla", value)}
                  />
                </div>
              </div>
            ) : null}

            {step === 3 ? (
              <div className="space-y-3">
                {t.especializadosOptions.map((option) => (
                  <label
                    key={option}
                    className="flex gap-3 rounded-2xl border border-gray-200 p-4 text-sm text-brandGray hover:border-brandTurquoise/50 hover:bg-brandTurquoise/5 transition cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 accent-brandTurquoise"
                      checked={form.especializados.includes(option)}
                      onChange={() => toggleSpecialized(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            ) : null}

            {error ? (
              <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.max(current - 1, 0))}
                  className="btn-outline w-full sm:w-auto"
                >
                  {t.back}
                </button>
              ) : null}

              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="btn-primary w-full sm:flex-1"
                >
                  {t.next}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:flex-1 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.sending : t.submit}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  required = false
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-brandGray mb-1">
        {label}
      </label>
      <input
        type={type}
        className="input-field"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}

function RadioGroup({
  name,
  options,
  value,
  onChange
}: {
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option}
          className="flex gap-3 rounded-2xl border border-gray-200 p-4 text-sm text-brandGray hover:border-brandTurquoise/50 hover:bg-brandTurquoise/5 transition cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            className="mt-1 h-4 w-4 accent-brandTurquoise"
            checked={value === option}
            onChange={() => onChange(option)}
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
}
