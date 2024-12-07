import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './Registration.css'
import { registerData } from '../../Redux/Slices/registerSlice'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Registration = () => {

  const navigate = useNavigate()
  const [checkBox, setCheckBox] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    conformPassword: ""
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please fill the name")
      return false;
    }

    if (!formData.email.trim() || !formData.email.includes("@") || !formData.email.includes(".")) {
      toast.error("Check the email field")
      return false;

    }

    if (!formData.password.trim() || !formData.conformPassword.trim()) {
      toast.error("Please fill the password field")
      return false
    }

    if (formData.password.length < 6) {
      toast.warning("Password must have atleast 6 characters")
      return false
    }

    if (formData.password.trim() !== formData.conformPassword.trim()) {
      toast.error("Password are not matched")
      return false
    }

    if (!checkBox) {
      toast.error("You must agree to the terms and privacy policies")
      return false
    }

    return true
  }




  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {

      const response = await axios.post('http://localhost:3000/users', formData);
      toast.success("Registration successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        conformPassword: ""
      });
      setTimeout(() => {
        navigate('/login');
      }, 1000)
    }
    catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again.");
    }
  };




  return (
    <>
      <div className='register'>
        <ToastContainer position='top-right' autoClose={1000} hideProgressBar />

        <div className="registerRight">
          <h1>Register</h1>
          <form className='form'>
            <div className='input'>
              <label>Full Name</label>
              <input type="text" placeholder='Full Name' name='name' value={formData.name} required onChange={handleChange} />
            </div>
            <div className='input'>
              <label >Email</label>
              <input type="email" placeholder='Email' name='email' value={formData.email} required onChange={handleChange} />
            </div>
            <div className='input'>
              <label >Password</label>
              <input type="password" placeholder='Password' name='password' value={formData.password} required onChange={handleChange} />
            </div>
            <div className='input'>
              <label>Conform Password</label>
              <input type="password" placeholder='Re-Enter the password' name='conformPassword' value={formData.conformPassword} required onChange={handleChange} />
            </div>
            <p><input type="checkbox" style={{ width: '20px' }} onChange={(e) => setCheckBox(e.target.checked)} /> I agree to all the Terms and Privacy policies</p>

            <button className='registerBtn' onClick={handleSubmit}>Register Now</button>

          </form>
          <p className='link'>Already have an account ? <Link to='/login'> Login </Link></p>
        </div>
      </div>
    </>
  )
}

export default Registration