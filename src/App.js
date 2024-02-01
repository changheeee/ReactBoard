import { BrowserRouter } from "react-router-dom";
import Nav from "components/pages/nav/Nav";
import MainRouter from "routes";
import "styles/globals.scss";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <div className="section">
          <MainRouter />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
