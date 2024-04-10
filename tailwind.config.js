/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    theme: {
      colors: {
        red: '#D91E2E',
        blue: '#049DD9',
        gray: '#D7D4E7',
        yellow: '#F2CB05',
        lightYellow: '#D9B471',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {},
    },
    plugins: [],
  },
};
