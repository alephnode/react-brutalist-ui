/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Container from '../components/Container'
import Graph from '../components/Graph'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('Container', module)
  .add('Demo - Basic', () => (
    <Container type="flex" borderColor="purple">
      <Graph text="Wow, I'm contained" />
    </Container>
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => (
      <Container type="flex" borderColor="purple">
        <Graph text="Wow, I'm contained" />
      </Container>
    ),
    {
      info: { inline: true },
    }
  )
