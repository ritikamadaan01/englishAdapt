import React from 'react';
import "./../../CSS/main.css"
// import eng from "../../Assets/why_enroll.jpeg"
import { RiBallPenFill } from "react-icons/ri";


// RiChatCheckLine

class WhyEnroll extends React.Component {
    render() {
        const { enroll_list } = this.props;

        return <div className="row g-0" style={{ backgroundColor: "#fafafa" }}>

            <div className="col-md-6 d-md-block d-none why_enroll_image">

            </div>
            <div className="col-md-6 col-12 text-justify pr-5">

                <div className="faq">
                    <h1 className="why_enrol">Who should enrol?
                        <br />
                        Enrol if this&nbsp;
                        <span className="one">
                            sounds&nbsp;
                        </span>like you
                    </h1>

                    <div className="margin_point-5">
                        {enroll_list.map((item, i) => (
                            <div className="enroll_flex" key={i}>
                                <p className="enrol_subtitle row g-0">
                                    <span className="col-1 m-0 "
                                        style={{
                                            padding: "0",
                                            paddingLeft: "2%",
                                            paddingRight: "1%"

                                        }}><RiBallPenFill /></span>


                                    <span className="col-11 m-0 p-0">{item}</span>
                                </p>

                            </div>))}

                    </div>
                </div>

            </div>

        </div >

    }
}

export default WhyEnroll;