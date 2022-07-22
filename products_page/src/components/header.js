import React from "react";
import { data } from "../data";
import logo from "../images/logo.png"

export default function Headers() {
//   console.log(data); 
  return (
    <header>
      <nav>
        <img 
            src={logo}
            alt="header-logo"
            className="header_logo" />
        <h3 className="header_logo_title">Product Site</h3>
        <h4 className="header_title">React-Project II</h4>
      </nav>
    </header>
  );
}
