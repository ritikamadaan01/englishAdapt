import React, { Component } from 'react';
import "./../CSS/main.css"


class Footer extends React.Component {
    render() {
        return <div className="row m-0 text-white p-5" style={{ backgroundColor: "#0a0d17" }}>
            <div className="col-md-4 col-12 p-3">
                {/* <div>Logo</div> */}
                <h1>About Us</h1>
                <p >English Adapt is a platform where you can practise conversations with highly
                    skilled trainers. This is a judgment-free space where people can freely speak
                    and enhance their language skills. It's not only a platform to practice but to
                    achieve proficiency in grammar, fluency, and every aspect of the English language
                    with the help of the trainers.
                </p>
            </div>
            <div className="col-md-4 col-12 p-3">
                <h1>Careers</h1>
                <p style={{ color: "#c8c7ca" }}>
                    If you would like to work as a Trainer
                    Sales Executive
                    Digital marketer
                    with us send your resume (email address to send resume)
                    Terms and conditions

                </p>
            </div>
            <div className="col-md-4 col-12 p-3">
                <h1>Privacy and Policy
                    Refund Policy
                </h1>
                <div style={{ color: "#c8c7ca" }}>Facebook</div>
                <div style={{ color: "#c8c7ca" }}>Twitter</div>
                <div style={{ color: "#c8c7ca" }}>Instagram</div>
                <div style={{ color: "#c8c7ca" }}>Youtube</div>
                <div style={{ color: "#c8c7ca" }}>Linkedin</div>

            </div>

        </div>;
    }
}

export default Footer;