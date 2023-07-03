import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./upperHeader.css";
export default function LoginButton(props) {
  const [isLogin] = useState(() => {
    const useName = JSON.parse(localStorage.getItem('login'));
    return useName;
  })

  const deleteLocalHandler = () => {
    localStorage.removeItem("login");
  };

  return (
    <>
      {
        !isLogin ? (
          <Link to={"/login"}>
            <button type="button" className="login__btn" >Đăng nhập</button>
          </Link>) : (isLogin?.map((acc, index) => (
            <div key={index}>
              <button className="login__btn" >{acc.email.split("@")[0]}</button>
              <a href="/"><button className="login__btn logout" onClick={deleteLocalHandler}>Đăng Xuất</button></a>
            </div>
          )))
      }
    </>
  );
}
