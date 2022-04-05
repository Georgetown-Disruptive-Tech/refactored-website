import React from "react";
import President from "./President";
import VP from "./VP";
import HeadOps from "./HeadOps";
import HeadMarketing from "./HeadMarketing";
import HeadEvents from "./HeadEvents";
import HeadSP from "./HeadSP";

function Leadership(){
    return(
        <div>
            <section className="intro" id="leadership">
            <div className="container">
                <div className="row">
                <div className="col-md">
                    <h2 className="section-title">Leadership</h2>
                </div>
                </div>
                <div className="row team center-xs">
                
                    <President />

                    <VP />

                    <HeadOps />
                </div>

                <div className="row team center-xs ">
                
                    <HeadMarketing />

                    <HeadEvents />

                    <HeadSP />
                
                </div>
            </div>
            </section>
        </div>
    );
}

export default Leadership;