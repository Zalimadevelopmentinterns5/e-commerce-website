/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#000000",
        "on-primary": "#ffffff",
        "primary-container": "#131b2e",
        "on-primary-container": "#7c839b",
        "secondary": "#4648d4",
        "secondary-container": "#6063ee",
        "surface": "#fcf8fa",
        "surface-container": "#f0edef",
        "surface-container-low": "#f6f3f5",
        "surface-container-high": "#eae7e9",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#1b1b1d",
        "on-surface-variant": "#45464d",
        "outline": "#76777d",
        "outline-variant": "#c6c6cd",
        "error": "#ba1a1a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}