import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
    const [search, setSearch] = useState("");
    return (
        <div className="Sidebar">
            <ul className="Items">
                <li className="Search">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        id="search"
                        value={search}
                        placeholder="Search"
                    />
                </li>
                <li className="Homeicon">
                    <Link to="/">Home</Link>
                </li>
                <li className="Diagnose">
                    <Link to="/">Diagnoses</Link>
                </li>
                <li className="Appointments">
                    <Link to="/">Appointments</Link>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;