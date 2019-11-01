import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Players from "./Component/Players";
import DarkModeToggler from "./Component/DarkModeToggler";

function App() {
  return (
    <div className="App">
      <DarkModeToggler />
      <Players />
    </div>
  );
}

export default App;
