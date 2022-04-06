import React from "react";
import andrew from '../../../img/andrew-rozanov.jpeg' //need to change


function HeadSP(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box ">
                <img src={andrew} className="person-image"/>
                
                <div className="hover-inner-box ">
                    <div className="hover-content ">
                        <h3>Alexandra Giorno</h3>
                        <p>
                            Alexandra is a Junior in the College studying
                            Computer Science from Nice, France and grew up in
                            South Florida.
                            <br />
                            <br />
                                Alexandra is interested in frontend development,
                                product design, and product management. Outside
                                of school, she loves to cook, travel, and find
                                new music.{" "}
                            
                            
                            <br />
                            <br />
                                This semester, Alexandra is excited to expand
                                Special Projects into several teams consisting
                                of technical consulting, web development, and
                                the Google Solutions Challenge.{" "}
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Alexandra Giorno<br />
                <span className="position ">
                    Head of Special Projects
                </span>
            </p>
        </div>
    );
}

export default HeadSP;