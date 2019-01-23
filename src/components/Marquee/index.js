/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { marqueeStyles } from './styles.js'

export default ({ text, styles }) => (
  <marquee css={{ ...marqueeStyles, ...styles }}>{text}</marquee>
)
