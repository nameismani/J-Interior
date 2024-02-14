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
      },
      backgroundImage: {
        'project1': "url('/src/assets/images/jinterior_project1.jpg')",
        'project2': "url('/src/assets/images/jinterior_project2.jpg')",
        'project3': "url('/src/assets/images/jinterior_project3.jpg')",
        'project4': "url('/src/assets/images/jinterior_project4.jpg')",
        'header':"url('/src/assets/images/jinterior_header_image.jpg')",
        'ourservice':"url('/src/assets/images/bgGradient.png')"
      },
     
      transitionTimingFunction:{
         'in-expo':' cubic-bezier(0.14, 0.4, 0.09, 0.99)'
      }
    },
  },
  plugins: [require('flowbite/plugin'),],
}