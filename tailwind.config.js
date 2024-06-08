/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'vazir': ['vazir','sans-serif'],
        'yekan': ['yekan','sans-serif'],
        'shabnam': ['shabnam','sans-serif'],
      }
    },
  },
  plugins: [],
}