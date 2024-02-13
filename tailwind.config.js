/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        michroma:['Michroma'],
        roboto:['Roboto'],
        robotoserif:['Roboto Serif'],
        Parisienne:['Parisienne'],
        Roxborough:['Roxborough']
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}