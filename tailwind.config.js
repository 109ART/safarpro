/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d6e0eb',
          700: '#1e3654',
          800: '#152A47',
          900: '#0e1f36'
        },
        gold: {
          400: '#f2c661',
          500: '#d4a437',
          600: '#b8872a',
          700: '#93691f'
        }
      }
    },
  },
  plugins: [],
}