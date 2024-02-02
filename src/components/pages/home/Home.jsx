import style from "components/_styles/layout.module.scss";
import PostCard from "components/commons/post_card/PostCard";
import SearchBar from "components/commons/search_bar/SearchBar";

function Home() {
  return (
    <div className={style.homeWrapper}>
      <SearchBar />

      <h2>게시판1 베스트</h2>
      <PostCard postType={"heart"} />

      <h2>게시판2 베스트</h2>
      <PostCard postType={"cloud"} />
    </div>
  );
}

export default Home;
