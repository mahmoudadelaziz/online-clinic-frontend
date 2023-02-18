import React from "react";
import { Link } from "react-router-dom";

function NavHeader(){
    return(
        <ul id="NavBar">
            <li id="HomeButton">
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to="/Doctors">Doctors</Link>
            </li>
            <li>
                <Link to="/Contact">Contact Us</Link>
            </li>
            <li id="rightSide">
                <Link to="/Doctors">For Doctors</Link>
            </li>
            <li id="rightSide">
                <Link to="/SignUp">Sign Up</Link>
            </li>
            <li id="rightSide">
                <Link to="/SignIn">Sign In</Link>
            </li>
        </ul>
    )
}

export default NavHeader;