import React from "react";
import anna from '../../../img/anna-gasner.JPG'


function HeadOps(){
    return(
        <div className="col-md image-col">
            <div className="hover-outer-box ">
            
            <img src={anna} className="person-image"/>
            
                <div className="hover-inner-box">
                    <div className="hover-content">
                        <h3>Anna Diaz Gessner</h3>
                        <p>
                            Anna is a Senior in the SFS, majoring in
                            International Politics with a concentration in
                            International Law. She minors in Women and Gender
                            Studies and dabbles in some Computer Science courses
                            at Georgetown.
                            <br />
                            <br />
                            Anna is Spanish and American but spent most of
                            her childhood in Belgium. She completed her
                            final high school years in Miami.
                            
                            
                            <br />
                            <br />
                            At GDT, Anna hopes to help bridge the gap
                            between tech and political science at
                            Georgetown. After graduating, Anna plans to go
                            to law school, focusing on tech policy and cyber
                            law.{" "}
                            
                            
                        </p>
                    </div>
                </div>
            </div>
            <p className="team-name ">
                Anna Diaz Gaessner <br />
                <span className="position ">Head of Operations</span>
            </p>
        </div>
    );
}

export default HeadOps;