/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const LAYOUTS = {
  FLEX: css`
    display: flex;
  `,
  FLEX_V: css`
    display: flex;
    flex-direction: column;
  `,
  FLEX_WRAP: css`
    display: flex;
    flex-wrap: wrap;
  `,
  FLEX_V_WRAP: css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  `,
  FLEX_START: css`
    align-items: flex-start;
  `,
  FLEX_CENTER: css`
    align-items: center;
  `,
  FLEX_END: css`
    align-items: flex-end;
  `,
  FLEX_JUSTIFY_START: css`
    justify-content: flex-start;
  `,
  FLEX_JUSTIFY_CENTER: css`
    justify-content: center;
  `,
  FLEX_JUSTIFY_END: css`
    justify-content: flex-end;
  `,
  FLEX_JUSTIFY_SPACE: css`
    justify-content: space-around;
  `,
  FLEX_JUSTIFY: css`
    justify-content: space-between;
  `,
}

export { LAYOUTS }
