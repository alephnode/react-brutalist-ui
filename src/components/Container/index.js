/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'

export default ({ children, type, borderColor }) => (
  <div
    css={() => css`
      display: ${type};
      border: 1px solid ${borderColor};
    `}
  >
    {children}
  </div>
)
