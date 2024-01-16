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
        'vivid-purple': '#7C5DFA',
        'faded-purple': '#858BB2',
        'faded-purple-alt': '#888EB0',
        'faded-hover-purple': '#DFE3FA',
        'hr-grey': '#979797',

      },
    },
  },
  darkMode: 'class',
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}

