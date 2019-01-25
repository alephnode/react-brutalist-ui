/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { marqueeStyles } from './styles.js'
import PropTypes from 'prop-types'

const Marquee = ({ text, styles }) => (
  <marquee css={{ ...marqueeStyles, ...styles }}>{text}</marquee>
)
Marquee.defaultProps = {
  text: 'Enter text',
  styles: {},
}

Marquee.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default Marquee
