import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/cover.jpg"
import { RiBallPenFill } from "react-icons/ri";


class Cover extends React.Component {
    render() {
        return <div className="cover_image">

            <div className="row m-0 p-5">
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
                            across the country and unleash your fluency

                        </p>
                    </div>

                </div>
                <div className="col-md-6 col-12 p-5 text-justify">
                    <h1 className="header_text">
                        <span className="one"> Live, Group </span> online classes for English.
                        <br />
                    </h1>
                    <div className="home_text_1">
                        <p className="sub_header_text">
                            Unleash your fluency and boost your confidence talking
                            to a group of people across the country from varied fields.
                        </p>
                    </div>
                </div>

                <div className="col-12 text-center">
                    <div className="pt-md-2 mt-1 home_button_container">
                        <button className="bookBTN1">Book Your Trial @ &#x20B9; 99</button>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Cover;