import React from "react";

import Education from "./Education";
import Networking from "./Networking";
import Projects from "./Projects";
import ActivityDescription from "./ActivityDescription";

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

                    {/* <Networking></Networking> */}
                    <ActivityDescription name="Networking" 
                    description="GDT has hosted various events with key members from the
                    tech industry as well as high ranking government
                    officials. Connect with recruiters and key personnel
                    through our partnerships and events." />
                
                    <Projects></Projects>
                </div>
            </div>
            </section>
    );
}

export default WhatWeDo;