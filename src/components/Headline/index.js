/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { headlineStyles } from './styles.js'

const Headline = ({ text, styles }) => (
  <h1 css={{ ...headlineStyles, ...styles }}>{text}</h1>
)

export default Headline
