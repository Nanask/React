import React from "react";
import logo from "../logo.svg";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>MY BUCKET LIST</h1>
      </header>
    </div>
  );
}

export default Header;
