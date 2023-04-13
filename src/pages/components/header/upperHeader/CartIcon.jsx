import React from "react";
import "./upperHeader.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CartIcon(props) {
  return (
    <Link to={"/cart"} >
      <div className="shopping__cart__wrapper">
        <FontAwesomeIcon
          className="shopping__cart__icon"
          icon={faShoppingCart}
        // onClick={(e) => {
        //   e.preventDefault();

        // }}

        />
        <div className="cart__counter">{props.itemsOfCart}</div>
      </div>
    </Link>
  );
}
