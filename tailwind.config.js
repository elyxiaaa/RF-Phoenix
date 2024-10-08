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
        Rokkit: ['Rokkit', 'sans-serif'],
        COP1: ['COPRGTB', 'sans-serif'],
        COO1: ['COOPBL', 'sans-serif'],
        ERA1: ['ERASBD', 'sans-serif'],
        GEO1: ['georgiab', 'sans-serif'],
      },
      backgroundImage: {
        'BG': "url('/src/assets/BG.jpg')",
        'BG2': "url('/src/assets/BG2.jpg')",
        'BG3': "url('/src/assets/BG3.jpg')",
        'BG4': "url('/src/assets/BG4.jpg')",
        'BG5': "url('/src/assets/BG5.jpg')",
        'BG6': "url('/src/assets/BG6.jpg')",
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
      emeraldGlow:    '0 0 20px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.6)',
      whiteGlow:      '0 0 20px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
      blackGlow:      '0 0 15px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6)',
      redGlow:        '0 0 20px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.6)',
      orangeGlow:     '0 0 20px rgba(249, 115, 22, 0.8), 0 0 20px rgba(249, 115, 22, 0.6)',
      blueGlow:       '0 0 20px rgba(96, 165, 250, 0.8), 0 0 20px rgba(96, 165, 250, 0.6)',
      yellowGlow:     '0 0 20px rgba(253, 224, 71, 0.8), 0 0 20px rgba(253, 224, 71, 0.6)',
      purpleGlow:     '0 0 20px rgba(232, 121, 249, 0.8), 0 0 20px rgba(232, 121, 249, 0.6)',
      cyanGlow:       '0 0 20px rgba(103, 232, 249, 0.8), 0 0 20px rgba(103, 232, 249, 0.6)',
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
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    animation: { 
      shine: 'shine 2s linear infinite',
      'slide-in-left': 'slideInLeft 1s ease-out forwards',
      'slide-in-right': 'slideInRight 1s ease-out forwards',
      'slide-up': 'slideUp 1s ease-out forwards',
      fadeIn: 'fadeIn 1s ease-in-out forwards',
    },
    
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-textshadow'),
  ],
}
