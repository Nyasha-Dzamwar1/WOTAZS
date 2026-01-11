/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./**/*.html" 
  ],
  safelist: [
    'bg-[url(\'../assets/images/hero/hero.jpg\')]', 
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        darkBlue: '#0F036D',
        darkGreen: '#036D21'
    },
  },
},
  plugins: [],
}


