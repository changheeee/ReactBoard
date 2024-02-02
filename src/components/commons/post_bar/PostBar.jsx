import React, { useState, useEffect } from "react";
import style from "./postBar.module.scss";
import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/ko"; // 한국어 로케일 추가
dayjs.extend(relativeTime);
dayjs.locale("ko"); // 전역 로케일을 한국어로 설정

function PostBar({ boardType }) {
  const numberOfPosts = 9; // 생성할 포스트의 수
  let initialPostData = [];
  const [postData, setPostData] = useState([]);
  const [sortType, setSortType] = useState("최신순"); // 정렬 타입 상태

  for (let i = 0; i < numberOfPosts; i++) {
    postData.push({
      id: i,
      author: faker.person.firstName(),
      userType: faker.datatype.boolean(),
      postType: faker.datatype.boolean(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
      createdAt: dayjs(faker.date.past()).format("YYYY.MM.DD"),
      likes: faker.number.int({ min: 0, max: 100 }),
      views: faker.number.int({ min: 0, max: 1000 }),
      imageUrl: faker.image.urlLoremFlickr(),
    });
  }

  const getActiveClass = (type) => {
    const isActive = sortType === type;
    if (!isActive) return ""; // 활성 상태가 아니면 빈 문자열 반환

    // boardType에 따라 다른 스타일 클래스 반환
    return boardType === "heart" ? style.btnHeart : style.btnCloud;
  };

  // 최신순, 인기순 정렬 함수
  const sortPosts = (type) => {
    if (type === "최신순") {
      setPostData(
        [...initialPostData].sort(
          (a, b) =>
            dayjs(b.createdAt, "YYYY.MM.DD").unix() -
            dayjs(a.createdAt, "YYYY.MM.DD").unix()
        )
      );
    } else if (type === "인기순") {
      setPostData([...initialPostData].sort((a, b) => b.likes - a.likes));
    }
  };

  // 정렬 타입 변경 핸들러
  const handleSortChange = (type) => {
    setSortType(type); // 클릭된 버튼의 타입으로 sortType 상태 업데이트
    sortPosts(type);
  };

  // 컴포넌트 마운트 시 최초 정렬 실행
  React.useEffect(() => {
    sortPosts(sortType);
  }, []);

  return (
    <>
      {/* sort탭, 글쓰기 버튼 */}
      <div className={style.postFnc}>
        <div className={style.sortBtnWrap}>
          <button
            className={getActiveClass("최신순")} // 조건부 스타일 적용
            onClick={() => handleSortChange("최신순")}
          >
            최신순
          </button>
          <button
            className={getActiveClass("인기순")} // 조건부 스타일 적용
            onClick={() => handleSortChange("인기순")}
          >
            인기순
          </button>
        </div>
        <button className={style.writeBtn}>
          <img
            src={
              boardType === "heart"
                ? "/images/ico_write_btn_heart.svg"
                : "/images/ico_write_btn_cloud.svg"
            }
            alt=""
          />
          글쓰기
        </button>
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
                    <img
                      src={
                        boardType === "heart"
                          ? "/images/ico_likes_heart.svg"
                          : "/images/ico_likes_cloud.svg"
                      }
                      alt="user_icon"
                    />
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
