import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center", marginBottom: "50px", color: "blue" }}>
        React - Node /Express Integration
      </h2>
      <Main />
    </div>
  );
}

export default App;
