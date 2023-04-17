/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '100px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1100px'},
      'lg': {'min': '1101px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    fontFamily:{'poppins':['Poppins','sans-serif'],
    'heading': ['Changa One', 'cursive']
  } ,
    extend: {
      animation: {
        'bounce-finite': 'bounce 2s ease-out 2',
      }
    },
  },
  plugins: [],
}
