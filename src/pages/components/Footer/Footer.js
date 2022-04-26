import React from "react";
import FooterLogo from "./FooterLogo";
import FooterAboutUs from "./FooterAboutUs";
import FooterMenu from "./FooterMenu";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container ">
          <FooterLogo />

          <div className="row margin-bottom-small ">
            <FooterAboutUs />
            <FooterMenu />
          </div>
        </div>
      </footer>
      <div className="row secondary-footer ">
        <div className="col-md ">
          <p>Georgetown Disruptive Technology © 2021.</p>
        </div>
        <div className="col-md end-md ">
          <p>Designed and maintained by the special project team.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
