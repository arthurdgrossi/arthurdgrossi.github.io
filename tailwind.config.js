/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#CF0A0A',
            light: '#E83A3A',
            dark: '#A00808',
          },
          secondary: {
            DEFAULT: '#121212',
            light: '#2C2C2C',
            dark: '#000000',
          },
          accent: {
            DEFAULT: '#F5F5F5',
            dark: '#E0E0E0',
          },
        },
        fontFamily: {
          display: ['Oswald', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
        },
        backgroundImage: {
          'hero-pattern': "url('https://images.pexels.com/photos/6941025/pexels-photo-6941025.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          'texture': "url('https://images.pexels.com/photos/1282169/pexels-photo-1282169.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  };