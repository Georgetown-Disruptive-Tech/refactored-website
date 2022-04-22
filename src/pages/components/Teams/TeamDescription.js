import React from "react";

function TeamDescription(props) {
  return (
    <div className="col-md">
      <img src={props.imageLocation} className="icon" alt="team" />

      <h3>{props.teamName}</h3>
      <p>
        <h5>{props.description}</h5>
      </p>
    </div>
  );
}

export default TeamDescription;
