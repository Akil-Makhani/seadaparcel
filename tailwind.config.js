/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f97316', // Orange 500
          dark: '#ea580c',    // Orange 600
          light: '#fdba74',   // Orange 300
        },
        ink: '#0F172A', // dark slate for headings
        muted: '#64748B', // secondary text
        surface: '#0B1220',
        surfaceElev: '#111827',
        sky: '#E6F1FF',
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(16,24,40,0.2)',
        glow: '0 0 0 6px rgba(249,115,22,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shine: {
          '0%': { opacity: '0', transform: 'translateX(-120%) skewX(-12deg)' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateX(120%) skewX(-12deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp .8s ease both',
        gradientX: 'gradientX 6s ease infinite',
        shine: 'shine 1.6s ease-in-out',
      },
    },
  },
  plugins: [],
}

