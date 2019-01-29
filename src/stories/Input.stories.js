/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Input from '../components/Input'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

storiesOf('Input', module)
  .add('Demo - Basic', () => <Input label="Simple Label" />)
  .addDecorator(withInfo)
  .add('Reference', () => <Input label="Simple Label" />, {
    info: { inline: true },
  })
