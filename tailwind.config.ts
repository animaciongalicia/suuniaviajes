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
        background: "var(--background)",
        foreground: "var(--foreground)",
        atlantic: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#b9dffd",
          300: "#7cc5fc",
          400: "#36a8f8",
          500: "#0c8de9",
          600: "#0070c7",
          700: "#0059a1",
          800: "#054c85",
          900: "#0a3f6e",
          950: "#072849",
        },
        gold: {
          50: "#fdfaef",
          100: "#faf2d0",
          200: "#f4e29d",
          300: "#edce64",
          400: "#e8bc3e",
          500: "#dfa026",
          600: "#c57d1c",
          700: "#a45c1a",
          800: "#86491c",
          900: "#6f3d1a",
          950: "#3f1e0a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
