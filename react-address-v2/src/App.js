import logo from "./logo.svg";
import "./App.css";
import AddressView from "./comps/AddressView";
import { useState } from "react";

function App() {
  const [input, setInput] = useState([
    {
      name: "",
      address: "",
      tel: "",
      age: "",
    },
  ]);

  const [addrList, setAddrList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <AddressView input={input} setInput={setInput} addrList={addrList} setAddrList={setAddrList} />
      </header>
    </div>
  );
}

export default App;
