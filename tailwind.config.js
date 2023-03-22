/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '32pt': '32pt',
        '11pt': '11pt',
        '10pt': '10pt',
        '16pt': '16pt'
      },
      colors: {
        'light-black': 'rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'media'
};
