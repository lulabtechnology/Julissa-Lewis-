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
        brandGray: "#A0AEC0",
        brandTurquoise: "#238396"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(10, 37, 64, 0.18)"
      },
      borderRadius: {
        "3xl": "1.5rem"
      }
    }
  },
  plugins: []
};

export default config;
