import React, { useState } from "react";

function BookmarkBtn({ postType }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const clickBtnHandler = () => {
    setActiveBtn(!activeBtn); // 현재 상태의 반대로 설정
  };

  return (
    <button>
      {postType === "heart" ? (
        activeBtn ? (
          // 조건이 참일 때 (버튼이 활성 상태일 때) 표시할 요소
          <img
            src="/images/ico_bookmark_heart.svg"
            alt="like_heart_active"
            onClick={clickBtnHandler}
          />
        ) : (
          // 조건이 거짓일 때 (버튼이 비활성 상태일 때) 표시할 요소
          <img
            src="/images/ico_bookmark_default.svg"
            alt="like_heart_unset"
            onClick={clickBtnHandler}
          />
        )
      ) : activeBtn ? (
        // 조건이 참일 때 (버튼이 활성 상태일 때) 표시할 요소
        <img
          src="/images/ico_bookmark_cloud.svg"
          alt="like_cloud_active"
          onClick={clickBtnHandler}
        />
      ) : (
        // 조건이 거짓일 때 (버튼이 비활성 상태일 때) 표시할 요소
        <img
          src="/images/ico_bookmark_default.svg"
          alt="like_cloud_unset"
          onClick={clickBtnHandler}
        />
      )}
    </button>
  );
}

export default BookmarkBtn;
