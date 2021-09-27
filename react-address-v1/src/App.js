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
  return (
    <div className="App">
      <header className="App-header">
        <AddressView input={input} setInput={setInput} />
      </header>
    </div>
  );
}

export default App;
