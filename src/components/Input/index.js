/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { inputStyles, inputContainerStyles, labelStyles } from './styles.js'
import PropTypes from 'prop-types'

const Input = ({ label, styles = {}, ...props }) => {
  const { container = {}, lbl = {}, input = {} } = styles
  return (
    <div css={{ ...inputContainerStyles, ...container }}>
      <label htmlFor={`ip-${label}`} css={{ ...labelStyles, ...lbl }}>
        {label}
      </label>
      <input id={`ip-${label}`} css={{ ...inputStyles, ...input }} {...props} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  styles: PropTypes.object,
}

export default Input
