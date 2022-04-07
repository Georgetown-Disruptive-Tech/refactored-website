import React from "react";

function ActivityDescription(props){
    return(
        <div className="col-md">
            <p className="author">{props.name}</p>
            <p className="highlight">
            {props.description}
            </p>
        </div>
    );
}

export default ActivityDescription;