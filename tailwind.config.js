/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Montserrat"],
        curve: ["Pacifico"],
        main: ["Outfit"],
      },
    },
    colors: {
      main1: "#53B8BB",
      main2: "#055052",
      main3: "#003638",
      text1: "#fafafa",
      logoQ: "#FF0000",
    },
  },
  plugins: [],
};
