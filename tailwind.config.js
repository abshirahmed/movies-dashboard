/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins: [require('prettier-plugin-tailwindcss'), require('@tailwindcss/forms')]
};
