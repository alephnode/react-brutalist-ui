/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

const graphStyles = css`
  color: red;
`

export default ({ text }) => <p css={graphStyles}>{text}</p>
