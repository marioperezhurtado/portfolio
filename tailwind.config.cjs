/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pf-dark': '#222430',
        'pf-dark-2': '#393B4E',
        'pf-light': '#E4E5EA',
        'pf-light-2': '#B0B0B0',
        'pf-accent': '#16CA73'
      },
      fontFamily: {
        sans: ['Syne', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
