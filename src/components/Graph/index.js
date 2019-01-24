/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { graphStyles } from './styles.js'

const Graph = ({ text, styles }) => (
  <p css={{ ...graphStyles, ...styles }}>{text}</p>
)

export default Graph
