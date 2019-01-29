/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Marquee from '../components/Marquee'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

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
