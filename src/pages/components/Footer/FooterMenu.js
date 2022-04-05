import React from "react";
import { Link } from "react-router-dom";

function FooterMenu(){
    return (
        <div className="col-md-4 ">
            <ul>
                <li>
                    <a href="#about-us ">About us</a>
                </li>
                <li>
                    <a href="#teams ">Team</a>
                </li>
                <li>
                    <a href="#leadership ">Leadership</a>
                </li>
                <li>
                    <Link to="/recruitment">Recruitment</Link>
                </li>
                <li>
                    <a href="#contact ">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterMenu;