/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'background-dark': '#111827',
        'foreground-dark': '#f9fafb',
        primary: '#6366f1',
        secondary: '#818cf8',
        blue: '#2563eb', // blue buttons
      },
    },
  },
  plugins: [],
}
