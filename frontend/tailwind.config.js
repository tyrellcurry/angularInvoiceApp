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
        'dark-purple-alt': '#252945',
        'mid-dark-purple': '#373B53',
        'mid-purple': '#494E6E',
        'vivid-purple': '#7C5DFA',
        'vivid-purple-hover': '#9277FF',
        'faded-purple': '#858BB2',
        'faded-purple-alt': '#888EB0',
        'faded-hover-purple': '#DFE3FA',
        'lighter-grey': '#F9FAFE',
        'hr-grey': '#979797',
        'dark-black': '#0C0E16',
        'purple-shade': '#7E88C3',
        'purple-shade-alt': '#858BB2',
        'paid': '#33D69F',
        'paid-bg': '#F3FDFA',
        'paid-bg-dark': '#1F2B3F',
        'pending': '#FF8F00',
        'pending-bg': '#FFF9F0',
        'pending-bg-dark': '#2B2736',
        'draft': '#373B53',
        'draft-bg': '#F4F4F5',
        'draft-dark': '#DFE3FA',
        'draft-bg-dark': '#292C44',
        'invoice-dark': '#1E2139',
        'delete-red': '#EC5757',
        'delete-red-hover': '#FF9797',
        'grey-blue': '#777F98',
      },
    },
  },
  darkMode: 'class',
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}

