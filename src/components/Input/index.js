/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { inputStyles, inputContainerStyles } from './styles.js'

export default ({ text, containerStyles, ipStyles, label }) => (
  <div css={{ ...inputContainerStyles, ...containerStyles }}>
    <label htmlFor="ipLabel">{label}</label>
    <input type="text" id="ipLabel" css={{ ...inputStyles, ...ipStyles }} />
  </div>
)
