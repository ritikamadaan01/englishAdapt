import React, { Component } from 'react';
import "./../../CSS/main.css"
import eng from "../../Assets/eng.jpeg"
import { RiBallPenFill } from "react-icons/ri";


// RiChatCheckLine

class WhyEnroll extends React.Component {
    render() {
        const { enroll_list } = this.props;

        return <div className="row pt-2 p-5" style={{ backgroundColor: "#fafafa" }}>
            <div className="col-12 m-5 text-justify">

                <div className="faq">
                    <h1 className="home_text_3">Who should enrol?
                        <br />
                        Enrol if this&nbsp;
                        <span style={{
                            color: "rgb(77, 197, 145)"
                        }}>
                            sounds&nbsp;
                        </span>like you
                    </h1>

                    <div className="points margin_point-5">
                        {enroll_list.map((item, i) => (
                            <div className="why_flex" key={i}>

                                <p className="why_subtitle"> <RiBallPenFill /> {item}
                                </p>
                            </div>))}

                    </div>
                </div>

            </div>

        </div>

    }
}

export default WhyEnroll;