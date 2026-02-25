import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF8E8',
          100: '#FAF0CC',
          200: '#F5E199',
          300: '#EFD166',
          400: '#E5BE33',
          500: '#C9A84C',
          600: '#A88A3D',
          700: '#876D2E',
          800: '#66511F',
          900: '#453610',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#B8B8B8',
          300: '#8A8A8A',
          400: '#5C5C5C',
          500: '#3D3D3D',
          600: '#2E2E2E',
          700: '#252525',
          800: '#1A1A1A',
          900: '#111111',
          950: '#0A0A0A',
        },
        cream: {
          50: '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE5D8',
          400: '#DDD2BF',
          500: '#C4B79E',
        },
        burgundy: {
          500: '#722F37',
          600: '#5C262D',
          700: '#461D23',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        goldShimmer: {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
