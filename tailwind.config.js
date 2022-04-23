const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'primary': '#FF1A59',
      'secundary': '#25CED1',
      'text-default': '#38405F',
      'text-secondary': '#666B81'
    },
  },
  plugins: [],
}
