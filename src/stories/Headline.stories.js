/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Headline from '../components/Headline'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const customStyleHeadline = css`
  background-color: blue;
  color: yellow;
  font-family: courier;
  padding: 20px 5px;
`

storiesOf('Content/Headline', module)
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
