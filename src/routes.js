import Detail from "components/pages/board/detail/Detail";
import Home from "components/pages/home/Home";
import Join from "components/pages/join/Join";
import Login from "components/pages/login/Login";
import Mypage from "components/pages/mypage/Mypage";
import Search from "components/pages/search/Search";
import { Routes, Route } from "react-router-dom";
import HeartPage from "components/pages/board/board_heart/HeartPage";
import CloudPage from "components/pages/board/board_cloud/CloudPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/heart" element={<HeartPage />}></Route>
      <Route path="/cloud" element={<CloudPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/search" element={<Search />}></Route>
      <Route path="/detail" element={<Detail />}></Route>
    </Routes>
  );
}
