/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'], // Corrected syntax
        'overpass': ['Overpass", sans-serif']
      },
    },
  },
  plugins: [],
};
