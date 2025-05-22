/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
    colors: {
      primary: '#15803d',
      secondary: '#65a30d',
      light: '#f0fdf4',
      accent: '#4ade80',
    },
  },
  },
  plugins: [],
}

