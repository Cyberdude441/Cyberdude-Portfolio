/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080B12',
        surface: {
          DEFAULT: '#0E1424',
          hover: '#131D33',
          card: '#0B101D',
          border: '#1E293B',
          'border-light': 'rgba(255, 255, 255, 0.08)',
        },
        primary: {
          DEFAULT: '#0ea5e9',
          hover: '#38bdf8',
          muted: 'rgba(14, 165, 233, 0.12)',
        },
        success: {
          DEFAULT: '#10b981',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        text: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elevated': '0 10px 30px -4px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
