/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lost: ['"dragalia"', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
}
