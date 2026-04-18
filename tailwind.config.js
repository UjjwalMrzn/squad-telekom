/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // SET MANROPE AS THE DEFAULT SANS FONT
        sans: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0fbfb',
          100: '#ccf2f0',
          200: '#99e6e0',
          300: '#66d9d1',
          400: '#33ccc1',
          500: '#3BBAB1', // Exact Squad Teal
          600: '#2F958E', 
          700: '#23706a',
          800: '#174a47',
          900: '#1d3539', // Dark slate
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