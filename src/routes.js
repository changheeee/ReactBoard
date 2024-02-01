import Board from "components/board/Board";
import Home from "components/home/Home";
import Join from "components/join/Join";
import Login from "components/login/Login";
import Mypage from "components/mypage/Mypage";
import Search from "components/search/Search";
import { Routes, Route } from "react-router-dom";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/board" element={<Board />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/join" element={<Join />}></Route>
      <Route path="/mypage" element={<Mypage />}></Route>
      <Route path={`/search`} element={<Search />}></Route>
    </Routes>
  );
}
