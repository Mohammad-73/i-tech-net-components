/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-portugal": "url('/src/assets/images/HeroPortugal.jpg')",
      },
      backgroundColor: {
        "custom-orange": "#FF9F1C",
        "custom-blue": "#E1F9FC",
      },
    },
  },
  plugins: [],
};
