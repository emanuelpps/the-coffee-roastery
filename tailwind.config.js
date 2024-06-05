/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display', 'serif'],
      'nunito': ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'background-intro': "url('./src/assets/img/background-intro.webp')",
        'background-intro-mobile': "url('./src/assets/img/background-intro-mobile.webp')",
      }
    },
  },
  plugins: [],
}