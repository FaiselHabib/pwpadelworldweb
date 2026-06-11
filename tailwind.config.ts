import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          "green-dark": "#15803d",
          "green-light": "#22c55e",
          black: "#0a0a0a",
          gold: "#c9a227",
          "gold-light": "#e3c75a",
        },
      },
      fontFamily: {
        sans: ["var(--font-latin)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "var(--font-latin)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
