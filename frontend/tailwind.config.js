/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        moduwood: '#8B7355',
        'moduwood-dark': '#6F5C47',
        'moduwood-darker': '#5C4A37',
        sandstone: '#D4A574',
        'sandstone-dark': '#C9985F',
        slate: '#2C3E50',
        parchment: '#F5F3F0',
        'parchment-light': '#F9F8F6',
        charcoal: '#333333',
        success: '#27AE60',
        warning: '#F39C12',
        error: '#E74C3C',
        info: '#3498DB',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
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
