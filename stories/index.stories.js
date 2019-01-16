import React from 'react'
import Graph from '../components/Graph'
import Button from '../components/Button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('Button', module).add('default', () => (
  <Button onClick={action('I was clicked')}>Hello, Brutal button</Button>
))

storiesOf('Graph', module).add('default', () => (
  <Graph text="I am a sample graph." />
))
