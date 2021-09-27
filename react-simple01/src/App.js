import "./App.css";
import Counter from "./comps/Counter";
import CounterButton from "./comps/CounterButton";
import CounterView from "./comps/CounterView";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    // 직접변경할 수 없어서 set에 기존의 카운트 부분에 숫자를 더해주기
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <CounterView count={count} />
        <CounterButton plus={plus} minus={minus} />
      </header>
    </div>
  );
}

export default App;
