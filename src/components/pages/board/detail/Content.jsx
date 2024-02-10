import React from "react";
import style from "./detail.module.scss";
import LikeBtn from "components/commons/_components/LikeBtn";
import CategoryBadge from "components/commons/_components/CategoryBadge";
import BookmarkBtn from "components/commons/_components/BookmarkBtn";

function Content({ post }) {
  return (
    <>
      <CategoryBadge category={post.category} />

      <div className={style.header}>
        <h3>{post.title}</h3>
        <BookmarkBtn postType={"heart"} />
      </div>

      <div className={style.postInfo}>
        <div className={style.authorCreated}>
          <span>{post.author}</span>
          <span>{post.createdAt}</span>
        </div>
        <span>{post.views}</span>
      </div>
      <div className={style.postContent}>
        <p>{post.content}</p>
      </div>
      <LikeBtn postType={"heart"} likes={post.likes} />
    </>
  );
}

export default Content;
