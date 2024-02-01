import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";

function Nav() {
  const [isUser, setIsUser] = useState(false);

  return (
    <div className={style.navContainer}>
      <div className={style.navLeft}>
        <Link to="/" className={style.logo}>
          <img src="/images/logo_main.svg" alt="" />
        </Link>
        <Link to="/board">board</Link>
      </div>

      <div className={style.navRight}>
        <form action="/search" className={style.searchBar}>
          <input
            class="search"
            type="text"
            name="query"
            placeholder="게시글 검색"
          />
        </form>

        {isUser ? (
          <div className={style.userFnc}>
            <Link to="/login">login</Link>
            <Link to="/join">join</Link>
          </div>
        ) : (
          <div className={style.userFnc}>
            <button>LOGOUT</button>
            <Link to="/mypage">MY</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
