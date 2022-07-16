import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/eng.jpeg"
import { RiBallPenFill } from "react-icons/ri";


// RiChatCheckLine

class WhyEnglishAdapt extends React.Component {
    render() {
        const { whyEnglishAdaptList } = this.props
        console.log("ss", whyEnglishAdaptList)
        return <div className="row pt-5 p-5 m-0" style={{ backgroundColor: "#f6f8fe" }}>
            <div className="col-md-6 col-12 text-justify why_clapingo ">
                <div className="margin-wrapper">
                    <p className="title-why">
                        Why
                        <span className="one"
                            style={{
                                fontWeight: "bold"
                            }}>
                            &nbsp;EnglishAdapt&nbsp;
                        </span>
                        is your
                        <br />
                        best option?
                    </p>

                    <div className="points margin_point-5">
                        {whyEnglishAdaptList.map((item, i) => (
                            <div className="why_flex" key={i}>

                                <p className="why_subtitle"> <RiBallPenFill /> {item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="col-md-6 col-12 p-5 text-justify">
                <div className="">
                    <img
                        className="eng_image"
                        // src="https://images.weserv.nl/?url=https://s3.ap-south-1.amazonaws.com/cdn.clapingo.com/clapingoWeb/top.png&amp;w=542&amp;h=484&amp;output=webp"
                        // src={}
                        alt="clapingo header" />
                </div>
            </div>

        </div>
    }
}

export default WhyEnglishAdapt;