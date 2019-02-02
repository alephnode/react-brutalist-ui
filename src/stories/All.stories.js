/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import { LAYOUTS } from '../theming/layouts'
import { COLORS } from '../theming/colors'
import Graph from '../components/Graph'
import Headline from '../components/Headline'
import Input from '../components/Input'
import Login from '../components/Login'
import Marquee from '../components/Marquee'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

const customStyleHeadline = css`
  background-color: red;
  color: yellow;
  font-family: courier;
  padding: 20px 5px;
`

const containerhStyles = css`
${LAYOUTS.FLEX_JUSTIFY_CENTER};
${LAYOUTS.FULL_HEIGHT}
border: 1px solid ${COLORS.BLUE};
  padding: 100px 20px;
`

storiesOf('All', module)
  .add('Default - Home', () => (
    <>
      <Headline text="REACT BRUTALIST UI" styles={customStyleHeadline} />
      <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
      <Container styles={containerhStyles}>
        <p>I cannot be contained.</p>
      </Container>
      <Graph text="I am a sample graph" />
      <Headline text="IT IS HEADLINE TIME" />
      <Input label="Sample Input" />
      <Login
        onSubmit={(e, values) => {
          e.preventDefault()
          console.log(values)
        }}
      />
      <Marquee text="I am the coveted marquee" />
    </>
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => (
      <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
    ),
    { info: { inline: true } }
  )
