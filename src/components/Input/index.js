/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import { inputStyles, inputContainerStyles, labelStyles } from './styles.js'
import PropTypes from 'prop-types'

const Input = ({ label, styles = {} }) => {
  const [value, setValue] = useState('')
  const { container = {}, ipLabel = {}, input = {} } = styles
  return (
    <div css={{ ...inputContainerStyles, ...container }}>
      <label htmlFor="ipLabel" css={{ ...labelStyles, ...ipLabel }}>
        {label}
      </label>
      <input
        type="text"
        id="ipLabel"
        value={value}
        onChange={({ target }) => {
          console.log(target.value)
          setValue(target.value)
        }}
        css={{ ...inputStyles, ...input }}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  styles: PropTypes.object,
}

export default Input
