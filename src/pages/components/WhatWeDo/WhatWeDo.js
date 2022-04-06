import React from "react";

import Education from "./Education";
import Networking from "./Networking";
import Projects from "./Projects";

function WhatWeDo(){
    return(
        <section className="intro" id="about-us">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">What We Do</h2>
                </div>
                </div>
                <div className="row margin-bottom ">
                    <Education></Education>

                    <Networking></Networking>
                
                    <Projects></Projects>
                </div>
            </div>
            </section>
    );
}

export default WhatWeDo;