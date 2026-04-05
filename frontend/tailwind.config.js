/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './middleware.ts',
    './data/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // v2 Design System
        'v2-bg': '#F5F0EB',
        'v2-surface': '#FFFFFF',
        'v2-text': '#1A1A18',
        'v2-muted': '#6B6B5E',
        'v2-accent': '#8B6F47',
        'v2-border': '#E0D9CF',

        // Premium Architectural Palette
        'charcoal-black': '#1a1a1a',
        'stone-gray': '#4a4a4a',
        'marble-white': '#f8f7f5',
        'warm-beige': '#e8e3db',
        'natural-oak': '#a89968',
        'copper-accent': '#b8884d',
        'deep-forest': '#2d4a3f',

        // Semantic Colors (Premium)
        success: '#4a9d6f',
        warning: '#d89d4a',
        error: '#c65d5d',
        info: '#5a8fa0',

        // Legacy colors (kept for compatibility)
        moduwood: '#8B7355',
        'moduwood-dark': '#6F5C47',
        sandstone: '#D4A574',
        slate: '#2C3E50',
        parchment: '#F5F3F0',
      },
      fontFamily: {
        'v2-heading': ['Cormorant Garamond', 'Georgia', 'serif'],
        'v2-body': ['Inter', 'system-ui', 'sans-serif'],
        'v2-mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        playfair: ['Playfair Display', 'serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        lora: ['Lora', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
      boxShadow: {
        sm: '0px 4px 12px rgba(0,0,0,0.08)',
        md: '0px 8px 24px rgba(0,0,0,0.12)',
        lg: '0px 16px 32px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
