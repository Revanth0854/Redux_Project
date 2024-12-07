import Navbar from '../../Components/Navbar/Navbar'
import Section from '../../Components/Section/Section'
import Footer from '../../Components/Footer/Footer'
import { useSelector } from 'react-redux'
import './Hotel.css'
import Section0 from '../../Components/Section/Section0'
import { CiLocationOn } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Hotel = () => {
    const [page, setPage] = useState("1")
    const [change, setChange] = useState({
        start: 0,
        end: 4
    })
    const data = useSelector(state => state.register.data)
    const hotels = data.hotels
    const page1 = hotels.slice(change.start,change.end)
  

    console.log(hotels)

    const handleClick = (e) => {
        setPage(e.target.value)
        e.preventDefault()
        if (e.target.value == 1) {
            setChange(prevState => (
                {
                    ...prevState,
                    start: 0,
                    end: 4
                }
            ))
        }
        if (e.target.value == 2) {
            setChange(prevState => (
                {
                    ...prevState,
                    start: 4,
                    end: 8
                }
            ))
        }

        if (e.target.value == 3) {
            setChange(prevState => ({
                ...prevState,
                start: 8,
                end: 12
            }))
        }
        if (e.target.value == 4) {
            setChange(prevState => ({
                ...prevState,
                start: 12,
                end: 16
            }))
        }

    }

    const handlePrev = (e) => {
        e.preventDefault()

        if (page == 4) {
            setChange(prevState => ({
                ...prevState,
                start: prevState.start - 4,
                end: prevState.end - 4
            }))
            setPage("4")
        }
        if (page == 3) {
            setChange(prevState => ({
                ...prevState,
                start: prevState.start - 4,
                end: prevState.end - 4
            }))
            setPage("2")
        }
        if (page == 2) {
            setChange(prevState => ({
                ...prevState,
                start: prevState.start - 4,
                end: prevState.end - 4
            }))
            setPage("1")
        }
        if (page == 1) {
            setChange(prevState=>({
                ...prevState,
                start: 0,
                end: 4
        
            }))
        }
    }
    const handleNext = (e) => {
        e.preventDefault()

        if (page == 1 ) {
            setChange(prevState => ({
                ...prevState,
                start: prevState.start + 4,
                end: prevState.end + 4
            }))
            setPage("2")
        }
        if (page == 2 ) {
            setChange(prevState => ({
                ...prevState,
                start: prevState.start + 4,
                end: prevState.end + 4
            }))
            setPage("3")
        }
        if (page == 3) {
            setChange(prevState=>({
                ...prevState,
                start: 8,
                end: 12
        
            }))
            setPage("4")
        }
        if (page == 4) {
            setChange(prevState=>({
                ...prevState,
                start: 12,
                end: 16
        
            }))
        }
    }


    return (
        <>
            <Navbar />
            <Section0 />
            <div className="hotel">
                <div className="hotelLeft">
                    <h2>Filters</h2>
                </div>
                <div className="hotelRight" >
                    {
                        page1.map((item, index) => (
                            <div className="hotelCard" key={index}>
                                <div className="hotelCardLeft">
                                    <img src={item.image1} alt="" />
                                </div>
                                <div className="hotelCardRight">
                                    <div className="hotelContent1">
                                        <div className="part1">

                                            <h1>{item.name}</h1>

                                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", color: "#A6A6A6" }}><CiLocationOn style={{ fontSize: "25px" }} /> {item.location}</p>

                                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", color: "#A6A6A6" }}><PiCoffee style={{ fontSize: "25px" }} /> Breakfast Included</p>

                                            <h4 style={{ color: "#565656" }}>Rating : {item.rating} / 5.0
                                            </h4>

                                        </div>
                                        <div className="part2">
                                            <p style={{ color: "#A6A6A6" }}>Experience Unique Opportunity</p>
                                            <h2>{item.guestRating}</h2>
                                            <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}>{item.reviews} Reviews <MdKeyboardArrowDown style={{ fontSize: "25px" }} /></p>
                                        </div>
                                    </div>
                                    <div className="hotelContent2">
                                        <div className="price">
                                            <h3 style={{ color: "#E5062E" }}>{item.offer}</h3>
                                            <h2 style={{ color: "#4C9839" }}>₹ {item.price}</h2>
                                        </div>
                                        <h3 style={{ color: "#565656" }}>Includes taxes and charges</h3>
                                        <p style={{
                                            display: "flex", justifyContent: "flexStart", alignItems: "center",
                                            gap: "10px", color: "#4C9839"
                                        }}><IoLeafOutline />{item.level}</p>
                                        <p style={{
                                            display: "flex", justifyContent: "flexStart", alignItems: "center",
                                            gap: "10px", color: "#E5062E"
                                        }}><BsExclamationCircle />{item.availability}</p>
                                        <Link to={`/hotel/${item.id}`}>
                                            <h2 style={{
                                                display: "flex", justifyContent: "flexStart", alignItems: "center", color: "#07689F",
                                                cursor: "pointer"
                                            }}>See Availability <MdKeyboardArrowRight /> </h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                    <div className="pagination">
                        <button onClick={handlePrev}>Prev</button>
                        <button onClick={handleClick} value={1}>1</button>
                        <button onClick={handleClick} value={2}>2</button>
                        <button onClick={handleClick} value={3}>3</button>
                        <button onClick={handleClick} value={4}>4</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
            <Section />
            <Footer />
        </>
    )
}

export default Hotel