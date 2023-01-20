/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(103, 58, 183)',
        emphasis: '#4285f4',
      },
      backgroundColor: {
        overlay: 'rgba(0,0,0,0.4)',
      },
      borderWidth: {
        '1': '1px',
      },
      animation: {
        inputhighlight: 'inputHighlighter 0.3s ease',
      },
    },
  },
  plugins: [],
};
