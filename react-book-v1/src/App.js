import logo from "./logo.svg";
import "./App.css";
import PropsDrilling from "./comps/PropsDrilling";
import BookContext from "./context/BookContext";
import { useState } from "react";
import BookMain from "./comps/BookMain";

function App() {
  const [book, setBook] = useState("자바야놀자");
  const [address, setAddress] = useState({ b_name: "", b_tel: "", b_addr: "" });
  // 위에서 설정해 놓은 state값을 providerData에 저장하기
  const providerData = { book, setBook, address, setAddress };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BookContext.Provider value={providerData}>
        <BookMain />
      </BookContext.Provider>
      <PropsDrilling />
    </div>
  );
}

export default App;
