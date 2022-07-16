import React, { useState } from "react";
import "../CSS/navbar.css"
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaDiscord
    // IoLogoDiscord
} from "react-icons/fa";
// import {
//     IoLogoDiscord
// } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink as Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <Link to='/home' activeStyle>
                        <img
                            src={require('../Assets/English_Adapt-removebg-preview.png')}
                            alt="dFuse logo"
                            className="navIco"
                        />
                    </Link>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <Link
                                to={{
                                    pathname: '/home',
                                    // hash: '#HowItWorks',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/BusinessEnglish',
                                    // hash: '#Strategies',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Business English
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/plans',
                                    // hash: '#Risk_Parity',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Plans
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/blogs',
                                    // hash: '#Tokenomics',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Blog
                            </Link>
                        </li>

                    </ul>
                </div>
                {/* 3rd social media links */}
                <div className="social-media">
                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)} style={{ color: "black" }}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;