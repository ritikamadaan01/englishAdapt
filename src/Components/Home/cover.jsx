import React, { Component } from 'react';
import "./../../CSS/main.css"
// import eng from "../../Assets/cover.jpg"


class Cover extends Component {
    render() {
        return <div className="cover_image">

            <div className="row m-0 p-md-5 pt-5 ">
                <div className="col-12"
                ><h1 className="header_text" style={{ margin: "auto", width: "fit-content" }}>Choose what suits you
                    </h1></div>
                <div className="col-md-6 col-12 p-md-5 pt-md-0 p-5 pb-0 pt-0 text-justify">
                    <h1 className="header_text">
                        Live,
                        <span className="one"> one on one </span>
                        online classes for English.
                        <br />
                    </h1>
                    <div className="home_text_1">
                        <p >
                            Practice english conversation with proficient trainers
                            across the country and unleash your fluency

                        </p>
                    </div>

                </div>
                <div className="col-md-6 col-12 p-md-5 pt-md-0 p-5 pt-0 text-justify">
                    <h1 className="header_text">Live,
                        <span className="one">&nbsp;Group</span> online classes for English.
                        <br />
                    </h1>
                    <div className="home_text_1">
                        <p >
                            Unleash your fluency and boost your confidence talking
                            to a group of people across the country from varied fields.
                        </p>
                    </div>
                </div>

                <div className="col-12 text-center pb-md-0 pb-5">
                    <div className="pt-md-2 mt-1 home_button_container" style={{ margin: "auto", width: "fit-content" }}>
                        <button className="bookBTN1">
                            <a href={"https://wa.me/918999800008?text=Hello, I would like to know more about the courses offered."}
                                target="_blank"
                                rel="noreferrer"
                                style={{ textDecoration: "none", color: "white" }}>Book Your Trial @ 99</a></button>
                    </div>
                </div>
            </div>
        </div >
    }
}

export default Cover;