/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1e2832",
        "light-blue": "#a7b7c7",
        cream: "#f0ebe5",
        white: "#ffffff",
        lightNavy: "#364250",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        serif: ["Georgia", "serif"],
        handwritten: ["Cursive"],
      },
    },
  },
  plugins: [],
};
