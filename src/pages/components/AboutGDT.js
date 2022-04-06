import React from "react";

function AboutGDT(){
    return (
        <section className="intro" id="about-us">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h2 className="section-title">About GDT</h2>
                    </div>
                </div>
                <div className="row margin-bottom ">
                    <div className="col-md">
                        <h5>
                        Founded on the hilltop of D.C., Georgetown Disruptive
                        Technology is the leading technology-oriented club at
                        Georgetown University.
                        <br />
                        <br />
                        <p>
                        {" "}
                        We offer various technical workshops and networking
                        events to students and invite guest speakers
                        throughout the academic year.{" "}
                        <br />
                        In addition, We also provide tech-consulting for
                        startups, organizations, or personal projects.{" "}
                        </p>
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutGDT;