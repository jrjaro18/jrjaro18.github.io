/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      
      colors: {
        'dark-blue': 'rgb(59,130,246)',
        'darker-blue': '#1e3a8a',
        'lighter-blue': 'rgb(147,197,253)',
        'light-blue': '#60a5fa'
      },
    },
  },
  plugins: [],
}