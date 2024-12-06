/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // logo colors
        'custom-1': '#3A2A76',
        'custom-2': '#335CAD', 
      },
    },
  },
  plugins: [],
}

