import React from "react";
import Logo from "./upperHeader/Logo";
import SearchBar from "./upperHeader/SearchBar";
import CartIcon from "./upperHeader/CartIcon";
import LoginButton from "./upperHeader/LoginButton";
import NavigationMenu from "./downHeader/NavigationMenu";
import "./upperHeader/upperHeader.css";

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
          <NavigationMenu />
        </div>
      </div>
      <div className="headermargin"></div>
    </>
  );
};
export default Header;
