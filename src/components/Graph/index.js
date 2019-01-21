/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { graphStyles } from './styles.js'

export default ({ text, styles }) => (
  <p css={{ ...graphStyles, ...styles }}>{text}</p>
)
