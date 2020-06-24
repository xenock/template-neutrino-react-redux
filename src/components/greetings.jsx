import React from 'react'
import PropTypes from 'prop-types'

const Greetings = ({ message = 'Holi' }) => {
  return (
    <h1>{message}</h1>
  )
}

Greetings.propTypes = {
  message: PropTypes.string,
}

export default Greetings
