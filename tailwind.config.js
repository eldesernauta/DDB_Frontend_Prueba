/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '300%': '300%',
      },
      colors: {
        'primary': '#6EC827',
        'accent': '#B9DD5A',
        'light': '#F1F1F1',
        'dark': '#111111',
        'gray': '#D9D9D9',
        'gray-950': '#171717',
        'gray-900': '#262626',
      }
    },
  },
  plugins: [],
}