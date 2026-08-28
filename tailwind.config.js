/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#061A46',
        'electric-blue': '#1264F5',
        'signal-cyan': '#08CBE8',
        'growth-teal': '#0BAA9A',
        'cloud-white': '#F3F7FB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out',
        'fade-in': 'fadeIn 1.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'ribbon': 'ribbonMove 12s linear infinite',
        'ribbon-reverse': 'ribbonMoveReverse 15s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateX(30px) scale(0.97)' },
          to: { opacity: 1, transform: 'translateX(0) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ribbonMove: {
          '0%': { transform: 'translateX(-10%) rotate(-12deg)' },
          '50%': { transform: 'translateX(15%) rotate(-10deg)' },
          '100%': { transform: 'translateX(-10%) rotate(-12deg)' },
        },
        ribbonMoveReverse: {
          '0%': { transform: 'translateX(10%) rotate(-12deg)' },
          '50%': { transform: 'translateX(-15%) rotate(-10deg)' },
          '100%': { transform: 'translateX(10%) rotate(-12deg)' },
        },
      },
    },
  },
  plugins: [],
}