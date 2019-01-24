/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import Graph from '../components/Graph'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

const customStyle = css`
  background-color: black;
  color: red;
  font-family: courier;
  padding: 20px 5px;
`

storiesOf('Content/Graph', module)
  .add('Demo - Basic', () => <Graph text="I am a sample graph." />)
  .add('Demo - Custom Styles', () => (
    <Graph text="Wow, I'm stylish." styles={customStyle} />
  ))
  .addDecorator(withInfo)
  .add('Reference', () => <Graph text="I am a sample graph." />, {
    info: { inline: true },
  })
