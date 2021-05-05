import React from 'react'
import {
  LoginBanner,
  LoginContainer,
  LoginForm,
  LoginInputContainer,
  SubmitButton,
} from './StyledComponents'

const Login = ({ username, password, onSubmit }) => {
  return (
    <LoginContainer>
      <LoginBanner></LoginBanner>
      <LoginForm>
        <LoginInputContainer>
          <label>Username: </label>
          <input
            type='text'
            value={username.username}
            onChange={(e) => {
              username.setUsername(e.target.value)
            }}
            placeholder='mirulkhanal123...'
          />
        </LoginInputContainer>
        <LoginInputContainer>
          <label>Password: </label>
          <input
            type='text'
            value={password.password}
            onChange={(e) => {
              password.setPassword(e.target.value)
            }}
            placeholder='b@n@n@123...'
          />
        </LoginInputContainer>
        <SubmitButton onSubmit={onSubmit} onClick={onSubmit}>
          <p>Login</p>
        </SubmitButton>
      </LoginForm>
    </LoginContainer>
  )
}

export default Login
