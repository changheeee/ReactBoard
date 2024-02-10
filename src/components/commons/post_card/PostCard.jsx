import React, { useState } from "react";
import style from "./postCard.module.scss";

import { fakerKO as faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "./swiper.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CategoryBadge from "../_components/CategoryBadge";

function PostCard({ postType }) {
  const numberOfPosts = 9;
  const postData = [];
  const categories = [
    "일반",
    "연애",
    "결혼",
    "육아",
    "가족",
    "친구",
    "학교",
    "회사",
    "골라줘",
    "몇대몇",
    "YES or No",
  ];

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
      category: faker.helpers.arrayElement(categories), // 카테고리 랜덤 지정
    });
  }

  return (
    <>
      <Swiper
        className={style.postContainer}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return `<img class="${className}" src=${
              postType === "heart"
                ? "/images/ico_heart.svg"
                : "/images/ico_cloud.svg"
            } + />`;
          },
        }}
        modules={[Pagination, A11y]}
        centeredSlides={true}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          // 1000: {
          //   slidesPerView: 2,
          //   spaceBetween: 10,
          // },
          1400: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {postData.map((post) => (
          <SwiperSlide key={post.id} className={style.postListWrap}>
            <div className={style.postListIn}>
              <CategoryBadge category={post.category} />
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default PostCard;
