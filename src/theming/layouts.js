/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const FLEX = css`
  display: flex;
`

const LAYOUTS = {
  FLEX,
  FULL_HEIGHT: css`
    height: 100%;
  `,
  FLEX_V: css`
    ${FLEX}
    flex-direction: column;
  `,
  FLEX_WRAP: css`
    ${FLEX}
    flex-wrap: wrap;
  `,
  FLEX_V_WRAP: css`
    ${FLEX}
    flex-direction: column;
    flex-wrap: wrap;
  `,
  FLEX_START: css`
    ${FLEX}
    align-items: flex-start;
  `,
  FLEX_CENTER: css`
    ${FLEX}
    align-items: center;
  `,
  FLEX_END: css`
    ${FLEX}
    align-items: flex-end;
  `,
  FLEX_JUSTIFY_START: css`
    ${FLEX}
    justify-content: flex-start;
  `,
  FLEX_JUSTIFY_CENTER: css`
    ${FLEX}
    justify-content: center;
  `,
  FLEX_JUSTIFY_END: css`
    ${FLEX}
    justify-content: flex-end;
  `,
  FLEX_JUSTIFY_SPACE: css`
    ${FLEX}
    justify-content: space-around;
  `,
  FLEX_JUSTIFY: css`
    ${FLEX}
    justify-content: space-between;
  `,
}

export { LAYOUTS }
