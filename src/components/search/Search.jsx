import React from "react";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  return (
    <div>
      <h1>Search Page</h1>
      <p>검색어: {query}</p>
    </div>
  );
}

export default Search;
