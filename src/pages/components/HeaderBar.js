import React from "react";
import logo from "../../recruitment_img/gdt-logo.svg";

function HeaderBar(props){
    return (
        <header
        id="masthead"
        className="site-header"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${props.opacity})`,
        }}
        data-anchor-target=".hero-recruitment"
        data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0); color:white;"
        data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
      >
        <nav id="primary-navigation" className="site-navigation">
          <div className="container">
            <div className="navbar-header page-scroll">
              {" "}
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-target="#people-perfect-collapse"
                aria-expanded="false"
              >
                {" "}
                <span className="icon-bar" /> <span className="icon-bar" />{" "}
                <span className="icon-bar" />{" "}
              </button>
              <a target="_blank" href="../" className="site-logo">
                <img src={logo} alt="gdtlogo" style={{ width: "13vw" }} />
              </a>
            </div>
            {/* /.navbar-header */}
            {/* <div class="main-menu" id="people-perfect-collapse">
              <ul class="nav navbar-nav navbar-right">
                  <li class="page-scroll"><a href="index.html">Home</a></li>
                  <li class="page-scroll"><a target="_blank" href="#recruitment">Recruitment</a></li>
                  <li class="page-scroll"><a target="_blank" href="#timeline">Timeline</a></li>
                  <li class="page-scroll"><a target="_blank" href="#contact">Contact Us</a></li>
              </ul>
          </div> */}
            {/* /.navbar-collapse */}
          </div>
        </nav>
        {/* /.primary-navigation */}
      </header>
    );
}
export default HeaderBar