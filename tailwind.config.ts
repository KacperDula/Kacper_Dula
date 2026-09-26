import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "#0c0c0f",
        surface: "#17171c",
        accent: "#c5f06b",
        "accent-2": "#9d9bff",
        text: "#e8e8ec",
        muted: "#9d9daa"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        soft: "0 1px 0 rgba(255,255,255,0.04) inset, 0 12px 40px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(197,240,107,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(197,240,107,0.05) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
