import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/eng.jpeg"
import { RiBallPenFill } from "react-icons/ri";


class Cover extends React.Component {
    render() {
        return <div className="row pt-2 p-5 mt-3" style={{ backgroundColor: "#f6f5ef" }}>

            <div className="col-md-12 d-md-block d-none ">
                <div className="">
                    <img
                        className="eng_image"
                        // src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/top.png&amp;w=542&amp;h=484&amp;output=webp"
                        src={eng}
                        alt="English Adapt header" />
                </div>

            </div>

            <div className="col-md-6 col-12 p-5 text-justify">
                <h1 className="header_text">
                    Choose what suits you-
                    <br />
                    Live,
                    <span className="one"> one-on-one </span>
                    online classes for English.
                    <br />
                </h1>
                <div className="home_text_1">
                    <p className="sub_header_text">
                        Practice english conversation with proficient trainers
                        <br />
                        across the country and unleash your fluency

                    </p>
                </div>

            </div>
            <div className="col-md-6 col-12 p-5 text-justify">
                <h1 className="header_text">
                    Live, Group online classes for English.
                    <br />
                </h1>
                <div className="home_text_2">
                    <p className="sub_header_text">
                        Unleash your fluency and boost your confidence talking
                        to a group of people across the country from varied fields.
                    </p>
                </div>
            </div>

            <div className="col-12 text-center">
                <div className="pt-md-2 mt-1 home_button_container">
                    <button className="bookBTN1">Book Your Trial @ ₹99</button>
                </div>
            </div>
        </div >
    }
}

export default Cover;