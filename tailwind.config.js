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
        cyber: {
          bg: '#05070D',
          darker: '#030408',
          dark: '#0a0f1d',
          card: '#0d1527',
          'card-hover': '#111c34',
          cyan: '#00f0ff',
          'cyan-dim': 'rgba(0, 240, 255, 0.15)',
          'cyan-glow': 'rgba(0, 240, 255, 0.4)',
          matrix: '#00ff66',
          'matrix-dim': 'rgba(0, 255, 102, 0.15)',
          'matrix-glow': 'rgba(0, 255, 102, 0.4)',
          purple: '#a855f7',
          'purple-dim': 'rgba(168, 85, 247, 0.15)',
          'purple-glow': 'rgba(168, 85, 247, 0.4)',
          red: '#ff0055',
          'red-dim': 'rgba(255, 0, 85, 0.15)',
          amber: '#ffb703',
          border: '#1a2642',
          'border-bright': '#2a3b63',
          text: '#e2e8f0',
          muted: '#64748b',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'radar': 'radar 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 5px rgba(0, 240, 255, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(0, 240, 255, 0.8))' },
        }
      },
      boxShadow: {
        'cyber-cyan': '0 0 20px -3px rgba(0, 240, 255, 0.3)',
        'cyber-cyan-lg': '0 0 35px -3px rgba(0, 240, 255, 0.45)',
        'cyber-matrix': '0 0 20px -3px rgba(0, 255, 102, 0.3)',
        'cyber-purple': '0 0 20px -3px rgba(168, 85, 247, 0.3)',
        'cyber-red': '0 0 20px -3px rgba(255, 0, 85, 0.3)',
        'inner-glow': 'inset 0 0 20px 0 rgba(0, 240, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
