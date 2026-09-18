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

        // Primary — the logo's lighter azure blue (kept dark enough for AA text)
        primary: {
          DEFAULT: '#0e79c4',
          hover: '#0a63a6',
          soft: '#e4f2fb',
        },
        // Secondary — deep royal navy for dark sections, footer & authority
        navy: {
          DEFAULT: '#0c2748',
          hover: '#081b34',
          soft: '#e5ecf3',
        },
        // Bright brand azure — accents, focus, motif, hover fills (large/deco use)
        sky: '#00a0f0',
        // Division accents
        health: '#0e79c4', // lighter azure — healthcare (matches primary)
        tech: '#123a86', // deep royal blue — technology
        academy: '#b7791f', // warm amber/gold — academy differentiator
        // States
        focus: '#00a0f0',
        error: '#b3261e',
        success: '#0e79c4',
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
