/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body: ['Manrope', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(2, 6, 23, 0.08)',
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(2, 6, 23, 0.24)'
      },
      colors: {
        navy: {
          950: '#071225',
          900: '#0B1A3F',
          800: '#12285A',
          700: '#183377'
        },
        premiumRed: '#C92A3A',
        academicBlue: '#1565C0',
        warmGold: '#E8A317',
        biologyGreen: '#1F7A5C',
        paper: '#FAF7F2'
      },
      backgroundImage: {
        'radial-soft': 'radial-gradient(circle at top, rgba(232,163,23,.18), transparent 44%), radial-gradient(circle at bottom right, rgba(21,101,192,.16), transparent 40%)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' }
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.7, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        pulseSoft: 'pulseSoft 3.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
