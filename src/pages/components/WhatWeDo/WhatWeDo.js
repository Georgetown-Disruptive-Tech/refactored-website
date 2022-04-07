import React from "react";
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
                    {/* < Education /> */}
                    <ActivityDescription name="Projects" 
                    description="We provide opportunities for novice tech enthusiasts to
                    learn programming skills, graphic design, and explore the
                    thematics of different branches of tech." />

                    {/* < Networking /> */}
                    <ActivityDescription name="Networking" 
                    description="GDT has hosted various events with key members from the
                    tech industry as well as high ranking government
                    officials. Connect with recruiters and key personnel
                    through our partnerships and events." />
                
                    {/* < Projects /> */}
                    <ActivityDescription name="Projects" 
                    description="GDT members have the opportunity to engage in a range of
                    partnership-driven special research, web design, and tech
                    consulting projects to enhance and expand their skill set." />
                </div>
            </div>
            </section>
    );
}

export default WhatWeDo;