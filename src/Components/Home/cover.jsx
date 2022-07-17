import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/cover.jpg"
import { RiBallPenFill } from "react-icons/ri";


class Cover extends React.Component {
    render() {
        return <div className="cover_image">

            <div className="row m-0 p-5">
                <div className="col-12"
                ><h1 className="header_text" style={{ margin: "auto", width: "fit-content" }}>Choose what suits you
                    </h1></div>
                <div className="col-md-6 col-12 p-5 pt-0 text-justify">
                    <h1 className="header_text">
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
                <div className="col-md-6 col-12 p-5 pt-0 text-justify">
                    <h1 className="header_text">Live,
                        <span className="one">&nbsp;Group</span> online classes for English.
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
                    <div className="pt-md-2 mt-1 home_button_container" style={{ margin: "auto", width: "fit-content" }}>
                        <button className="bookBTN1">
                            <a href={"https://web.whatsapp.com/send?phone=9199&text=Hello, I would like to know more about the courses offered."}
                                target="_blank"
                                style={{ textDecoration: "none", color: "white" }}>Book Your Trial @ 99</a></button>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Cover;