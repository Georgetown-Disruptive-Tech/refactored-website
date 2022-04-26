import React from "react";

function BoardMember(props) {
  return (
    <div className="col-md image-col">
      <div className="hover-outer-box ">
        <img
          src={props.imageLocation}
          className="person-image"
          alt="board members"
        />

        <div className="hover-inner-box ">
          <div className="hover-content ">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <p className="team-name ">
        {props.name} <br />
        <span className="position ">{props.position}</span>
      </p>
    </div>
  );
}

export default BoardMember;
