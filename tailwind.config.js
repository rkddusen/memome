/** @type {import('tailwindcss').Config} */

const px0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}px`) };
const z0_50 = { ...Array.from(Array(51)).map((_, i) => `${i}`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: px0_100,
      colors: {
        'black': '#060606',
        'white': '#FAFAFA',
        'gray': '#7F7F7F',
        'light-gray': '#C0C0C0',
        'lighter-gray': '#DCDCDC',
        'star': '#FFC700'
      },
      width: px0_1000,
      height: px0_1000,
      padding: px0_100,
      margin: px0_100,
      borderWidth: {
        '1.5': '1.5px',
      },
      borderRadius: {
        '10': '10px',
      },
      gap: px0_50,
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 200px))',
      },
    },
  },
  plugins: [],
}

