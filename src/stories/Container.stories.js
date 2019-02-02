/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { LAYOUTS } from '../theming/layouts'
import { COLORS } from '../theming/colors'
import Container from '../components/Container'
import Graph from '../components/Graph'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const containerhStyles = css`
${LAYOUTS.FLEX_JUSTIFY_CENTER};
${LAYOUTS.FULL_HEIGHT}
border: 1px solid ${COLORS.BLUE};
  padding: 100px 20px;
`

storiesOf('Container', module)
  .add('Demo - Basic', () => (
    <Container styles={containerhStyles}>
      <Graph text="Wow, I'm contained" />
    </Container>
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => (
      <Container styles={containerhStyles}>
        <Graph text="Wow, I'm contained" />
      </Container>
    ),
    {
      info: { inline: true },
    }
  )
