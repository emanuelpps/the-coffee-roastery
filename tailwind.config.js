/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./public/","./"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "background-intro": "url('/assets/img/background-intro.webp')",
        "background-intro-mobile":
          "url('/assets/img/table-coffe-background-mobile.webp')",
        "background-family-roasters":
          "url(/assets/img/table-coffe-background.webp)",
        "background-family-roasters-mobile":
          "url(/assets/img/close-up-coffee.webp)",
        "background-about-us":
          "url(/assets/img/tool-used-coffee-2.webp)",
        "background-about-us-mobile":
          "url(/assets/img/about-us-background.webp)",
      },
    },
  },
  plugins: [],
};
