import { BrowserRouter } from "react-router-dom";
import Nav from "components/commons/nav/Nav";
import MainRouter from "routes";
import "styles/globals.scss";
import style from "components/_styles/layout.module.scss";

function App() {
  return (
    <div className={style.container}>
      <BrowserRouter>
        <Nav />
        <div className={style.pageWrapper}>
          <MainRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
