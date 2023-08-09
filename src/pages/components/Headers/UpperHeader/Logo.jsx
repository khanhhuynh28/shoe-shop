import React from "react";
import "./upperHeader.css"

import shoe from "../../images/running-shoes.png"

export default function Logo() {
  return <a href="/" className="logo-container"><img className="logo" src={shoe} alt="Logo" /></a>;
}
