import React from "react";

function Contact(){
    return (
        <section className="contact " id="contact">
            <div className="container ">
                <div className="row ">
                    <div className="col-md center-xs ">
                        <h2 className="section-title ">Contact</h2>
                    </div>
                </div>
                <div className="row margin-bottom-small center-xs ">
                    <div className="col-md ">
                        <h5>
                        Address
                        <br />
                        3700 O St. NW, Washington, D.C.
                        </h5>
                    </div>
                    <div className="col-md ">
                        <h5>
                        Email
                        <br />
                        disruptivetech@georgetown.edu
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;