/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { marqueeStyles } from './styles.js'

const Marquee = ({ text, styles }) => (
  <marquee css={{ ...marqueeStyles, ...styles }}>{text}</marquee>
)

export default Marquee
