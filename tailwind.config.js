/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/collections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#60D1F5',
      },
      fontFamily: {
        sans: ["'Open Sans', sans-serif"],
      },
    },
  },
  plugins: [],
};
