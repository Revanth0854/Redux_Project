import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'

import { SlArrowRight } from "react-icons/sl";
import s2 from './Assets/section2.png'
import s3 from './Assets/cards.png'
import s4 from './Assets/cards2.png'
import s5 from './Assets/review.png'
import s6 from './Assets/cards3.png'
import Section from '../../Components/Section/Section';
import Footer from '../../Components/Footer/Footer';
import {useNavigate } from 'react-router-dom'
import Section0 from '../../Components/Section/Section0';
const Home = () => {
const navigate = useNavigate()
    const handleSearch = ()=>{
        navigate("/hotel")
    }


    return (
        <>
            <Navbar />
            <Section0/>
            <div className="section-1">
                <div className="content">
                    <h1 style={{color:"black"}}>Why Choose us ?</h1>
                    <button className="exploreBtn" onClick={handleSearch}>Explore More <SlArrowRight />  </button>
                </div>
                <h1 className='s1main'>Exclusive Hotel Search!</h1>
            </div>

            <div className="section-2">
                <div className="s2Btns">
                    <button>Special Offers</button>
                    <button>Last Search</button>
                    <button>Trending Destinations</button>
                    <button>Highest Reviewed</button>
                    <button>Highest Reviewed</button>
                </div>
                <div className="section-2img">
                    <img src={s2} alt="" />
                </div>
            </div>
            <div className="section-3">
                <div className="s3Content">
                    <h1>Special Offers</h1>
                    <img src={s3} alt="" />
                </div>
            </div>
            <div className="section-3">
                <div className="s3Content">
                    <h1>Make A Comprasion</h1>
                    <img src={s4} alt="" />
                </div>
            </div>
            <div className="section-4">
                <img src={s5} alt="" />
            </div>
            <div className="section-5">
                <img src={s6} alt="" />
            </div>
            <Section/>
            <Footer/>
        </>
    )
}

export default Home