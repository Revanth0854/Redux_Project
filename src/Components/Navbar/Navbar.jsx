import React, { useTransition } from 'react'
import navlogo from './Assets/navLogo.png'
import flag from './Assets/flag.png'
import { FaSearch } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { dark } from '../../Redux/Slices/registerSlice';


const Navbar = () => {

    const navigate = useNavigate()

    const data = useSelector(state => state.register.theme)

    console.log(data)

    const handleLogout = (e) => {
        e.preventDefault()
        navigate("/login")
    }

    const dispatch = useDispatch()
    const handleDark = (e) => {
        dispatch(dark())
    }


    return (
        <>
            <div className={data ? "navDark" : "navbar"}>
                <img src={navlogo} alt="" />
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <FaSearch style={{ fontSize: "20px" }} />
                </div>
                <div className="navlinks">
                    <a href="#"><img src={flag} alt="" style={{ width: "28px" }} /></a>
                    <a href="#"><FaIndianRupeeSign style={{ fontSize: "30px",color:data ? "white":"black" }} /></a>
                    <a href="#"><FaRegCircleQuestion style={{ fontSize: "30px",color:data ? "white":"black"  }} /></a>
                    <a href="#"><FaRegHeart style={{ fontSize: "30px",color:data ? "white":"black"  }} /></a>
                    <a href="#"><LuPhoneCall style={{ fontSize: "30px",color:data ? "white":"black"  }} /></a>

                </div>
                <button onClick={handleDark} className={data ? "darkMode" : "lightMode"}>{data ? "Dark" : "Light"}</button>

                <div className="profile">
                    <a href="#"><CgProfile style={{ fontSize: "30px",color:data ? "white":"black"  }} /></a>
                    <div className="details">
                        <h3 style={{ color: "#043E5F" }}>Your Account</h3>
                        <p style={{ color: "#07689F" }}>Revanth</p>
                    </div>
                    <button className='logout' onClick={handleLogout}>Logout</button>

                </div>

            </div>
        </>
    )
}

export default Navbar