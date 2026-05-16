import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JJL Independent Accounting | Servicios contables digitales en Panamá",
  description:
    "Servicios contables digitales, gestión financiera estratégica, nómina, cumplimiento fiscal, SEM, operaciones de fuente extranjera y dirección financiera externa en Panamá."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
