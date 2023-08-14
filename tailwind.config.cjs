/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'pf-dark': '#222430',
        'pf-dark-2': '#393b4e',
        'pf-dark-3': '#4b4e69',
        'pf-light': '#ffffff',
        'pf-light-2': '#e0e0e0',
        'pf-accent': '#16ca73'
      },
      fontFamily: {
        display: ['Syne', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      screens: {
        xs: '475px'
      }
    }
  },
  plugins: []
}
