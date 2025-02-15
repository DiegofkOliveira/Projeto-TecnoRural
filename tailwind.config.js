/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 30px rgba(227, 228, 237, 0.37)',
      },
      backgroundImage: {
        'about-fundo': "url('https://portaladama.com/wp-content/uploads/2020/08/Guia-da-Soja-capa-1.jpeg')",
        'home-start': "url('../public/campo.png')",
      },
      fontFamily: {
        kanadaka: ["Montserrat", "serif"],
        gummy: ["Sour Gummy", "serif"],
        sriracha: ["Sriracha", "serif"]
      }
    },
  },
  plugins: [],
}

