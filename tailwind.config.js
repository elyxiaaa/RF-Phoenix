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
        Cinzel: ['Cinzel', 'sans-serif'],
      },
      backgroundImage: {
        'BG': "url('/src/assets/BG.jpg')",
        'BG2': "url('/src/assets/BG2.jpg')",
        'BG3': "url('/src/assets/BG3.jpg')",
      },
      backgroundSize: {
        'cover': 'cover', // Added cover
        'contain': 'contain', // Added contain
        'full': '100% 100%', 
      },
      backgroundPosition: {
        'custom-center': 'center',
      },
      backgroundAttachment: {
        'fixed': 'fixed', 
      },
    },
    textShadow: {
      emeraldGlow: '0 0 20px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.6)',
    },
    keyframes: {
      shine: {
        '0%': { backgroundPosition: '-500%' },
        '100%': { backgroundPosition: '500%' },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: '0' },
        '100%': { transform: 'translateX(0)', opacity: '1' },
      },
      slideUp: {
        '0%': { transform: 'translateY(100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
    },
    animation: { 
      shine: 'shine 2s linear infinite',
      'slide-in-left': 'slideInLeft 2s ease-out forwards',
      'slide-in-right': 'slideInRight 2s ease-out forwards',
      'slide-up': 'slideUp 2s ease-out forwards',
    },
    
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-textshadow'),
  ],
}
