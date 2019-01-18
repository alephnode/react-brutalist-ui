/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import { testStyles } from './styles.js'

export default ({ text, css }) => <p css={{ ...testStyles, ...css }}>{text}</p>
