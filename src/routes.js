import Board from "components/pages/board/Board";
import Board2 from "components/pages/board2/Board2";
import Home from "components/pages/home/Home";
import Join from "components/pages/join/Join";
import Login from "components/pages/login/Login";
import Mypage from "components/pages/mypage/Mypage";
import Search from "components/pages/search/Search";
import { Routes, Route } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/board" element={<Board />}></Route>
      <Route path="/board2" element={<Board2 />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path="/search" element={<Search />}></Route>
    </Routes>
  );
}
