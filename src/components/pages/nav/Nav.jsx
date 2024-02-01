import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";

function Nav() {
  const [isUser, setIsUser] = useState(false);
  const [subMenuHide, setSubMenuHide] = useState(false);
  const [grayLogo, setGrayLogo] = useState(false);
  const showSubMenu = () => {
    setSubMenuHide(true);
    setGrayLogo(true);
  };

  const hideSubMenu = () => {
    setSubMenuHide(false);
    setGrayLogo(false);
  };

  return (
    <div
      className={style.navWrapper}
      onMouseEnter={showSubMenu}
      onMouseLeave={hideSubMenu}
    >
      <div className={style.navContainer}>
        <div className={style.userFnc}></div>
        <div className={style.logoContainer}>
          <Link
            to="/"
            className={style.logo}
            onMouseEnterCapture={() => {
              setGrayLogo(!grayLogo);
            }}
          >
            <img
              src="/images/logo_main.svg"
              alt=""
              className={grayLogo ? style.colorLogo : style.grayLogo}
            />
          </Link>
        </div>
        {isUser ? (
          <div className={style.userFnc}>
            <Link to="/login">LOGIN</Link>
            <Link to="/join">JOIN</Link>
          </div>
        ) : (
          <div className={style.userFnc}>
            <a href="/api/logout">LOGOUT</a>
            <Link to="/mypage">MY</Link>
          </div>
        )}
      </div>
      <div
        className={`${style.subMenuContainer} ${
          subMenuHide ? style.subMenuVisible : ""
        }`}
      >
        <Link to="/board" className={style.logo}>
          <img src="/images/ico_heart.svg" alt="" />
        </Link>
        <Link to="/board2" className={style.logo}>
          <img src="/images/ico_cloud.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
