import "./App.css";
import CounterInput from "./comps/CounterInput";
import { useState } from "react";
import CounterView from "./comps/CounterView";

function App() {
  const [number, setNumber] = useState(0);

  // const numChange = (e) => {
  //   if (e.target.tagName === "INPUT") {
  //     const num = e.target.value;
  //     setNumber(parseInt(num));
  //     if (num == null || num === "") {
  //       setNumber(0);
  //     }
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <CounterInput setNumber={setNumber} />
        <CounterView number={number} />
      </header>
    </div>
  );
}

export default App;
