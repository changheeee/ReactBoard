import React, { useState } from "react";
import style from "./postBar.module.scss";
import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/ko"; // 한국어 로케일 추가
dayjs.extend(relativeTime);
dayjs.locale("ko"); // 전역 로케일을 한국어로 설정

function PostBar() {
  const numberOfPosts = 9; // 생성할 포스트의 수
  const postData = [];
  const [postyType, setPostType] = useState(true);

  for (let i = 0; i < numberOfPosts; i++) {
    postData.push({
      id: i,
      author: faker.person.firstName(),
      userType: faker.datatype.boolean(),
      postType: faker.datatype.boolean(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      createdAt: dayjs(faker.date.past()).format("YYYY.MM.DD"),
      // fromNow: dayjs(faker.date.past()).fromNow(),
      likes: faker.number.int({ min: 0, max: 100 }),
      views: faker.number.int({ min: 0, max: 1000 }),
      imageUrl: faker.image.urlLoremFlickr(),
    });
  }

  return (
    <>
      {/* sort탭, 글쓰기 버튼 */}
      <div className={style.postFnc}>
        <div>
          <button>최신순</button>
          <button>인기순</button>
        </div>
        <button>글쓰기</button>
      </div>

      <ul className={style.postListWrap}>
        {postData.map((post) => (
          <li key={post} className={style.postList}>
            <div className={style.postListIn}>
              <h2>{post.title}</h2>
              <div className={style.postInfoTop}>
                <div className={style.createdAtWrap}>
                  <span>
                    <img src="/images/ico_createdAt.svg" alt="user_icon" />
                    {dayjs(post.createdAt).fromNow()}
                  </span>
                  <span>|</span>
                  <span>{post.createdAt}</span>
                </div>
                <button>
                  <img src="/images/ico_bookmark_default.svg" alt="" />
                </button>
              </div>
              <p>{post.content}</p>
              <div className={style.postInfoBot}>
                <b>
                  {post.userType ? (
                    <img src="/images/ico_user_heart.svg" alt="user_icon" />
                  ) : (
                    <img src="/images/ico_user_cloud.svg" alt="user_icon" />
                  )}
                  {post.author}
                </b>
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
            </div>
            <div className={style.thumbnail}>
              <img src={post.imageUrl} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostBar;
