import React from "react";
import style from "./pageTitle.module.scss";

function PageTitle({ pageTitle }) {
  let bgSrc;

  return <div className={style.pageTitleContainer}>{pageTitle}</div>;
}

export default PageTitle;
