import React from 'react';
import { Link } from "react-router-dom";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Navbar.css'; //external css

const Navbar = () => {
    return(
        <nav className="navbar">
            {/* main menu links */}
            <div className= "menu-link">
                <ul>
                <li><Link className="active" to="/">Home</Link></li>
                <li><Link className="active" to="/contact">Contact</Link></li>
                    <li><a href="#news">Academic</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="https://www.linkedin.com/in/purnimagurung/" target= "_purnima"><FaLinkedin/></a></li>
                    <li><a href="https://github.com/purnimagurung" target="_purnima"><FaGithub/></a></li>
                </ul>
            </div>
         </nav>
    );
}
export default Navbar;