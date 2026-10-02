import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#071A0E',
          darker: '#041108',
          footer: '#081E10',
          surface: '#F8FAF8',
          surfaceAlt: '#F0F6F1',
          border: '#E2ECE4',
        },
        primary: {
          50: '#F2FBF6',
          100: '#D6F4E5',
          200: '#B0E9CD',
          300: '#7CD6AD',
          400: '#42BB88',
          500: '#1F9D6B',
          600: '#128054',
          700: '#0F5132',
          800: '#0A3E1B',
          900: '#082E14',
          950: '#04180A',
          DEFAULT: '#0F5132',
        },
        gold: {
          50: '#FDFBF5',
          100: '#FAF3DE',
          200: '#F4E4B7',
          300: '#EDCF88',
          400: '#E4B855',
          500: '#C5A059',
          600: '#B8860B',
          700: '#8E6706',
          800: '#6B4C08',
          900: '#4C3507',
          DEFAULT: '#C5A059',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        'display-alt': ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -10px rgba(10, 62, 27, 0.15)',
        'luxury-lg': '0 20px 40px -15px rgba(10, 62, 27, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 160, 89, 0.35)',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'float-y': 'float-y 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
