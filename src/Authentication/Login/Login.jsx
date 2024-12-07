
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const Login = () => {
  const navigate = useNavigate()
  const data = useSelector(state => state.register.data)
  const users = data.users
  const admin = data.admin

  const [log, setLog] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setLog({ ...log, [name]: value })
  }

  const validateLogin = () => {
    if (!log.email || !log.password) {
      toast.error("Please fill in both fields")
      return false
    }
    return true
  }

  const handleLogin = (e) => {
    e.preventDefault()

    if (!validateLogin) {
      return;
    }

    const find = users.find(item => item.password === log.password && item.email === log.email)

    const findAdmin = admin.find(item => item.email === log.email && item.password === log.password)

    if (find) {
      toast.success("Logged in Successfully")
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }
    else if (findAdmin) {
      toast.success("Welcome Admin")
      setTimeout(() => {
        navigate('/admin')
      }, 1000)
    }
    else {
      toast.error("Invalid Details")
    }
  }


  return (
    <>
      <div className='register'>
        <ToastContainer position='top-right' autoClose={1000} hideProgressBar />
        <div className="registerRight">
          <h1>Login</h1>
          <p>Login to access your account</p>
          <form className='form'>
            <div className='input'>
              <label >Email</label>
              <input type="email" placeholder='Email' name='email' value={log.email} onChange={handleChange} />
            </div>
            <div className='input'>
              <label >Password</label>
              <input type="password" placeholder='Password' name='password' value={log.password} onChange={handleChange} />
            </div>
            <div className="forgotPassword">
              <p>Remember me</p>
              <a href="#">Forgot Password?</a>
            </div>
            <button className='registerBtn' onClick={handleLogin} >Login</button>
          </form>
          <p className='link'>Don't have an account in EasySet24 yet? <Link to='/register'>Register?</Link></p>
        </div>
      </div>
    </>
  )
}

export default Login