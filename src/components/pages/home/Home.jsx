import style from "components/_styles/layout.module.scss";
import PostCard from "components/commons/post_card/PostCard";
import SearchBar from "components/commons/search_bar/SearchBar";

function Home() {
  return (
    <div className={style.contentWrapper}>
      <SearchBar />

      <h2>BEST</h2>
      <PostCard />

      <h2>BEST</h2>
      <PostCard />
    </div>
  );
}

export default Home;
