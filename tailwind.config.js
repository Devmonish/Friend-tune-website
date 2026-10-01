/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#FFE1E7',
        rose: '#FF7A9C',
        petal: '#FFC8A2',
        marigold: '#FFC02E',
        lilac: '#E4D4FA',
        plum: '#3D1D4E',
        mint: '#D5F2DF',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,192,46,.55)',
        card: '0 12px 30px -10px rgba(61,29,78,.45)',
      },
    },
  },
  plugins: [],
}
