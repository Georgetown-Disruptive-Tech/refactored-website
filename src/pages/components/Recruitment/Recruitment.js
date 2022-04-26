import React from "react";
import "../../../recruitment_css/bootstrap.min.css";
import "../../../recruitment_css/calendar.scss";
import "../../../recruitment_css/responsive.css";
import "../../../recruitment_css/style.css";
import lines from "../../../recruitment_img/lines.svg";
import EventDescription from "./EventDescription";
import Contact from "../Contact";
import TopMenu from "../TopMenu";


function Recruitment () {
    return (
        <section
        id="recruitment"
        className="site-section section-form text-center"
      >
        
        <div className="container">
        
          {/* <h3>We Are No Longer Accepting Applications for Spring 21'</h3> <img src="assets/img/lines.svg" class="img-lines" alt="lines"> */}
          <h3>Applications are now closed</h3>{" "}
          <img src={lines} className="img-lines" alt="lines" />
          {/* <div class="google-form">
          Want to learn more? Fill out the <b>interest form</b> below.
          <br>
          <div data-tf-widget="APAnmXAB" style="width:100%;height:400px;color:#FFFFFF;"></div>
          <br><button style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#D01916;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfbBrO3uMEy454hIw8fbI_olh8Yf_Jdh4GgGV-D8kP-eCC2Lg/viewform?usp=sf_link">Interest Form</a></button>

          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3mQZzlLSiRejq7yvhc1bKbLFXGFKrvdoGqiQcAPHafSS1PQ/viewform?embedded=true" width="100%" height="400px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
      <div class="row"> Application is live here.
          <div class="row">
              <div><br>Due 11:59pm January 30th, 2022.</div>
              <br><button style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#D01916;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;"><a href="https://forms.gle/4ChEpLygBANsc75s9">Application</a></button>
          </div> */}
          {/* <button data-tf-popup="z2w0rQH2" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#FFFFFF;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;">Apply</button> */}
          {/* <div data-tf-widget="z2w0rQH2" style="width:100%;height:400px;color:#FFFFFF;"></div>                 */}
          {/* <div class="typeform-widget" data-url="https://form.typeform.com/to/S0YB0B5L?typeform-medium=embed-snippet" style="width: 100%; height: 500px;"></div>
          
      </div> */}
          {/*  google interest form */}
          {/* /google interest form  */}
          {/* Timeline */}
          <br />
          <br /> <br /> <br /> <br />
          <div id="timeline">
            <h3>recruitment timeline</h3>{" "}
            <img src={lines} className="img-lines" alt="lines" />
            <h5>All time in ET.</h5>
            <div className="courses-container">
              {/* <div class="course done">
                  <div class="course-preview">
                      <h6>Tuesday <br>0400PM 0600PM</h6>
                      <h4>Sept. 01st</h4>
                  </div>
                  <div class="course-info">
                      <h2>Cab Fair</h2>
                      <button class="cbtn">Passed</button>
                  </div>
              </div> */}
              <div className="course">
                <div className="course-preview">
                  <h6>
                    Sunday <br />
                    11:00AM 2:00PM ET
                  </h6>
                  <h4>Jan. 23rd</h4>
                </div>
                <div className="course-info">
                  <h2>Cab Fair II</h2>
                  {/*  */}
                  <a
                    target="_blank"
                    href="https://georgetown.zoom.us/j/91728742995"
                    rel="noreferrer"
                  >
                    {" "}
                    <button className="cbtn" style={{ right: "5%" }}>
                      Zoom
                    </button>{" "}
                  </a>
                </div>
              </div>
              <EventDescription
                day="Sunday"
                startTime="11:00AM"
                endTime="2:00PM"
                date="Jan. 23rd"
                name="Cab Fair II"
                link="https://georgetown.zoom.us/j/91728742995"
              />
              <div className="course">
                <div className="course-preview">
                  {/**/}
                  <h6>
                    Tuesday <br />
                    6:00PM ET
                  </h6>
                  <h4>Jan. 25th</h4>
                </div>
                <div className="course-info">
                  <h2>Info Session</h2>
                  {/*  */}
                  <a
                    target="_blank"
                    href="https://georgetown.zoom.us/j/99472553483"
                    rel="noreferrer"
                  >
                    {" "}
                    <button className="cbtn" style={{ right: "5%" }}>
                      Zoom
                    </button>{" "}
                  </a>
                </div>
              </div>
              <div className="course">
                <div className="course-preview">
                  <h6>Wednesday</h6>
                  <h4>Jan. 26th</h4>
                </div>
                <div className="course-info">
                  <h2>Coffee Chat I</h2>
                  {/* <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexuJnXeCI6bmSsmTPJPckdRSpnNxWgeTvOWiGQum0_hfuXaA/viewform"> <button class="cbtn">Sign up</button> </a> */}
                </div>
              </div>
              <div className="course">
                <div className="course-preview">
                  <h6>Thursday</h6>
                  <h4>Jan. 27th</h4>
                </div>
                <div className="course-info">
                  <h2>Coffee Chat II</h2>
                  {/* <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSexuJnXeCI6bmSsmTPJPckdRSpnNxWgeTvOWiGQum0_hfuXaA/viewform"> <button class="cbtn">Sign up</button> </a> */}
                </div>
              </div>
              <div className="course">
                <div className="course-preview">
                  <h6>
                    Friday <br />
                    11:59
                  </h6>
                  <h4>Jan. 28th</h4>
                </div>
                <div className="course-info">
                  <h2>App Due</h2>
                </div>
              </div>
              <br />
              <br />
              {/* <div className="container">
                <h3>Contact</h3>
                <img src={lines} className="img-lines" alt="lines" />
                <div>
                  <a
                    target="_blank"
                    href="mailto: disruptivetech@georgetown.edu"
                    className="contact-app"
                    rel="noreferrer"
                  >
                    disruptivetech@georgetown.edu
                  </a>
                </div>
              </div> */}
              <Contact/>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Recruitment; 