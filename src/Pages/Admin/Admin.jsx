import React, { useState } from 'react'
import './Admin.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { CiLocationOn } from "react-icons/ci";
import { PiCoffee } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import Section0 from '../../Components/Section/Section0';

const Admin = () => {

    const data = useSelector(state => state.register.data.hotels)

    console.log(data)

    const [admin, setAdmin] = useState({
        name: "",
        location: "",
        image1: "",
        image2: "",
        image3: "",
        rating: "",
        guestRating: "",
        reviews: "",
        offer: "",
        price: "",
        level: "",
        availability: "",
        description: ""
    })

    const [fetch, setFetch] = useState("")

    const findData = data.find(
        (item) =>
          item.name.toLowerCase() === fetch.trim().toLowerCase()
      );
      
    console.log("findData:", findData);

    const [dispaly, setDisplay] = useState({
        add: false,
        delete: true,
        fetch: false
    })

    const validateForm = () => {
        if (!admin.name && !admin.location && !admin.image1 && !admin.image2 && !admin.image3 && !admin.rating && !admin.guestRating && !admin.reviews && !admin.offer && !admin.price && !admin.availability && !admin.description) {
            toast.warning("Please fill all details")
            return false
        }
        return true
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setAdmin(state => ({ ...state, [name]: value }))
    }

    const handleAdd = (e) => {
        e.preventDefault()
        setDisplay({ ...dispaly, add: true, delete: false })
    }



    const handleDelete = (e) => {
        e.preventDefault()
        setDisplay({ ...dispaly, delete: true, add: false })
    }
    const handleFetch = (e) => {
        setFetch(e.target.value)
    }
    const handleFetchClick = (e) => {
        e.preventDefault()
        if (!fetch.trim()) {
            toast.warning("Please enter a valid hotel name")
            return
        }
        setDisplay({ ...dispaly, fetch: true })
    }

    const handleAddData = async (e) => {
        e.preventDefault()
        if (!validateForm()) {
            return
        }
        try {
            await axios.post('https://redux-server-w0s1.onrender.com/hotels', admin)
            toast.success("Posted Successfully")
        }
        catch (error) {
            toast.error("Failed to post Data")
        }
    }



    const handleDeleteCard = (e) => {
        e.preventDefault()
        axios.delete(`https://redux-server-w0s1.onrender.com/hotels/${findData.id}`)

    }

    return (
        <>
            <Navbar />
            <Section0/>
            <div className="admin">
                <div className="adminBtns">
                    <button className='addBtn' value={dispaly.add} onClick={handleAdd}>Add</button>
                    <button className='deleteBtn' value={dispaly.delete} onClick={handleDelete}>Delete</button>
                </div>
                {
                    dispaly.delete &&



                    <div className="adminFetch">
                        <h2>Hotel Names</h2>

                        <div className="hotelName">
                            {
                                data.length === 0 ?
                                    (
                                        <h1>No Hotels Available</h1>
                                    ) : (
                                        data.map((item) => (
                                            <p key={item.id}>{item.name}</p>
                                        ))
                                    )
                            }
                        </div>
                        <input type="text" placeholder='Enter Hotel Name' className='fetchHotel' onChange={handleFetch} value={fetch} />
                        <button className='fetchBtn' value={dispaly.fetch} onClick={handleFetchClick}>Fetch Hotel</button>

                        {
                            dispaly.fetch && (
                                findData ?
                                    (
                                        <div className="hotelsCard">
                                            <div className="hotelCardLeft">
                                                <img src={findData.image1} alt="" />
                                            </div>
                                            <div className="hotelCardRight">
                                                <div className="hotelContent1">
                                                    <div className="part1">

                                                        <h1>{findData.name}</h1>

                                                        <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", color: "#A6A6A6" }}><CiLocationOn style={{ fontSize: "25px" }} /> {findData.location}</p>

                                                        <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center", color: "#A6A6A6" }}><PiCoffee style={{ fontSize: "25px" }} /> Breakfast Included</p>

                                                        <h4 style={{ color: "#565656" }}>Rating : {findData.rating} / 5.0
                                                        </h4>

                                                    </div>

                                                    <div className="part2">
                                                        <p style={{ color: "#A6A6A6" }}>Experience Unique Opportunity</p>
                                                        <h2>{findData.guestRating}</h2>
                                                        <p style={{ display: "flex", justifyContent: "flexStart", alignItems: "center" }}>{findData.reviews} Reviews <MdKeyboardArrowDown style={{ fontSize: "25px" }} /></p>
                                                    </div>
                                                </div>
                                                <div className="hotelContent2">
                                                    <div className="price">
                                                        <h3 style={{ color: "#E5062E" }}>{findData.offer}</h3>
                                                        <h2 style={{ color: "#4C9839" }}>₹ {findData.price}</h2>
                                                    </div>
                                                    <h3 style={{ color: "#565656" }}>Includes taxes and charges</h3>
                                                    <p style={{
                                                        display: "flex", justifyContent: "flexStart", alignItems: "center",
                                                        gap: "10px", color: "#4C9839"
                                                    }}><IoLeafOutline />{findData.level}</p>
                                                    <p style={{
                                                        display: "flex", justifyContent: "flexStart", alignItems: "center",
                                                        gap: "10px", color: "#E5062E"
                                                    }}><BsExclamationCircle />{findData.availability}</p>

                                                    <button className='deleteCard' onClick={handleDeleteCard}>Delete Card</button>

                                                </div>
                                            </div>
                                        </div>
                                    ) : 
                           
                        <h1>{fetch.trim() ? "Data not Found" : "Please enter a valid Hotel Name"}</h1>
                        
                        )
                    
                    }
                    </div>
                    }
                {
                    dispaly.add &&
                    <form className='adminForm'>
                        <input type="text" placeholder="name" name="name" value={admin.name} onChange={handleChange} />
                        <input type="text" placeholder="location" name="location" value={admin.location} onChange={handleChange} />
                        <input type="text" placeholder="image1-URL" name="image1" value={admin.image1} onChange={handleChange} />
                        <input type="text" placeholder="image2-URL" name="image2" value={admin.image2} onChange={handleChange} />
                        <input type="text" placeholder="image3-URL" name="image3" value={admin.image3} onChange={handleChange} />
                        <input type="text" placeholder="rating" name="rating" value={admin.rating} onChange={handleChange} />
                        <input type="text" placeholder="guestRating" name="guestRating" value={admin.guestRating} onChange={handleChange} />
                        <input type="text" placeholder="reviews" name="reviews" value={admin.reviews} onChange={handleChange} />
                        <input type="text" placeholder="offer" name="offer" value={admin.offer} onChange={handleChange} />
                        <input type="text" placeholder="price" name="price" value={admin.price} onChange={handleChange} />
                        <input type="text" placeholder="level-eg:Trip Sustainable Level-5" name="level" value={admin.level} onChange={handleChange} />
                        <input type="text" placeholder="availability-eg:Only 5 Left" name="availability" value={admin.availability} onChange={handleChange} />
                        <input type="text" placeholder="description" name="description" value={admin.description} onChange={handleChange} />
                        <button className='addData' onClick={handleAddData}>ADD</button>
                    </form>
                }
            </div>
            <Footer />
        </>
    )
}

export default Admin