/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Platino: ['Bitter', 'sans-serif'],
      },
      backgroundImage: {
        'BG': "url('/src/assets/BG.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

