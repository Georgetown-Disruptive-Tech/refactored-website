import React from "react";
import Contact from "../Contact";
import lines from "../../../recruitment_img/lines.svg";
import "../../../recruitment_css/bootstrap.min.css";
import "../../../recruitment_css/calendar.scss";
import "../../../recruitment_css/responsive.css";
import "../../../recruitment_css/style.css";

function NewsLetter(props) {
    return (
        <section
        id="recruitment"
        className="site-section section-form text-center"
      >
        
        <div className="container">
            <h3>Our Previous News Letters</h3>{" "}
            <img src={lines} className="img-lines" alt="lines" />

            <Contact/>
        </div>
        </section>
    );
}

export default NewsLetter;