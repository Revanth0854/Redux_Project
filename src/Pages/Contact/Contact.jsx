import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import './Contact.css'
import { BsCupHot } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { MdPets } from "react-icons/md";
import { LiaTshirtSolid } from "react-icons/lia";
import { BsXCircle } from "react-icons/bs";
import { MdSportsHandball } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";



const Contact = () => {
    const location = useLocation()

    const [data] = [location.state]


    return (
        <div>
            <Navbar />
            <div className="contactContainer">
                <h1 className='contactHeadM'>Payment Page</h1>
                <div className="contact">
                    <div className="contactLeft">
                        <div className="contactLeft1">
                            <img src={data.image1} alt="" />
                            <img src={data.image2} alt="" />
                            <img src={data.image3} alt="" />
                        </div>
                        <div className="contactLeft2">
                            <div className="head">
                                <h2>{data.name}</h2>
                                <p>Modern hotel at {data.location}</p>
                            </div>

                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}>More than  {data.reviews} Reviews <MdKeyboardArrowDown style={{ fontSize: "25px" }} /></p>


                            <h3 style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", gap: "10px", color: "black" }}><CiLocationOn style={{ fontSize: "20px" }} /> {data.location}</h3>

                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><BsCupHot /> Breakfast Included</h3>

                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><FaWifi /> Free WI-FI</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><LuParkingCircle /> Free Parking</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><MdPets /> Pets are Welcome</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><LiaTshirtSolid /> Free Laundry Service</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><BsXCircle /> No Smoking</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#565656"
                            }}><MdSportsHandball /> Free entrance Exercise Centre  </h3>

                        </div>
                    </div>
                    <div className="contactRight">
                        <div className="contactProfile">
                            <div className="profile0">
                                <a href="#"><CgProfile style={{ fontSize: "30px", color: "black" }} /></a>
                                <div className="details">
                                    <h3 style={{ color: "#043E5F" }}>Your Account</h3>
                                    <p style={{ color: "#07689F" }}>Revanth</p>
                                </div>
                            </div>

                            <h3 style={{ color: "#07689F", border: "1px solid #07689F", padding: "10px 20px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>Check Your Booking History < MdKeyboardArrowDown style={{ fontSize: "30px" }} /></h3>

                        </div>
                        <div className='contactHead'>
                            <h1>Enter Your Information</h1>
                            <p>Make Sure the Information that you Have already written in yoy Profile is Correct.</p>
                        </div>
                        <form className='form1'>
                            <div className='input1'>
                                <label>Full Name</label>
                                <input type="text" placeholder='Full Name' name='name' />
                            </div>
                            <div className='input1'>
                                <label >Email</label>
                                <input type="email" placeholder='alex@gmail.com' name='email' />
                            </div>
                            <div className='input1'>
                                <label >Phone</label>
                                <input type="text" placeholder='+91 1234567890' name='phone' />
                            </div>
                        </form>

                        <div className="banking">
                            <h1>Bank Card Information</h1>
                            <form className='form1'>
                                <div className='input1'>
                                    <label>Full Name on the Card</label>
                                    <input type="text" placeholder='Full Name' name='name' />
                                </div>
                                <div className='input1'>
                                    <label >Card Number</label>
                                    <input type="email" placeholder='...................' name='email' />
                                </div>
                                <div className='input1'>
                                    <label >EXP Date</label>
                                    <input type="text" placeholder='00/00' name='phone' />
                                </div>
                                <div className='input1'>
                                    <label >CVV</label>
                                    <input type="text" placeholder='000' name='phone' />
                                </div>
                            </form>
                        </div>

                        <div className="paymentBtns">
                            <button className='saveBtn'><CiHeart/>Save In Shortcut</button>
                            <button className='paymentBtn'>Payment</button>
                        </div>
                    </div>

                </div>
            </div>
            <Section />
            <Footer />
        </div>
    )
}

export default Contact