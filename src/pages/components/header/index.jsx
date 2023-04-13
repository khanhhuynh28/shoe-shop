import React, { useEffect, useState } from "react";
import Logo from "./upperHeader/Logo";
import SearchBar from "./upperHeader/SearchBar";
import CartIcon from "./upperHeader/CartIcon";
import LoginButton from "./upperHeader/LoginButton";
import Dropdwon from "./downHeader/Dropdown";
import NavigationMenu from "./downHeader/NavigationMenu";
import "./upperHeader/upperHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../../stores/action/product.action";

const Header = () => {


  return (
    <>
      <div className="Header">
        <div className="upper__header">
          <Logo />
          <SearchBar />
          <CartIcon />
          <LoginButton />
        </div>
        <div className="down__header">
          <Dropdwon />
          <NavigationMenu />
        </div>
      </div>
      <div className="headermargin"></div>
    </>
  );
};
export default Header;
