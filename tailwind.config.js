/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean blue flat palette — using 'ink', 'slate', 'mute' to avoid Tailwind prefix collisions
        'bg': '#F8FAFC',
        'surface': '#FFFFFF',
        'surface-alt': '#F1F5F9',
        'line': '#E2E8F0',
        'ink': '#0F172A',
        'slate': '#64748B',
        'mute': '#94A3B8',
        'accent': '#3B82F6',
        'accent-light': '#DBEAFE',
        'accent-dark': '#2563EB',
        'warm': '#F59E0B',
        'warm-light': '#FEF3C7',
      },
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
