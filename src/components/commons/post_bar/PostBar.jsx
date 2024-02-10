import React, { useState, useEffect } from "react";
import style from "./postBar.module.scss";
import CategoryBadge from "../_components/CategoryBadge";
import { MockData } from "MOCK_DATA";
// import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import "dayjs/locale/ko"; // 한국어 로케일 추가
dayjs.extend(relativeTime);
dayjs.locale("ko"); // 전역 로케일을 한국어로 설정

function PostBar({ boardType }) {
  const [postData, setPostData] = useState([]);
  const [sortType, setSortType] = useState("최신순"); // 정렬 타입 상태

  useEffect(() => {
    // 초기 데이터 로딩
    loadAndSortData();
  }, []);

  useEffect(() => {
    // sortType 변경 시, 데이터를 다시 정렬합니다.
    loadAndSortData();
  }, [sortType]);

  const loadAndSortData = () => {
    let data = MockData();
    data = sortPosts(sortType, data); // 정렬 로직을 적용한 후 상태 업데이트
    setPostData(data);
  };

  const sortPosts = (type, data) => {
    return [...data].sort((a, b) => {
      if (type === "최신순") {
        return (
          dayjs(b.createdAt, "YYYY.MM.DD").unix() -
          dayjs(a.createdAt, "YYYY.MM.DD").unix()
        );
      } else if (type === "인기순") {
        return b.likes - a.likes;
      }
      return 0;
    });
  };

  const handleSortChange = (type) => {
    setSortType(type); // 정렬 타입 변경
  };

  const getActiveClass = (type) => {
    const isActive = sortType === type;
    if (!isActive) return ""; // 활성 상태가 아니면 빈 문자열 반환

    // boardType에 따라 다른 스타일 클래스 반환
    return boardType === "heart" ? style.btnHeart : style.btnCloud;
  };

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
          <li key={post.id} className={style.postList}>
            <div className={style.postListIn}>
              <CategoryBadge category={post.category} />
              <div className={style.postInfoTop}>
                <h2>{post.title}</h2>
                <button>
                  <img src="/images/ico_bookmark_default.svg" alt="" />
                </button>
              </div>
              <div className={style.createdAtWrap}>
                <span>
                  <img src="/images/ico_createdAt.svg" alt="user_icon" />
                  {dayjs(post.createdAt).fromNow()}
                </span>
                <span>|</span>
                <span>{post.createdAt}</span>
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
