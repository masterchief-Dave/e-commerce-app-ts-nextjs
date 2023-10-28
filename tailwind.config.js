/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        // #ededed
        'primary-green-100': '#56cb82',
        'primary-green-200': '#5fbb52',

        'primary-red-100': '#e85b40',

        'primary-black-100': '#0d1c2f',
        'primary-black-200': '#222222',

        'primary-yellow-100': '#ffdd22',
        'primary-yellow-200': '#ff8d31',
        'primary-yellow-300': '#f36c00',
        'primary-yellow-400': '#ffd201',

        'primary-blue-100': '#17273b',
        'primary-blue-200': '#7e9fc8',
        'primary-blue-300': '#3361cc',
        'primary-blue-400': '#105caa',
        'primary-blue-500': '#67a1df',
        'primary-blue-600': '#193558',
        'primary-blue-700': '#6eabeb',

        'primary-white': '#f2f3f7',
        'primary-white-100': '#fefefe',
        'primary-white-200': '#d9d9d9',
        'primary-white-300': '#f2f2f2',
        'primary-white-400': '#c8c8c8',
        'primary-white-500': '#eeeeee',
        'primary-white-600': '#f6f6f6',

        'primary-grey-100': '#676767',
        'primary-grey-200': '#a1a1a1',
        'primary-grey-300': '#666666',
        'primary-grey-400': '#999999',
        'primary-grey-500': '#d5d5d5',

        'primary-breadcrumb': '#ededed',

        'primary-link': '#3e92f2',

        'text-primary-link': '#3e92f2',
      },
      fontFamily: {
        roboto: ['roboto', 'sans-serif'],
        matter: ['matter', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
        jost: ['jost', 'sans-serif'],
        rubik: ['rubik', 'sans-serif']
      },
      boxShadow: {
        'primary-box-shadow': 'rgba(0, 0, 0, 0.08) 0px 4px 12px',
        'product-card-box-shadow': 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
      },
      gridTemplateColumns: {
        productSlug: '250px 1fr'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}