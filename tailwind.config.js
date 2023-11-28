/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      headings: ["Horizon"],
      main: ["FamiljenGrotesk"],
    },
    extend: {
      colors: {
        cOrange: {
          100: "#FFB119",
          200: "#F19100",
          300: "#ED682B",
        },
        cBeige: "#FCE8BD",
        cBlack: "#2D393E",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
      backgroundImage: {
        shopButton: "url('./images/buttonBackground.svg')",
      },
    },
  },
  plugins: [],
};
