/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#f0f2f1', 500: '#B8C3AE', 900: '#8A9683' },
        secondary: '#EDE4E0',  // Beige accent
        navy: '#4B6F88'  // Text/buttons
      }
    }
  }
}
