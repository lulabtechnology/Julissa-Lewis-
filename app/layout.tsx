import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julissa Lewis | Estrategia Financiera con Visión Global",
  description:
    "Servicios contables, tributarios y de transformación digital financiera con QuickBooks, Alegra y más de 15 años de experiencia corporativa."
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
