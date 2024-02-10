import style from "components/_styles/layout.module.scss";
import React from "react";
import { MockData } from "MOCK_DATA";
import Content from "./Content";

function Detail() {
  const data = MockData();
  const post = data[0];
  console.log(post);
  return (
    <div className={style.pageWrapper}>
      <Content post={post} />
    </div>
  );
}

export default Detail;
