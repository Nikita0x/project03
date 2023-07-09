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
        primary_hover: '#232c60',
        primary_active: '#1a2148',
        grayscale: '#333333',
        grayscale_lightray: '#D9D9D9',
        grayscale10: '#9C9C9C',
      },
      screens: {
        '400px': '400px',
      },
      fontSize: {
        'responsive-font-subheader': 'text-sm sm:text-base lg:text-[1.125rem]',
        'responsive-font-header': 'text-lg 400px:text-2xl md:text-4xl',
      }
    },
  },
  plugins: [],
}

