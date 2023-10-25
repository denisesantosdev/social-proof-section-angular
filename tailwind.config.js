/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        magenta: {
          100: "#f7f2f7",
          200: "#937b92",
          // ...
          900: "#502050",
        },
        pink: "#ee68a4",
      },
    },
    plugins: [],
  },
};
