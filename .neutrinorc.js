const standard = require('@neutrinojs/standardjs')
const react = require('@neutrinojs/react')
const jest = require('@neutrinojs/jest')

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    standard({
      eslint: {
        rules: {
          'comma-dangle': ["error", "always-multiline"],
          'react/prop-types': 0,
        }
      }
    }),
    react({
      html: {
        title: 'template-neutrino-react-redux'
      }
    }),
    jest(),
  ],
}
