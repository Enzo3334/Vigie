/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand navy (Vigie / Comité Hérault FFHandball)
        primary: {
          DEFAULT: '#0F2A5F',
          50: '#EBF1FA',
          100: '#C9D5EC',
          200: '#9DB1D6',
          300: '#6E89BF',
          400: '#4F6CA8',
          500: '#2F4F8E',
          600: '#1F3A75',
          700: '#0F2A5F',
          800: '#0A1F4A',
          900: '#061538',
          950: '#040E26',
        },
        // Sky highlight (the "INDIVIDUALISER" / pictogram blue)
        accent: {
          DEFAULT: '#4A8FE0',
          300: '#92BAEC',
          400: '#6BA1E2',
          500: '#4A8FE0',
          600: '#2E75CC',
          700: '#1F5FAE',
        },
        ink: '#0B1120',
        muted: '#E9EEF6',
        soft: '#F6F8FC',
        line: '#D9E2F1',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        lift: '0 12px 40px rgba(15,42,95,0.25)',
        glow: '0 0 0 6px rgba(74,143,224,0.18)',
        phone: '0 30px 80px -10px rgba(6,21,56,0.55), 0 12px 30px -6px rgba(6,21,56,0.4)',
      },
      backgroundImage: {
        'grid-faint': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
        'grid-light': 'radial-gradient(circle at 1px 1px, rgba(15,42,95,0.07) 1px, transparent 0)',
        'navy-radial': 'radial-gradient(ellipse at 30% 20%, #1F3A75 0%, #0F2A5F 40%, #061538 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: '0.6' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
