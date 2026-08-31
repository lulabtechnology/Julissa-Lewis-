import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JJL Independent Accounting",
    short_name: "JJL Accounting",
    description: "Servicios contables y financieros para empresas en Panamá.",
    start_url: "/es",
    display: "standalone",
    background_color: "#F7FAFC",
    theme_color: "#0A2540",
    lang: "es-PA",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png", purpose: "any" }
    ]
  };
}
