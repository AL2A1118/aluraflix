/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto Flex Variable']
    },
    backgroundImage: {
      banner: "url('./src/assets/banner.webp')"
    },
    extend: {}
  },
  plugins: []
}
