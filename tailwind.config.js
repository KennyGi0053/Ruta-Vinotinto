/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':'#661d24',
       
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary':'#661d24',
       
      }),
    },
  },
  plugins: [],
}

