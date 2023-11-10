import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Signin from "./components/signin/Signin";
import RoutesComp from "./components/routes/Routes";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <RoutesComp />
    </div>
  );
}

export default App;
