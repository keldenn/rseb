/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  darkMode: 'class',
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
        'custom-3': '#7E3BF2', 
        'custom-4': '#3A2A76', 
        'green-custom': "#73D13D",
        'red-custom': "#FF4D4F"
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], 
      sans: ['Inter', 'sans-serif'], 
    },
  },
  plugins: [
    require('flowbite/plugin')({
        charts: true,
    }),
  
  ]
})

