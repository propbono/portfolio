import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00c6bd",
        secondary: "#111827",
        tertiary: "#f5f5f5",
        "shade-100": "#c4cbe0",
        "shade-300": "#9399ad",
        "shade-500": "#646a7d",
        "shade-800": "#393f50",
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
