/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { COLORS } from '../../theming/colors.js'

export const buttonStyles = css`
  color: ${COLORS.RED};
  background: lightgray;
  border: 2px solid black;
  box-shadow: 0px 0px 2px;
  font-size: 1rem;
  cursor: pointer;
  :focus {
    color: purple;
    outline: 1px solid red;
    box-shadow: none;
  }
`
