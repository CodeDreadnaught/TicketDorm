/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoSerif: ["Roboto Serif", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryPurple: "var(--primary-purple)",
        inputGray: "var(--input-gray)",
      },
      backgroundImage: {
        "eventHero": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./src/assets/event-hero-bg.jpg)",
        "aboutHero": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(./src/assets/about-us-images/hero-bg.jpg)",
      },
    },
  },
  plugins: [],
}