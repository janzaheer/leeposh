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
        pinkColor: "#FFB7CE"
      }
    },
  },
  plugins: [],
}

