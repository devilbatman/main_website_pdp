import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#b9dcfe',
          300: '#7cc1fd',
          400: '#36a2f8',
          500: '#0c87e9',
          600: '#0069c7',
          700: '#0154a1',
          800: '#064785',
          900: '#0b3c6e',
          950: '#072849',
        },
        ocean: {
          50: '#f4f8fc',
          100: '#e8f1f9',
          200: '#cddfed',
          300: '#a2c5de',
          400: '#71a5c9',
          500: '#4f89b3',
          600: '#3d6f97',
          700: '#335a7b',
          800: '#2d4c66',
          900: '#294056',
          950: '#0c1f33',
        },
      },
      boxShadow: {
        soft: '0 1px 3px 0 rgb(7 40 73 / 0.04), 0 4px 16px -2px rgb(7 40 73 / 0.06)',
        card: '0 1px 2px 0 rgb(7 40 73 / 0.03), 0 12px 32px -8px rgb(7 40 73 / 0.1)',
        glow: '0 0 60px -12px rgb(56 162 248 / 0.35)',
        'ocean-lg': '0 24px 64px -16px rgb(7 40 73 / 0.25)',
      },
      backgroundImage: {
        'ocean-hero':
          'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(56, 162, 248, 0.18) 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 80% 20%, rgba(125, 211, 252, 0.12) 0%, transparent 50%), linear-gradient(180deg, #0c1f33 0%, #0f2842 40%, #153a5c 100%)',
        'cloud-soft':
          'radial-gradient(ellipse 60% 40% at 30% 30%, rgba(255,255,255,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 35% at 70% 25%, rgba(255,255,255,0.08) 0%, transparent 65%)',
      },
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
        'cloud-drift': 'cloudDrift 18s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        cloudDrift: {
          '0%, 100%': { opacity: '0.85', transform: 'translateX(0)' },
          '50%': { opacity: '1', transform: 'translateX(8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
