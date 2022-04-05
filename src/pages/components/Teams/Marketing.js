import React from "react";
import pencil from "../../../img/002-pencil.svg"



function Marketing(){
    return(
        <div className="col-md">
                    
            <img src={pencil} className="icon" />
        
            <h3>Marketing</h3>
            <p>
                <h5>
                    Working to maintain external and internal network, in
                    order to cultivate relationships and ensure
                    communicative clarity. Responsible for securing event
                    guests, alumni relations, and internal communication.
                </h5>
            </p>
        </div>
    );
}

export default Marketing;