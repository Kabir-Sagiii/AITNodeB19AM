import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Signin from "./components/signin/Signin";
import RoutesComp from "./components/routes/Routes";
import { useContext } from "react";
import { authcontext } from "./context/AuthContext";

function App() {
  const { state } = useContext(authcontext);
  return (
    <div className="App">
      {state != null ? <Nav /> : null}
      <RoutesComp />
    </div>
  );
}

export default App;
