/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

const Login = ({ onSubmit, styles = {} }) => {
  const [values, setValues] = useState({ email: '', password: '' })

  const onChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value })

  return (
    <form onSubmit={e => onSubmit(e, values)}>
      <Input
        name="email"
        label="email"
        placeholder="email"
        type="email"
        value={values.email}
        onChange={onChange}
        styles={styles}
      />
      <Input
        name="password"
        label="password"
        placeholder="password"
        type="password"
        value={values.password}
        onChange={onChange}
        styles={styles}
      />
      <input type="submit" />
    </form>
  )
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Login
