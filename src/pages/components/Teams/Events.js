import React from "react";
import idea from "../../../img/003-idea.svg"



function Events(){
    return(
        <div className="col-md">
                    
            <img src={idea} className="icon" />
        
            <h3>Events</h3>
            <p>
                <h5>
                    Conceptualizes and organizes events, often working in
                    conjunction with the Public Relations team to formulate
                    a calendar. Lead team on the day of events.{" "}
                </h5>
            </p>
        </div>
    );
}

export default Events;