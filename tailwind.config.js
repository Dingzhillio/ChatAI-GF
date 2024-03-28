/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/background_landing.png')",
        'button-texture': "url('/public/images/Btn_OtherButton_Polygon02.png')",
        'logout-pattern': "url('/public/images/Background_03.png')",
        'login-pattern': "url('/public/images/Background_04.png')"
      },
      boxShadow: {
        'text-xs': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'text-sm': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'text-md': '4px 4px 6px rgba(0, 0, 0, 0.25)',
      } 
    },
    fontFamily: {
      custom: ['font-averia', 'sans-serif'],
      customsubtitle: ['font-kanit', 'sans-serif']
    }
  },
  plugins: [],
}