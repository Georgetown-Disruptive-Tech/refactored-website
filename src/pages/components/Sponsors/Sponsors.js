import React from "react";
import GoogleDevs from "./GoogleDevs";
import Ixperience from "./Ixperience";
import Monday from "./Monday";
import Ripplematch from "./Ripplematch";

function Sponsors(){
    return (
        <section className="blurbs" id="benefits">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="section-title">Sponsors</h2>
                    </div>
                </div>
                
                <Ripplematch />

                <GoogleDevs />

                <Monday />

                <Ixperience />
            </div>
        </section>
    );
}

export default Sponsors;