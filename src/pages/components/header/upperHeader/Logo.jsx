import React from "react";
import "./upperHeader.css"

import shoe from "../../images/running-shoes.png"
import { Link } from "react-router-dom";

export default function Logo() {
  return <a href="http://localhost:3000/"><img className="logo" src={shoe} alt="Logo" /></a>;
}
