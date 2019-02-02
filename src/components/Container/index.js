/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, styles }) => (
  <div css={{ ...styles }}>{children}</div>
)

Container.propTypes = {
  children: PropTypes.any.isRequired,
  styles: PropTypes.any,
}

export default Container
