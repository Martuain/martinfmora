/*
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],/*
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        paper: "#f8f6f1",
        moss: "#5f6f52",
        clay: "#b86645",
        cobalt: "#2d5f9a",
        line: "rgba(17, 19, 24, 0.12)"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 19, 24, 0.10)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;

*/

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;

