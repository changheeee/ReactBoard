import style from "components/_styles/layout.module.scss";
import PageTitle from "components/commons/page_title/PageTitle";
import PostBar from "components/commons/post_bar/PostBar";

function Board() {
  return (
    <div className={style.pageWrapper}>
      <PageTitle pageType={"board1"} />
      <PostBar boardType={"heart"} />
    </div>
  );
}

export default Board;
