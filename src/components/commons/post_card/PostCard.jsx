import React from "react";
import style from "./postCard.module.scss";
import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";

function PostCard() {
  const numberOfPosts = 4; // 생성할 포스트의 수
  const postData = [];

  for (let i = 0; i < numberOfPosts; i++) {
    postData.push({
      id: i,
      author: faker.person.firstName(),
      userType: faker.datatype.boolean(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      createdAt: dayjs(faker.date.past()).format("YYYY.MM.DD"),
      likes: faker.number.int({ min: 0, max: 100 }),
      views: faker.number.int({ min: 0, max: 1000 }),
      imageUrl: faker.image.urlLoremFlickr(),
    });
  }

  return (
    <ul className={style.postContainer}>
      {postData.map((post) => (
        <li key={post.id} className={style.postListWrap}>
          <div className={style.postListIn}>
            <h2>{post.title}</h2>
            <div className={style.postInfo}>
              <span>
                <img src="/images/ico_createdAt.svg" alt="user_icon" />
                {post.createdAt}
              </span>
              <div className={style.viewAndLike}>
                <span>
                  <img src="/images/ico_views.svg" alt="user_icon" />
                  {post.views}
                </span>
                <span>
                  <img src="/images/ico_likes_heart.svg" alt="user_icon" />
                  {post.likes}
                </span>
              </div>
            </div>
            <img src={post.imageUrl} alt="" className={style.thumbnail} />
            <p>{post.content}</p>
          </div>
          <b>
            {post.userType ? (
              <img src="/images/ico_user_heart.svg" alt="user_icon" />
            ) : (
              <img src="/images/ico_user_cloud.svg" alt="user_icon" />
            )}
            {post.author}
          </b>
        </li>
      ))}
    </ul>
  );
}

export default PostCard;
