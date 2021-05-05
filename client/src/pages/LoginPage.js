import React, { useState } from 'react'
import Login from '../components/Login'
import Auth from '../services/auth.service'
const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    const auth = new Auth()
    console.log(auth.verifyLogin())
  }
  return (
    <>
      <Login
        username={{ username, setUsername }}
        password={{ password, setPassword }}
        onSubmit={(e) => handleLogin(e)}
      />
    </>
  )
}

export default LoginPage
