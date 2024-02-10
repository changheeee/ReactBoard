import PageTitle from "components/commons/page_title/PageTitle";
import PostBar from "components/commons/post_bar/PostBar";

function HeartPage() {
  return (
    <>
      <PageTitle pageTitle="HEART" />
      <PostBar boardType={"heart"} />
    </>
  );
}

export default HeartPage;
