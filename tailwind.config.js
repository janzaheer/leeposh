/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body: ["Stylish", "serif"]
      },
      colors: {
        goldColor: "#FFD700",
        goldHoverColor: "#ffdf70",
        pinkColor: "#FFB7CE",
        pinkHoverColor: "#FFC7D9"
      }
    },
  },
  plugins: [],
}

