/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        landingCardBackground: "#ebe2e2",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
