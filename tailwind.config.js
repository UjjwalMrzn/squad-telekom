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
          50: '#f0fbfb', // Soft minty background
          100: '#ccf2f0',
          500: '#3BBAB1', // Exact color of the 'S'
          600: '#2F958E', // Slightly darker for button hover states
          900: '#1d3539', // Dark text
        },
        surface: '#ffffff',
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      }
    },
  },
  plugins: [],
}