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
  children: PropTypes.any,
  type: PropTypes.string,
  borderColor: PropTypes.string,
}

export default Container
