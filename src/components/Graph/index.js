/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { graphStyles } from './styles.js'
import PropTypes from 'prop-types'

const Graph = ({ text, styles }) => (
  <p css={{ ...graphStyles, ...styles }}>{text}</p>
)

Graph.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object,
}

export default Graph
