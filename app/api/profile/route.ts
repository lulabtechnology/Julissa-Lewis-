import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ProfilePayload = {
  lang?: "es" | "en";
  nombre?: string;
  empresa?: string;
  email?: string;
  whatsapp?: string;
  estructura?: string;
  volumen?: string;
  planilla?: string;
  especializados?: string[];
};

type EmailPayload = {
  lang: "es" | "en";
  nombre: string;
  empresa: string;
  email: string;
  whatsapp: string;
  estructura: string;
  volumen: string;
  planilla: string;
  especializados: string[];
};

const MAIL_TO = process.env.JJL_MAIL_TO || "jjlaccounting@julissalewis.com";

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function renderList(items: string[] = []) {
  if (!items.length) {
    return "No especificado";
  }

  return items.map((item) => `- ${clean(item)}`).join("\n");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderHtml(payload: EmailPayload) {
  const rows: [string, string][] = [
    ["Nombre completo", payload.nombre],
    ["Empresa", payload.empresa],
    ["Correo corporativo", payload.email],
    ["WhatsApp", payload.whatsapp],
    ["Tipo de estructura comercial", payload.estructura],
    ["Volumen transaccional estimado", payload.volumen],
    ["Personal y planilla local en Panamá", payload.planilla],
    ["Servicios especializados requeridos", renderList(payload.especializados)]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0A2540; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">Nuevo perfil de cliente desde julissalewis.com</h2>
      <p>Se completó un nuevo cuestionario de perfilamiento para JJL Independent Accounting.</p>
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border: 1px solid #E2E8F0; padding: 10px; font-weight: bold; width: 34%; background: #F7FAFC;">${escapeHtml(label)}</td>
                <td style="border: 1px solid #E2E8F0; padding: 10px; white-space: pre-line;">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <p style="font-size: 12px; color: #4A5568; margin-top: 20px;">Enviado automáticamente desde el sitio web.</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ProfilePayload;

    const requiredPayload: EmailPayload = {
      lang: payload.lang === "en" ? "en" : "es",
      nombre: clean(payload.nombre),
      empresa: clean(payload.empresa),
      email: clean(payload.email),
      whatsapp: clean(payload.whatsapp),
      estructura: clean(payload.estructura),
      volumen: clean(payload.volumen),
      planilla: clean(payload.planilla),
      especializados: Array.isArray(payload.especializados)
        ? payload.especializados.map(clean).filter(Boolean)
        : []
    };

    if (
      !requiredPayload.nombre ||
      !requiredPayload.empresa ||
      !requiredPayload.email ||
      !requiredPayload.whatsapp ||
      !requiredPayload.estructura ||
      !requiredPayload.volumen ||
      !requiredPayload.planilla
    ) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || MAIL_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      return NextResponse.json(
        { ok: false, message: "SMTP is not configured" },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true" || smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const text = `Nuevo perfil de cliente desde julissalewis.com\n\nDatos de contacto:\nNombre completo: ${requiredPayload.nombre}\nEmpresa: ${requiredPayload.empresa}\nCorreo corporativo: ${requiredPayload.email}\nWhatsApp: ${requiredPayload.whatsapp}\n\nTipo de estructura comercial:\n${requiredPayload.estructura}\n\nVolumen transaccional estimado:\n${requiredPayload.volumen}\n\nPersonal y planilla local en Panamá:\n${requiredPayload.planilla}\n\nServicios especializados requeridos:\n${renderList(requiredPayload.especializados)}\n\n--\nEnviado automáticamente desde julissalewis.com`;

    await transporter.sendMail({
      from: smtpFrom,
      to: MAIL_TO,
      replyTo: requiredPayload.email,
      subject: "Nuevo perfil de cliente desde julissalewis.com",
      text,
      html: renderHtml(requiredPayload)
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to process request" },
      { status: 500 }
    );
  }
}
