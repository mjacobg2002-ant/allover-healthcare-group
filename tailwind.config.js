/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Unified brand system derived from the authentic Allover logo
        // (navy wordmark + teal "Healthcare | Technology | Education" line)
        ink: '#16241f', // heading text (deep evergreen-charcoal)
        body: '#3a4a45', // body text
        ivory: '#f7f5ef', // warm ivory surface
        sage: '#eef2ee', // pale mineral background
        border: '#dfe4de',

        // Primary — deep evergreen / mineral green (stability, healing)
        primary: {
          DEFAULT: '#1f5c4d',
          hover: '#184a3e',
          soft: '#e4efe9',
        },
        // Secondary — midnight navy (authority)
        navy: {
          DEFAULT: '#16324f',
          hover: '#0f2540',
          soft: '#e5ecf3',
        },
        // Division accents
        health: '#1f8a7a', // muted teal — healthcare
        tech: '#2b5f9e', // blue — technology
        academy: '#b7791f', // warm amber/gold — academy
        // States
        focus: '#1f8a7a',
        error: '#b3261e',
        success: '#1f7a4d',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-path': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
