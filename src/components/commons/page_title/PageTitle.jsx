import React from "react";

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

  return <div>{title}</div>;
}

export default PageTitle;
