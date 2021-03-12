module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        xsm:"480px"
      },
      backgroundImage: theme => ({
        'homepage-hero': "url('/assets/images/homepage-hero.jpeg')"
      }),
      colors: {
        lpGreen: {
          main: "#00b388",
          links: "#43cb83",
          linksHover:"#FC8A17"
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
