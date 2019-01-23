/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { headlineStyles } from './styles.js'

export default ({ text, styles }) => (
  <h1 css={{ ...headlineStyles, ...styles }}>{text}</h1>
)
