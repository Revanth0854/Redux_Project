import React from 'react'
import './Footer.css'
import pay from './Assets/payment.png'
import { CiMail } from "react-icons/ci";
import { TbCircleLetterR } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";

import img from './Assets/social.png'
import { useSelector } from 'react-redux';
import { BsLadder } from 'react-icons/bs';
const Footer = () => {

    const data =useSelector(state=> state.register.theme)

    return (
        <>
            <footer>
                <div className="footerContent">
                    <div className="card">
                        <h3>About Us</h3>
                        <p>Our Story</p>
                        <p>Work With Us</p>
                        <p>Press & Media</p>
                        <p>Privacy & Security</p>
                    </div>
                    <div className="card">
                        <h3>We Offer</h3>
                        <p>Trip Sponsership</p>
                        <p>Last Minutes Flights</p>
                        <p>Best Deals</p>
                        <p>AI-Driven Search</p>
                    </div>
                    <div className="card">
                        <h3>Headquarters</h3>
                        <p>England</p>
                        <p>France</p>
                        <p>Canada</p>
                        <p>Iceland</p>
                    </div>
                    <div className="card">
                        <h3>Travel Blogs</h3>
                        <p>Bali Travel Guide</p>
                        <p>Sri Travel Guide</p>
                        <p>Peru Travel Guide</p>
                        <p>Swiss Travel Guide</p>
                    </div>
                    <div className="card">
                        <h3>Activities</h3>
                        <p>Tour Leading</p>
                        <p>Cruising & sailing</p>
                        <p>Camping</p>
                        <p>Kayaking</p>
                    </div>
                    <div className="card">
                        <h3>Service</h3>
                        <p>Report Error</p>
                        <p>Ask online</p>
                        <p>Travel insurance</p>
                    </div>
                </div>
                <div className="footer2">
                    <img src={pay} alt="" />
                    <img src={img} alt="" />

                    <div className="email">
                        <h4>Email</h4>
                        <div className="emailInput">
                            <div className="Input">

                                <CiMail style={{ fontSize: "30px" }} />
                                <input type="email" placeholder='Enter your Email' />

                            </div>
                            <button className='subscribeBtn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyContent">
                        <TbCircleLetterR style={{fontSize:"25px", color:"black"}}/>
                        <p style={{color: "black"}}>Copyright EasySet24</p>
                    </div>
                    <div className="copyContent">
                        <CiMail style={{fontSize:"25px", color:"black"}}/>
                        <p style={{color: "black"}}>easyset24@gmail.com</p>
                    </div>
                    <div className="copyContent">
                        <h3 style={{color: "black"}}>"EasySet24: Seamless Journeys, Unrivalled Travel Wisdom!"</h3>
                    </div>
                    <div className="copyContent">
                        <CiLocationOn style={{fontSize:"25px", color:"black"}}/>
                        <p style={{color: "black"}}>123 Oxford Street,London</p>
                    </div>
                    <div className="copyContent">
                        <FiPhoneCall style={{fontSize:"25px", color:"black"}}/>
                        <p style={{color: "black"}}>+44 20 7123 4567</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer