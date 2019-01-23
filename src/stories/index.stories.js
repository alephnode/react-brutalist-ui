/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Graph from '../components/Graph'
import Headline from '../components/Headline'
import Input from '../components/Input'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import Container from '../components/Container'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const customStyle = css`
  background-color: black;
  color: red;
  font-family: courier;
  padding: 20px 5px;
`

const customStyleHeadline = css`
  background-color: blue;
  color: yellow;
  font-family: courier;
  padding: 20px 5px;
`

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
))

storiesOf('Graph', module)
  .add('default', () => <Graph text="I am a sample graph." />)
  .add('custom styles', () => (
    <Graph text="Wow, I'm stylish." styles={customStyle} />
  ))

storiesOf('Headline', module)
  .add('default', () => <Headline text="I am a sample headline." />)
  .add('custom styles', () => (
    <Headline
      text="Wow, I'm a stylish headline."
      styles={customStyleHeadline}
    />
  ))

storiesOf('Input', module).add('default', () => <Input label="Simple Label" />)

storiesOf('Marquee', module).add('default', () => (
  <Marquee text="This is the best html element around" />
))

storiesOf('Container', module).add('default', () => (
  <Container type="flex" borderColor="purple">
    <Graph text="Wow, I'm contained" />
  </Container>
))
