import ReactDOM from "react-dom";
import Menu from "./components/Menu";
import Feed from "./components/Feed";
import Account from "./components/Account";
import Suggestions from "./components/Suggestions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Menu />
      <div>
        <Feed />
        <div class="side-bar">
          <Account />
          <Suggestions />
          <Footer />
        </div>
      </div>
    </div>
  );
}

const elemento = document.querySelector(".root");
ReactDOM.render(<App />, elemento);
