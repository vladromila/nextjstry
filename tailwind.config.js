module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'homepage-hero': "url('/assets/images/homepage-hero.webp')",
      }),
      colors: {
        lpGreen: {
          main: "#00b388",
          links: "#43cb83"
        }
      },
      fontFamily: {
        'default': 'Poppins, Arial, Helvetica',
        'pDefault': 'Raleway, Arial, Helvetica'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
