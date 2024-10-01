/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px', 
      },
      colors: {
        'gray-6': 'var(--Gray-6, #F2F2F2)', 
      },
    },
  },
  plugins: [],
}

