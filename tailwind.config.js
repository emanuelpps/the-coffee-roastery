/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      nunito: ["Nunito", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "background-intro": "url('./src/assets/img/background-intro.webp')",
        "background-intro-mobile":
          "url('./src/assets/img/table-coffe-background-mobile.webp')",
        "background-family-roasters":
          "url(./src/assets/img/table-coffe-background.webp)",
        "background-family-roasters-mobile":
          "url(./src/assets/img/close-up-coffee.webp)",
          "background-about-us": "url(./src/assets/img/tool-used-coffee-2.webp)",
          "background-about-us-mobile": "url(./src/assets/img/about-us-background.webp)",
      },
    },
  },
  plugins: [],
};
