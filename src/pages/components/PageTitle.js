import React from "react";
import "../../recruitment_css/bootstrap.min.css";
import "../../recruitment_css/calendar.scss";
import "../../recruitment_css/responsive.css";
import "../../recruitment_css/style.css";

function PageTitle(props) {
    return (
        <div
        id="hero-recruitment"
        className="hero-recruitment"
        style={{ zIndex: 999 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left">
              <h1 style={{ color: "white" }}> {props.title} </h1>
            </div>
          </div>
        </div>
      </div>
    )
}
export default PageTitle