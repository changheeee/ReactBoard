import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./searchBar.module.scss";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 검색어가 있을 경우에만 페이지를 이동시킵니다.
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={style.searchForm}>
      <input
        className={style.searchInput}
        type="text"
        placeholder="검색"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
