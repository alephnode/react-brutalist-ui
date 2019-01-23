/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import { inputStyles, inputContainerStyles } from './styles.js'

export default ({ containerStyles, ipStyles, label }) => {
  const [value, setValue] = useState('')
  return (
    <div css={{ ...inputContainerStyles, ...containerStyles }}>
      <label htmlFor="ipLabel">{label}</label>
      <input
        type="text"
        id="ipLabel"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        css={{ ...inputStyles, ...ipStyles }}
      />
    </div>
  )
}
