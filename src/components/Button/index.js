/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'
import { buttonStyles } from './styles'

const Button = ({ children, onClick, styles }) => (
  <button onClick={onClick} css={{ ...buttonStyles, ...styles }}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
