/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Unified brand system sampled from the authentic logo:
        // deep royal navy (#002080), bright azure (#00a0f0), silver swoosh.
        ink: '#0c2444', // heading text (deep navy)
        body: '#48546a', // body text (cool slate)
        ivory: '#f6f9fd', // clean cool-white surface
        sage: '#e9f1fa', // pale blue background (neutral surface)
        border: '#d5e0ee',
        silver: '#b0b0b0', // logo swoosh neutral accent

        // Primary — deep royal navy (the wordmark)
        primary: {
          DEFAULT: '#0a2a80',
          hover: '#071f60',
          soft: '#e4ebf7',
        },
        // Secondary — deepest navy for dark sections & footer
        navy: {
          DEFAULT: '#0c2748',
          hover: '#081b34',
          soft: '#e5ecf3',
        },
        // Bright brand azure — accents, focus, motif, hover fills (large/deco use)
        sky: '#0b9fe8',
        // Division accents
        health: '#0a2a80', // navy — healthcare (matches primary)
        tech: '#0e6fbf', // readable azure — technology
        academy: '#b7791f', // warm amber/gold — academy differentiator
        // States
        focus: '#0b9fe8',
        error: '#b3261e',
        success: '#0e6fbf',
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
