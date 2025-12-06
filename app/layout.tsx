import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julissa Lewis | Servicios Contables y Tributarios",
  description:
    "Servicios de contabilidad general, facturación electrónica, gestión tributaria, planilla y RR.HH. en la nube, con más de 10 años de experiencia en empresas multinacionales."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
