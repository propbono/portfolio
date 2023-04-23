import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shade-100": "#c4cbe0",
        "shade-300": "#9399ad",
        "shade-500": "#646a7d",
        "shade-800": "#393f50",
        "primary-accent": "#00c6bd",
        "primary-dark": "#111827",
        "primary-light": "#f5f5f5",
        "secondary-accent": "#00425b",
        "secondary-dark": "#393f50",
        "secondary-light": "#c4cbe0",
        "tertiary-accent": "#007380",
      },
    },
    fontFamily: {
      logo: ["Righteous", "cursive"],
      body: ["Ubuntu", "sans-serif"],
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
