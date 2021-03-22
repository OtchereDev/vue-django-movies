module.exports = {
  purge: {
    enabled:true,
    content:['./src/**/*.vue',
            './src/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary_brown:"#3f3b3b",
        secondary_brown:"#575151",
        primary_green:"#004225",
        primary_gold:"#feb062",
        primary_pink:"#e7b3b3"
      },
      fontFamily:{
        primary_family: 'Montserrat',
        secondary_family: 'Roboto'
      },
      backgroundImage: {
        secondary_bg:"linear-gradient(to right,rgba(126, 213, 111, 0.801), hsla(160, 64%, 43%, 0.801) ),url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80')",
        primary:"url('https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
