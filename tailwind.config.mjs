/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,nano,sharp,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#070605',
          cream: '#f7f0e6',
          gold: '#c9a96e',
          card: '#12100e',
        }
      },
      fontFamily: {
        editorial: ['Cormorant Garamond', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      }
    },
  },
  plugins: [],
}