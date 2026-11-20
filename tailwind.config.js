/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#060614',
          secondary: '#0d0d2b',
          card: '#12122a',
          hover: '#1a1a3e',
          border: '#2a2a5a',
        },
        brand: {
          orange: '#F97316',
          yellow: '#EAB308',
          gold: '#FFD700',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'chase-pulse': 'chase-pulse 1.5s ease-in-out infinite',
        'ultra-glow': 'ultra-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'holographic': 'holographic 4s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 2s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'particle-rise': 'particle-rise 1.2s ease-out forwards',
        'count-up': 'fade-in 0.3s ease-out',
        'rainbow-spin': 'rainbow-spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'chase-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,158,11,0.5), 0 0 40px rgba(236,72,153,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(245,158,11,0.9), 0 0 80px rgba(236,72,153,0.7), 0 0 120px rgba(99,102,241,0.4)' },
        },
        'ultra-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(139,92,246,0.5), 0 0 30px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(139,92,246,0.9), 0 0 60px rgba(139,92,246,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        holographic: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.6)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'particle-rise': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-80px) scale(0)', opacity: '0' },
        },
        'rainbow-spin': {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
