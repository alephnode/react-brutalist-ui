/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { headlineStyles } from './styles.js'
import PropTypes from 'prop-types'

const Headline = ({ text, styles }) => (
  <h1 css={{ ...headlineStyles, ...styles }}>{text}</h1>
)

Headline.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
}

export default Headline
