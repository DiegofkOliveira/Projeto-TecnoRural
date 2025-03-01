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
        'about-fundo': "url('../src/assets/Capa.jpeg')",
        'home-start': "url('../src/assets/campo.png')",
        'home-imagem': "url('../public/ImagemInfo.jpg')",
      },
      fontFamily: {
        gummy: ["Sour Gummy", "serif"]
      }
    },
  },
  plugins: [],
}

