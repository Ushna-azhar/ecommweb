import type { Config } from "tailwindcss";

export default {
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
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards", // Define fadeIn animation
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" }, // Start with opacity 0 (hidden)
          "100%": { opacity: "1" }, // End with opacity 1 (visible)
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode class-based toggling
  plugins: [],
} satisfies Config;
