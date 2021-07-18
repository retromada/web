module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      white: '#fff',
      black: '#000'
    }),
    extend: {
      backgroundImage: (theme) => ({
        wide: "url('../assets/png/wide-placeholder.png')"
      }),
      height: (theme) => ({
        wide: '50rem',
        'wide-2x': '100rem'
      })
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
