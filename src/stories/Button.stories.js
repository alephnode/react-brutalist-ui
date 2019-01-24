/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Button from '../components/Button'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

storiesOf('Controls/Button', module)
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
