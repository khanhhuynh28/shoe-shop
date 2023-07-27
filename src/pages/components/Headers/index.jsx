import React from "react";
import Logo from "./UpperHeader/Logo";
import CartIcon from "./UpperHeader/CartIcon";
import LoginButton from "./UpperHeader/LoginButton";
import "./style.css";
import SearchBar from "./UpperHeader/SearchBar";
import NavigationMenu from "./DownHeader/NavigationMenu";

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
