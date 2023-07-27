import React, { useState } from "react";
import { Link } from "react-router-dom";
import logout from '../../../../assets/logout.png'
import "./upperHeader.css";
export default function LoginButton() {
  const [isLogin] = useState(() => {
    const useName = JSON.parse(localStorage.getItem('login'));
    return useName;
  }
  )

  const deleteLocalHandler = () => {
    localStorage.removeItem("login");
  };
  return (
    <>
      {
        !isLogin ? (
          <button type="button" className="login__btn" >
            <Link className="link-style" to={"/login"}>Đăng nhập</Link>/ <Link className="link-style" to={"/register"}>Đăng ký</Link>
          </button>
        ) : (isLogin?.map((acc, index) => (
          <div key={index} className="id-user">
            <h5 className="username" >{acc.email.split("@")[0]}</h5>
            <a href="/">
              <img width={35} src={logout} alt="" onClick={deleteLocalHandler} />
            </a>
          </div>
        )))
      }
    </>
  );
}
