/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const defineColor = hex => css`
  ${hex};
`

export const COLORS = {
  BLACK: defineColor('#272727'),
  WHITE: defineColor('#FFFFFF'),
  RED: defineColor('#FF0000'),
  BLUE: defineColor('#0000FF'),
  LIGHT_GRAY: defineColor('#C6C4C5'),
}
