/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '128': '32rem',
      },
    colors: {
        // logo colors
        'custom-1': '#382E7A',
        'custom-2': '#205A8A', 
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], 
    },
  },
  plugins: [],
}

