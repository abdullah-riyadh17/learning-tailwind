/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  darkMode: "media", // meadia or class ; media is device preferences(based on theme), class is option to the user to select them.
  theme: {
    extend: {},
  },
  plugins: [],
};
