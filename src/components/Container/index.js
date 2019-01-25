/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, type, borderColor }) => (
  <div
    css={() => css`
      display: ${type};
      border: 1px solid ${borderColor};
    `}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
}

Container.defaultProps = {
  type: 'flex',
}

export default Container
