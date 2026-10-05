import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          50: "#f0f6fc",
          100: "#dbe8f6",
          200: "#bad5ed",
          300: "#8abbdf",
          400: "#559ccb",
          500: "#3280b5",
          600: "#226698",
          700: "#1d527c",
          800: "#184366",
          900: "#0B2545",
          950: "#07172c",
        },
        nutrition: {
          50: "#f0fdf6",
          100: "#dcfce9",
          200: "#bbf7d2",
          300: "#86efad",
          400: "#4ade7d",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#047857",
          900: "#064E3B",
          950: "#022c22",
        },
        accent: {
          gold: "#D4AF37",
          goldHover: "#C59B27",
          warmBronze: "#B45309",
          mint: "#10B981",
          softTeal: "#0D9488",
        },
        medical: {
          slate: "#0F172A",
          muted: "#475569",
          border: "#E2E8F0",
          lightBg: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 37, 69, 0.08)",
        "card-hover": "0 20px 35px -10px rgba(11, 37, 69, 0.12)",
        "badge-legal": "0 2px 8px rgba(11, 37, 69, 0.2)",
        "badge-nutri": "0 2px 8px rgba(6, 78, 59, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
