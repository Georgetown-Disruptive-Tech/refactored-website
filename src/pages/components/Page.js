import React, { useEffect } from "react";

// import '../css/flexboxgrid.css'
// import '../css/flexboxgrid.min.css'
// import '../css/normalize.min.css'
// import '../css/responsive.css'
// import '../css/theme.css'

import "../../recruitment_css/bootstrap.min.css";
import "../../recruitment_css/calendar.scss";
import "../../recruitment_css/responsive.css";
import "../../recruitment_css/style.css";
import "../../css/theme.css";



import PageTitle from "./PageTitle";
import HeaderBar from "./HeaderBar";
import TopMenu from "./TopMenu";



// import jquery from "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
// import bootstrap from "../js/bootstrap.min.js"

function Page(props) {
  const [opacity, setOpacity] = React.useState(0);
  const controlNavBar = () => {
    // calculate opacity from scroll
    const scroll = window.scrollY;
    const maxScroll = 500;
    const opacity = Math.min(1, scroll / maxScroll);
    setOpacity(opacity);
    // calculate fading white background from scroll


  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => window.removeEventListener("scroll", controlNavBar);
  }, []);

  return (
    <div className="App">
      {/* <div class="loader" id="preloader"></div>
    <div class="loader-text" id="preloader-text">Your interest matters. Welcome to GDT.</div>
    <div class="loader-copyright" id="preloader-copyright">&copy; Georgetown Disruptive Technology. All Rights Reserved.</div> */}
      <HeaderBar opacity={opacity}/>
      {/* /#header */}
      {/* <div
        id="hero-recruitment"
        className="hero-recruitment"
        style={{ zIndex: 999 }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-left">
              <h1 style={{ color: "white" }}> Recruitment</h1>
            </div>
          </div>
        </div>
      </div> */}
      <PageTitle title={props.title} />
      {/* /.hero-recruitment-recruitment */}
      
      {/* /.section-form */}
      {/*<section id="contact" class="site-section section-form text-center">*/}
      {/*</section>-*/}
      {/* /.section-form */}
      <TopMenu></TopMenu>
      {props.pageContent}
      <div id="footer">
        <p>© 2021. GDT All Rights Reserved.</p>
      </div>
      {/* /#main */}
      {/* Bootstrap core JavaScript ================================================== */}
      {/* Placed at the end of the document so the pages load faster */}
      {/* <script src={jquery}></script>
    <script src={bootstrap}></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="../js/skrollr.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-progressbar/0.9.0/bootstrap-progressbar.min.js"></script>
    <script src="../js/jquery.countTo.min.js"></script>
    <script src="../js/script.js"></script> */}
    </div>
  );
}

export default Page;
