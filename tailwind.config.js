module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
