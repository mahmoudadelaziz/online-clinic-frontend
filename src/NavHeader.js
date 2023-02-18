import React from "react";
import { Link } from "react-router-dom";

function NavHeader(){
    return(
        <ul id="NavBar">
            <li>
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
        </ul>
    )
}

export default NavHeader;