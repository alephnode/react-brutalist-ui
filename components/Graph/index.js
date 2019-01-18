/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { testStyles } from './styles.js'

export default ({ text, styles }) => (
  <p css={{ ...testStyles, ...styles }}>{text}</p>
)
