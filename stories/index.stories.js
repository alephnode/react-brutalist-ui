/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Graph from '../components/Graph'
import Button from '../components/Button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

const customStyle = css`
  background-color: black;
  color: red;
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
