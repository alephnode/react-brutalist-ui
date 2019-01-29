/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { COLORS } from '../../theming/colors.js'

export const inputStyles = css`
  border: 1px solid lightgray;
`
export const inputContainerStyles = css`
  border: 1px solid black;
  padding: 2rem 4rem;
  font-family: Helvetica;
  display: inline-block;
`

export const labelStyles = css`
  ${COLORS.BLACK};
  margin-right: 1rem;
`
