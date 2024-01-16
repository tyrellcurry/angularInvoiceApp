/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'faded-white': '#F8F8FB',
        'dark-purple': '#141625',
        'mid-dark-purple': '#373B53',
        'mid-purple': '#494E6E',
        'faded-purple': '#858BB2',
        'faded-hover-purple': '#DFE3FA',

      },
    },
  },
  plugins: [],
}

