import React from "react";
import gdtlogo from "../../../img/gdt-logo.svg";

function FooterLogo() {
  return (
    <div className="row ">
      <div className="col-md center-xs ">
        <img
          src={gdtlogo}
          className="margin-bottom"
          style={{ maxWidth: "300px" }}
          alt="GDT Logo"
        />
      </div>
    </div>
  );
}

export default FooterLogo;
