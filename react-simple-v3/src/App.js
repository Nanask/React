import "./App.css";
import CounterBody from "./comps/CounterBody";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <CounterBody number={number} setNumber={setNumber} />
      </header>
    </div>
  );
}

export default App;
