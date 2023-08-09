import React, { useEffect, useState } from "react";
import "./upperHeader.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartIcon(props) {
  const [quantity, setQuantity] = useState(0)
  const quantityProduct = useSelector(state => state.cart.cart);

  useEffect(() => {
    const totalQuantity = quantityProduct.reduce((total, item) => total + item.quantity, 0);
    setQuantity(String(totalQuantity));
    console.log(totalQuantity)
  }, [quantityProduct]);

  return (
    <Link to={"/cart"} >
      <div className="shopping__cart__wrapper">
        <FontAwesomeIcon
          className="shopping__cart__icon"
          icon={faShoppingCart}
        />
        <div className="cart__counter">{quantity}</div>
      </div>
    </Link>
  );
}
