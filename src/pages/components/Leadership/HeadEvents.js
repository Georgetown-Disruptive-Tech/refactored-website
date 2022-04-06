import React from "react";
import shanaya from '../../../img/Shanaya-Munot2.jpeg'


function HeadEvents(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box ">
            
            <img src={shanaya} className="person-image"/>
            
                <div className="hover-inner-box ">
                    <div className="hover-content ">
                        <h3>Shanaya Munot</h3>
                        <p>
                            Shanaya is a senior at the Walsh School of Foreign
                            of Services from Mumbai, India. She is majoring in
                            Science, Technology, and International Affairs with a
                            concentration in Business Growth and development.
                            <br />
                            <br />
                            Outside of GDT, she is the director of external
                            outreach at Innovo Consulting and interns at
                            Epsilon Acquisition Services. In her free time,
                            she loves to travel, explore new restaurants, do
                            adventure sports, and binge watch films.
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Shanaya Munot <br />
                <span className="position ">Head of Events and PR</span>
            </p>
        </div>
    );
}

export default HeadEvents;