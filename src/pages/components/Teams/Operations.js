import React from "react";
import achievement from '../../../img/001-achievement.svg'



function Operations(){
    return(
        <div className="col-md">
                    
            <img src={achievement} className="icon " />
                    
            <h3>Operations</h3>
            <p>
                <h5>
                    Responsible for the day-to-day running and logistics of
                    the club. Oversight on budgeting, recruiting, and the
                    newsletter. Often works in collaboration with other
                    teams to ensure operational efficiency.{" "}
                </h5>
            </p>
        </div>
    );
}

export default Operations;