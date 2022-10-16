/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Cloister Black'],
        body: ['Lato']
      }
    }
  },
  plugins: []
}
