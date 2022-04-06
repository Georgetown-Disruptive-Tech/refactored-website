import React from "react";
import Marketing from "./Marketing";
import Operations from "./Operations";
import Events from "./Events";
import SpecialProjects from "./SpecialProjects";

function Teams(){
    return(
        <div>
            <section className="services" id="teams">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 center-xs">
                        <h2 className="section-title">Teams</h2>
                    </div>
                    </div>
                </div>
            </section>
            <section className="blurbs" id="benefits">
                <div className="container">
                    <div className="row margin-bottom-small center-xs">
                    
                        <Operations />

                        <Marketing />
                    
                    </div>
                    <div className="row center-xs">
                    
                        <Events />

                        <SpecialProjects />

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Teams;