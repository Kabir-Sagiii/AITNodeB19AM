import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SignIn from "./components/signin/SignIn";
import Router from "./router/Router";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
