/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B1220",
        card: "#101B37",
        accent: "#6C63FF",
        glow: "#3B82F6",
      },
      boxShadow: {
        glow: "0 0 30px rgba(59, 130, 246, 0.5)",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
