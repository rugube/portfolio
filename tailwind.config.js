/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%'
          },
          '50%': { 
            transform: 'translate(20px, 20px) rotate(4deg)',
            borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%'
          }
        }
      }
    }
  },
  plugins: [],
};