/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-europe": "url('/src/assets/images/HeroPortugal.jpg')",
        "hero-france": "url('/src/assets/surfcampFrance/Header/12.jpg')",
      },
      backgroundColor: {
        "custom-orange": "#FF9F1C",
        "custom-blue": "#E1F9FC",
      },
      background: {
        "linear-small":
          "linear-gradient(360deg, #212121 0%, rgba(33, 33, 33, 0) 59.81%)",
      },
      boxShadow: {
        hShadow: " 0px 4px 20px 0px #787B9A26",
      },
      color: {
        "custom-orange": "#FF9F1C",
      },
    },
  },
  plugins: [],
};
