import React from "react";
import { Link } from "react-router-dom";


function TopMenu(){
    return (
        <div className="col-md menu">
            <ul className="menu">
                <li><a href="#contact">Contact</a></li>
                <li>
                    <Link to="/recruitment">Recruitment</Link>
                </li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#teams">Our Teams</a></li>
            </ul>
        </div>
    );
}

export default TopMenu;