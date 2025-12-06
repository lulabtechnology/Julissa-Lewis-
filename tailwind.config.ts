import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandNavy: "#0A2540",
        brandBlue: "#2C5282",
        brandLightBlue: "#63B3ED",
        // Gris ahora más oscuro, menos lavado
        brandGray: "#4A5568",
        brandTurquoise: "#238396"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(10, 37, 64, 0.18)"
      },
      borderRadius: {
        "3xl": "1.5rem"
      },
      // Animaciones suaves
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 1s ease-out both",
        "float-slow": "float 12s ease-in-out infinite alternate"
      }
    }
  },
  plugins: []
};

export default config;
