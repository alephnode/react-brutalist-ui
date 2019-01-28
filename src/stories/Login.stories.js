/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Login from '../components/Login'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('Compounds/Login', module)
  .add('Demo - Basic', () => (
    <Login
      onSubmit={(e, values) => {
        e.preventDefault()
        console.log(values)
      }}
    />
  ))
  .addDecorator(withInfo)
  .add(
    'Reference',
    () => (
      <Login
        onSubmit={(e, values) => {
          e.preventDefault()
          console.log(values)
        }}
      />
    ),
    {
      info: { inline: true },
    }
  )
