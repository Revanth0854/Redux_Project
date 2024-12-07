import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Section0 from '../../Components/Section/Section0'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import './HotelDetails.css'
import { PiCoffee } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const HotelDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const response = useSelector(state => state.register.data.hotels)

    const data = response.find(item => item.id == id)
    console.log(data)

    const handleBook = (e) => {
        e.preventDefault()
        navigate("/contact", { state: data })
    }

    return (
        <div>
            <Navbar />
            <Section0 />
            <div className="detailsContainer">
                <h1 style={{ fontSize: "3rem" }} className='raja'> Hotel Details </h1><br /><br />
                <div className="detailsContent">

                    <div className="detailsImages">
                        <div className="subImage1">
                            <img src={data.image1} alt="" />
                        </div>
                        <div className="subImage2">
                            <img src={data.image2} alt="" />
                            <img src={data.image3} alt="" />
                        </div>
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsLeft">
                            <h1>{data.name}</h1>
                            <p>Description : {data.description}</p>
                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", gap: "5px", color: "#A6A6A6" }}><PiCoffee style={{ fontSize: "25px" }} /> Breakfast Included</p>
                            <h3 style={{ color: "#565656" }}>Rating : {data.rating} / 5.0 </h3>
                            <h2>{data.guestRating}</h2>
                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}>{data.reviews} Reviews <MdKeyboardArrowDown style={{ fontSize: "25px" }} /></p>



                        </div>
                        <div className="hotelDetailsRight">
                            <div className="detailsPrice">
                                <h2 style={{ color: "#E5062E" }}>{data.offer}</h2>
                                <h1 style={{ color: "#4C9839", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>₹ {data.price} <span>Per Night</span></h1>
                            </div>
                            <h2 style={{ color: "#565656" }}>Includes taxes and charges</h2>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#4C9839"
                            }}><IoLeafOutline />{data.level}</h3>
                            <h3 style={{
                                display: "flex", justifyContent: "flexStart", alignItems: "center",
                                gap: "10px", color: "#E5062E"
                            }}><BsExclamationCircle />{data.availability}</h3>
                            <h2 style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", color: "black" }}><CiLocationOn style={{ fontSize: "25px" }} /> {data.location}</h2>

                            <button className="bookBtn" onClick={handleBook}>Book Now</button>


                        </div>
                    </div>
                </div>
            </div>
            <Section />
            <Footer />
        </div>
    )
}

export default HotelDetails