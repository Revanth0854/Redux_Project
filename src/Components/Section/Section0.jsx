import React from 'react'
import { PiBuildingLight } from "react-icons/pi";
import { FaAngleDoubleDown } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
const Section0 = () => {

    const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate("/hotel")
    }
    return (
        <>
            <div className="section-0">
                <div className="s0head">
                    <h2 style={{ color: "#07689F" }}>Where is your Next Dream Place?</h2>
                    <p style={{ color: "#07689F" }}>Find exclusive Genius rewards in every corner of the world!</p>
                </div>
                <div className="s0Box">
                    <div className="s0sub">
                        <h4>Place</h4>
                        <div className="subBox">
                            <PiBuildingLight style={{ fontSize: "25px" }} />
                            <p>Gutenberg</p>
                        </div>
                    </div>
                    <div className="s0sub">
                        <h4>VIP</h4>
                        <div className="subBox">
                            <p>Long Lasting</p>
                            <FaAngleDoubleDown style={{ fontSize: "25px" }} />
                        </div>
                    </div>
                    <div className="s0sub1">
                        <h4>Passengers - Room Condition</h4>
                        <div className="subsub">
                            <div className="subBox1">
                                <IoIosMan style={{ fontSize: "25px" }} />
                                <p>2 Adults - 3 Chldren</p>
                            </div>
                            <div className="subBox1">
                                <p>Two Rooms</p>
                                <FaAngleDoubleDown style={{ fontSize: "25px" }} />
                            </div>
                        </div>

                    </div>
                    <div className="s0sub">
                        <h4>Check in-Check out</h4>
                        <div className="subBox">
                            <SlCalender style={{ fontSize: "25px" }} />
                            <p>18 Dec 2023 - 23 Dec 2023</p>
                        </div>
                    </div>
                    <button className='searchBtn' onClick={handleSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default Section0