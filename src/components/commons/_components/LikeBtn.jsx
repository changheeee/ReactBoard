import React, { useState } from "react";

function LikeBtn({ postType, likes }) {
  const [activeBtn, setActiveBtn] = useState(false);

  const clickBtnHandler = () => {
    setActiveBtn(!activeBtn); // 현재 상태의 반대로 설정
  };

  const buttonStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#555",
  };

  return (
    <div style={buttonStyle}>
      <button>
        {postType === "heart" ? (
          activeBtn ? (
            // 조건이 참일 때 (버튼이 활성 상태일 때) 표시할 요소
            <img
              src="/images/like_heart_active.svg"
              alt="like_heart_active"
              onClick={clickBtnHandler}
            />
          ) : (
            // 조건이 거짓일 때 (버튼이 비활성 상태일 때) 표시할 요소
            <img
              src="/images/like_heart_unset.svg"
              alt="like_heart_unset"
              onClick={clickBtnHandler}
            />
          )
        ) : activeBtn ? (
          // 조건이 참일 때 (버튼이 활성 상태일 때) 표시할 요소
          <img
            src="/images/like_cloud_active.svg"
            alt="like_cloud_active"
            onClick={clickBtnHandler}
          />
        ) : (
          // 조건이 거짓일 때 (버튼이 비활성 상태일 때) 표시할 요소
          <img
            src="/images/like_cloud_unset.svg"
            alt="like_cloud_unset"
            onClick={clickBtnHandler}
          />
        )}
      </button>
      <span>{likes}</span>
    </div>
  );
}

export default LikeBtn;
