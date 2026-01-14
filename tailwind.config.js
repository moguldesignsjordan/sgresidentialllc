/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Trustworthy Blue
        secondary: '#f59e0b', // Accent Amber/Gold
        dark: '#1e293b',
      }
    },
  },
  plugins: [],
}