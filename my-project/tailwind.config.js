/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3878',
        grayscale: '#333333',
        grayscale_lightray: '#D9D9D9',
      }
    },
  },
  plugins: [],
}

