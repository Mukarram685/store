/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-darkblue' : '#3B1E54',
        'custom-lightblue' : '#9B7EBD',
        'custom-lightpurple': '#D4BEE4',
        'custom-gray': '#EEEEEE'
      }
    },
  },
  plugins: [],
}

