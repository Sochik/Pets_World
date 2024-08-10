/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#818181",
        secondary: "#4b1c0e",
        backdrop: "#f2eee5",
        dark: "#643918",
        highlight: "#40bdc8",
        light: "#82b440",
      },
      backgroundImage: {
        main_strip: 'url("./src/assets/Images/main_strip.png")',
      },
      fontFamily: {
        bubblegum: ['"Bubblegum Sans"', "cursive"],
        cabin: ['"Cabin"', "sans-serif"],
        shadow: ['"Shadows Into Light"', "cursive"],
        calligraffitti: ['"Calligraffitti"', "cursive"],
        Caveat: ['"Caveat"', "cursive"],
      },
    },
  },
  plugins: [],
};
