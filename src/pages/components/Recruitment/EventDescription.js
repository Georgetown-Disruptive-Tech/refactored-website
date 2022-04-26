import React from "react";

function EventDescription(props) {
  return (
    <div className="course">
      <div className="course-preview">
        <h6>
          {props.day} <br />
          {props.startTime} {props.endTime} ET
        </h6>
        <h4>{props.date}</h4>
      </div>
      <div className="course-info">
        <h2>{props.name}</h2>
        {/*  */}
        <a target="_blank" href={props.link}>
          {" "}
          <button className="cbtn" style={{ right: "5%" }}>
            Zoom
          </button>{" "}
        </a>
      </div>
    </div>
  );
}

export default EventDescription;
