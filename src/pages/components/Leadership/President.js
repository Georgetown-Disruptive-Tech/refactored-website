import React from "react";
import justin from '../../../img/justin-goldstein.jpeg'


function President(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box">
            
                <img src={justin} className="person-image"/>
                
                <div className="hover-inner-box ">
                    <div className="hover-content ">
                        <h3>Justin Goldstein</h3>
                        <p>
                            Justin is a Sophomore in the College studying
                            Computer Science, and he is from Connecticut.
                            <br />
                            <br />
                            Justin is interested in Neural Information
                            Retrieval, Machine Learning, and software
                            development.
                            
                            
                            He loves to run, go to the gym, and work with
                            startups.
                            <br />
                            <br />
                            This semester, Justin is excited to lead GDT and
                            execute its mission of bringing tech to
                            Georgetown.
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Justin Goldstein <br />
                <span className="position ">President</span>
            </p>
        </div>
    );
}

export default President;