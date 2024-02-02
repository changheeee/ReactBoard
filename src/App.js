import { BrowserRouter } from "react-router-dom";
import Nav from "components/commons/nav/Nav";
import MainRouter from "routes";
import "styles/globals.scss";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <div>
          <MainRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
