import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./upperHeader.css";
// import {Link} from 'react-router-dom'

export default function LoginButton(props) {
  const deleteLocalHandler = () => {
    localStorage.removeItem("loggedIn");
  };
  const username = useSelector(state => state.auth.user)

  const loggedIn = props.isLoggedIn

  return (
    <>
      {/* {!loggedIn ? ( */}
      {
        !username ? (
          <Link to={"/login"}>
            <button type="button" className="login__btn" >Đăng nhập</button>
          </Link>

        ) : <button className="login__btn" >{username.nickname}</button>
      }

      {/* // ) : (
      //   <a href="/" >
      //     <input type="button" value="Logout" className="login__btn" />
      //   </a>
      // )} */}
    </>
  );
}
