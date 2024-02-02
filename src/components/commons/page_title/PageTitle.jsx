import React from "react";
import style from "./pageTitle.module.scss";

function PageTitle({ pageType }) {
  let title;
  let bgSrc;

  switch (pageType) {
    case "board1":
      title = "게시판 1";
      break;
    case "board2":
      title = "게시판 2";
      break;
    case "mypage":
      title = "마이 페이지";
      break;
    default:
      title = "페이지 제목 없음";
  }

  return <div className={style.pageTitleContainer}>{title}</div>;
}

export default PageTitle;
