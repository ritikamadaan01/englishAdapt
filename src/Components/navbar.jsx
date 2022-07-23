import React, { useState } from "react";
import "../CSS/navbar.css"

import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink as Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav bg-light">
                {/* 1st logo part  */}
                <div class="container">
                    <Link to='/home' activeStyle>
                        <img
                            style={{ height: "100px" }}
                            src={require('../Assets/English_Adapt-removebg-preview.png')}
                            alt="English Adapt logo"
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
                        {/* <li>
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
                        </li> */}

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