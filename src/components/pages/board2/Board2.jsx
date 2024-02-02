import style from "components/_styles/layout.module.scss";
import PageTitle from "components/commons/page_title/PageTitle";
import PostBar from "components/commons/post_bar/PostBar";

function Board2() {
  return (
    <div className={style.pageWrapper}>
      <PageTitle pageType={"board2"} />
      <PostBar boardType={"cloud"} />
    </div>
  );
}

export default Board2;
