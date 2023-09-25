/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlack: 'rgb(var(--primary-black) / <alpha-value>)',
        primaryWhite: 'rgb(var(--primary-white) / <alpha-value>)',
        primaryBrown: 'rgb(var(--primary-brown) / <alpha-value>)',
        primaryPink: '#E13C6B',
        primaryGreen: '#3E8358',
        primaryOrange: '#FF5C00',
        secondaryPink: '#E77D7D',
        secondaryWhite: '#ffd6df',
        bgPrimaryBrown: '#F4E1D2',
        bgPrimaryPink: '#F4CFCF',
        bgPrimaryProducts: '#F4C2C2',
      },
      fontFamily: {
        GreatVibes: ['Great Vibes', 'cursive'],
        PlayfairDisplay: ['Playfair Display', 'serif'],
        Quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
