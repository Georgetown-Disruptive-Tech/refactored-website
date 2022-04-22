//based off the guide from this link:
//https://blog.logrocket.com/creating-navbar-react/

// Maybe have to change the "<Link to="/____"...
// back to "<Link to="#____"...

//this guide may have more extensive code:
//https://react-bootstrap.github.io/components/navbar/

import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/about-us ">About Us</Link>
    </li>
    <li>
      <Link to="/teams ">Teams</Link>
    </li>
    <li>
      <Link to="/leadership ">Leadership</Link>
    </li>
    <li>
      <Link to="./recruitment/index">Recruitment</Link>
    </li>
    <li>
      <Link to="/contacts">Contact</Link>
    </li>
  </div>
  );
}
export default navbar;