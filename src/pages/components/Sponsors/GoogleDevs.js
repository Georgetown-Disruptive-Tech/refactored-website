import React from "react";
import googledevs from "../../../img/google_developers_logo.png";

function GoogleDevs() {
  return (
    <div className="sponsor">
      <a href="https://developers.google.com/">
        <img src={googledevs} alt="Google Logo" />
      </a>
    </div>
  );
}

export default GoogleDevs;
