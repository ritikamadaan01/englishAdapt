import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/Do_you_speak.jpeg"
import { RiBallPenFill } from "react-icons/ri";


// RiChatCheckLine

class WhyEnglishAdapt extends React.Component {
    render() {
        const { whyEnglishAdaptList } = this.props

        return <div className="row p-5 m-5" >

            <div className="col-md-6 col-12 text-justify why_adapt ">

                <div className="p-3 " >
                    <p className="title-why">
                        Why
                        <span className="one"
                            style={{
                                fontWeight: "bold"
                            }}>
                            &nbsp;English Adapt&nbsp;
                        </span>
                        is your
                        <br />
                        best option?
                    </p>

                    <div className="points margin_point-5">
                        {whyEnglishAdaptList.map((item, i) => (
                            <div className="" key={i}>

                                <p className="why_subtitle"> <RiBallPenFill />&nbsp;&nbsp; {item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="col-md-6 d-md-block d-none text-justify">
                <div>
                    <img
                        className="eng_image"
                        src={eng}
                        alt="English Adapt" />
                </div>

            </div>

        </div >
    }
}

export default WhyEnglishAdapt;