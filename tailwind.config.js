module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em'
    },
    extend: {
      width: {
        fit: "fit-content"
      },
      height: {
        fit: "fit-content"
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
