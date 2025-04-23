
import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchData } from '../../Redux/Slices/registerSlice';
import { setLogin } from '../../Redux/Slices/registerSlice'
import { ToastContainer, toast } from 'react-toastify'
export const User = createContext()
const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.register.data)
  console.log(data)
  const users = data.users
  console.log(users)
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

  const handleLogin =async (e) => {
    e.preventDefault()

    if (!validateLogin()) {
      return;
    }
    try{
    const res = await axios.get(`https://redux-server-w0s1.onrender.com/users?email=${log.email}&password=${log.password}`);
    const user = res.data[0];
    if (user) {
      toast.success("Logged in Successfully");
      dispatch(setLogin(user));
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      toast.error("Invalid Details");
    }
  } catch (err) {
    console.error(err);
    toast.error("Login failed. Please try again.");
  }
    // const find = users.find(item => item.password === log.password && item.email === log.email)

    // const findAdmin = admin.find(item => item.email === log.email && item.password === log.password)

    // if (find) {
    //   toast.success("Logged in Successfully")
    //   dispatch(setLogin(find))
    //   setTimeout(() => {
    //     navigate('/home')
    //   }, 1000)
    // }
    // else if (findAdmin) {
    //   toast.success("Welcome Admin")
    //   setTimeout(() => {
    //     navigate('/admin')
    //   }, 1000)
    // }
    // else {
    //   toast.error("Invalid Details")
    //   alert("Email: revanth@gmail.com  Password: 123456")
    // }
  }
useEffect(()=>{
  dispatch(fetchData())
},[])

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