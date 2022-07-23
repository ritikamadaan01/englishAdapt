import React from 'react';
import "./../CSS/main.css"
// import eng from "../Assets/business_english.jpeg"
import { RiBallPenFill } from "react-icons/ri";

class BusinessEnglish extends React.Component {
    render() {
        return <div className="row g-0" style={{ backgroundColor: "#f6f5ef" }}>


            <div className="col-md-6 col-12 p-3 text-justify">

                <div className="bussiness">
                    <h1 className="bussiness_eng">Feel stuck in &nbsp;
                        <span className="one">
                            professional
                        </span>
                        &nbsp; growth?
                    </h1>

                    <div className="business_text_1">
                        <p className="">
                            Business English course is designed to train you to communicate effectively in
                            English in professional contexts. The course is centered to expand your Formal
                            English vocabulary and enhance your ability to write and speak in English. Our
                            experienced trainers will also help you to learn terminology and skills that
                            are required for your professional growth like business negotiations, telephone
                            conversations, email writing, emotional intelligence, and presentations skills.
                        </p>
                    </div>


                    <div className="points margin_point-5">

                        <div className="">
                            <p className="why_subtitle"> <RiBallPenFill />&nbsp;&nbsp; Improve Confidence</p>
                        </div>
                        <div className="">
                            <p className="why_subtitle"> <RiBallPenFill />&nbsp;&nbsp; Learn Effective Communication</p>
                        </div>
                        <div className="">
                            <p className="why_subtitle"> <RiBallPenFill />&nbsp;&nbsp; Achieve Fluency</p>
                        </div>
                        <div className="">
                            <p className="why_subtitle"> <RiBallPenFill />&nbsp;&nbsp; Enhance Accuracy</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="col-md-6 d-md-block d-none business_eng_image">

            </div>

        </div>
    }
}

export default BusinessEnglish;