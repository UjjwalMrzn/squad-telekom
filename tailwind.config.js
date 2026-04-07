/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fdfa', // Soft background (like Loom's light purple/blue, but we can tweak)
          100: '#ccfbf1',
          500: '#14b8a6', // Main brand color (Teal/Green for Telecom, adjust if needed)
          600: '#0d9488', // Hover state
          900: '#134e4a', // Dark text
        },
        surface: '#ffffff',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)', // Loom uses very soft, wide shadows
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem', // For those big, rounded image containers
      }
    },
  },
  plugins: [],
}