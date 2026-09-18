/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Unified brand system: navy authority (from the logo wordmark) with a
        // warm terracotta / clay accent. No greens.
        ink: '#26211d', // heading text (warm charcoal)
        body: '#514a44', // body text (warm slate)
        ivory: '#f8f6f1', // warm ivory surface
        sage: '#f2ede5', // warm sand background (neutral surface)
        border: '#e5ded3',

        // Primary — terracotta / clay (warmth, humanity, dignity)
        primary: {
          DEFAULT: '#b4532e',
          hover: '#983f1f',
          soft: '#f7e7dd',
        },
        // Secondary — midnight navy (authority)
        navy: {
          DEFAULT: '#16324f',
          hover: '#0f2540',
          soft: '#e5ecf3',
        },
        // Division accents
        health: '#b4532e', // terracotta — healthcare (matches primary)
        tech: '#2b5f9e', // blue — technology
        academy: '#b7791f', // warm amber/gold — academy
        // States
        focus: '#b4532e',
        error: '#b3261e',
        success: '#2b5f9e',
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
