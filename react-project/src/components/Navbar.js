import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import './Navbar.css'; //external css

const Navbar = () => {
    return(
        <nav className="navbar">
            {/* main menu links */}
            <div className= "menu-link">
                <ul>
                    <li><a className="active" href="#home">Home</a></li>
                    <li><a href="#news">Academic</a></li>
                    <li><a href="#contact">Experience</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="https://www.linkedin.com/in/purnimagurung/" target= "_purnima"><FaLinkedin/></a></li>
                    <li><a href="https://github.com/purnimagurung" target="_purnima"><FaGithub/></a></li>
                </ul>
            </div>
         </nav>
    );
}
export default Navbar;