/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
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
  },
  plugins: [],
};
