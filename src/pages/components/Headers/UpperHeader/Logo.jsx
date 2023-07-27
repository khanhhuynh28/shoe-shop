import React from "react";
import "./upperHeader.css"

import shoe from "../../images/running-shoes.png"

export default function Logo() {
  return <a href="/"><img className="logo" src={shoe} alt="Logo" /></a>;
}
