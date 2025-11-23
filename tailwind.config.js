/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#111827', // Dark mode background (bg-primary-dark)
          text: '#1E3A8A', // Light mode text (text-primary-text)
          gradient: {
            from: '#3B82F6', // Gradient start (bg-primary-gradient-from)
            to: '#8B5CF6',   // Gradient end (bg-primary-gradient-to)
          },
        },
        navbar: {
          light: '#F3F4F6', // Light mode navbar background (bg-navbar-light)
        },
        secondary: {
          bg: '#E5E7EB', // Secondary background (bg-secondary-bg)
        },
        gray: {
          200: '#E5E7EB', // Light gray for dark mode text (text-gray-200)
          300: '#D1D5DB', // Light gray for dark mode text (text-gray-300)
          700: '#374151', // Dark gray for buttons in dark mode (bg-gray-700)
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default font (Inter)
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    },
  },
  plugins: [],
};