import React from 'react'
import img from './Assets/barcode.png'
import './Section.css'

const Section = () => {
    return (
        <>
            <div className="container">
                <div className="Ccontent">
                    <div className="contentLeft">
                        <h2>Go Further With The EasySet24 App</h2>
                        <p>Enjoy savings on chosen hotels and flights when you book through the EasySet24 website. Additionally, earn One Key Cash for every booking made through the app.</p>
                        <p>Secured By Europe GTP</p>
                    </div>

                    <div className="contentRight">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section