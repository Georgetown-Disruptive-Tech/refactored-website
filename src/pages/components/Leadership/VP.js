import React from "react";
import carlo from '../../../img/carlo-dwek.jpeg' //need to change


function VP(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box ">
            
                <img src={carlo} className="person-image"/>
                
                <div className="hover-inner-box ">
                    <div className="hover-content ">
                        <h3>Irini Fournier Vardinoyannis</h3>
                        <p>
                            Irini is a Sophomore in the MSB studying marketing
                            and Computer Science.
                            <br />
                            <br />
                            Irini generates online growth strategies and
                            strengthens the brand design for several
                            international sustainable companies/startups
                            through her digital branding and marketing
                            agency, GTech.{" "}
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Irini Fournier Vardinoyannis <br />
                <span className="position ">Vice President</span>
            </p>
        </div>
    );
}

export default VP;