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
import { withInfo } from '@storybook/addon-info'
import '../../src/global.css'

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

storiesOf('Button', module)
  .add('Demo - Basic', () => (
    <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => (
      <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
    ),
    { info: { inline: true } }
  )

storiesOf('Graph', module)
  .add('Demo - Basic', () => <Graph text="I am a sample graph." />)
  .add('Demo - Custom Styles', () => (
    <Graph text="Wow, I'm stylish." styles={customStyle} />
  ))
  .addDecorator(withInfo)
  .add('Reference', () => <Graph text="I am a sample graph." />, {
    info: { inline: true },
  })

storiesOf('Headline', module)
  .add('Demo - Basic', () => <Headline text="I am a sample headline." />)
  .add('Demo - Custom Styles', () => (
    <Headline
      text="Wow, I'm a stylish headline."
      styles={customStyleHeadline}
    />
  ))
  .addDecorator(withInfo)
  .add('Reference', () => <Headline text="I am a sample headline." />, {
    info: { inline: true },
  })

storiesOf('Input', module)
  .add('Demo - Basic', () => <Input label="Simple Label" />)
  .addDecorator(withInfo)
  .add('Reference', () => <Input label="Simple Label" />, {
    info: { inline: true },
  })

storiesOf('Marquee', module)
  .add('Demo - Basic', () => (
    <Marquee text="This is the best html element around" />
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => <Marquee text="This is the best html element around" />,
    {
      info: { inline: true },
    }
  )

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
