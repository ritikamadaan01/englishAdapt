import React from 'react';
import "./../CSS/main.css"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedin
} from "react-icons/fa";


class Footer extends React.Component {
    render() {
        return <div className="row m-0 text-white p-4" style={{ backgroundColor: "#0a0d17", textAlign: "justify" }}>
            <div className="col-md-4 col-12 p-3">
                {/* <div>Logo</div> */}
                <h1>About Us</h1>
                <p style={{ color: "#c8c7ca" }}>English Adapt is a platform where you can practise conversations with highly
                    skilled trainers. This is a judgment-free space where people can freely speak
                    and enhance their language skills. It's not only a platform to practice but to
                    achieve proficiency in grammar, fluency, and every aspect of the English language
                    with the help of the trainers.
                </p>

            </div>
            <div className="col-md-4 col-12 p-3 text-left text-md-center ">
                <h1>Quick Links</h1>
                <div style={{ paddingLeft: 10 }} className="row text-center">
                    <div className="col-2 d-md-block d-none"></div>
                    <div className="col-2">
                        <a
                            href="https://www.facebook.com/people/EnglishAdapt/100083174766092/"
                            target="_blank" rel="noreferrer" style={{ color: "#c8c7ca", fontSize: "2em" }}>
                            <FaFacebookSquare />
                        </a></div>
                    <div className="col-2">
                        <a
                            href="https://twitter.com/EnglishAdapt/"
                            target="_blank" rel="noreferrer" style={{ color: "#c8c7ca", fontSize: "2em" }}>
                            <FaTwitterSquare />
                        </a></div>
                    <div className="col-2">
                        <a
                            href="https://www.instagram.com/english.adapt/"
                            target="_blank" rel="noreferrer" style={{ color: "#c8c7ca", fontSize: "2em" }}>
                            <FaInstagramSquare />
                        </a></div>
                    {/* <div className="col-2">
                        <a
                            href="#"
                            target="_blank" style={{ color: "#c8c7ca", fontSize: "2em" }}>
                            <FaYoutubeSquare />
                        </a></div> */}
                    <div className="col-2">
                        <a
                            href="https://www.linkedin.com/company/englishadapt/"
                            target="_blank" rel="noreferrer" style={{ color: "#c8c7ca", fontSize: "2em" }}>
                            <FaLinkedin />
                        </a></div>
                    <div className="col-2"></div>
                    <br />
                    <br />
                    <div className="col-12">
                        <br />
                        <a
                            href={"https://forms.gle/xv9G9iLSj5cAzD6w5"}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button type="button" class="btn btn-primary">
                                Contact Us
                            </button>
                        </a>
                    </div>
                </div>

            </div>
            <div className="col-md-4 col-12 p-3">
                <h1>Careers</h1>
                <p style={{ color: "#c8c7ca" }}>
                    If you would like to work as a Trainer, &nbsp;Sales Executive, &nbsp;Digital marketer or Coordinator
                    with us, mail your resume on hr@englishadapt.com.
                    <br />
                    <br />
                    <h6>Privacy {"&"} Refund Policy
                    </h6>
                    Terms and conditions

                </p>
            </div>

        </div>;
    }
}

export default Footer;