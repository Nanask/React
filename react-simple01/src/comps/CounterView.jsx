import React from "react";
import CounterButton from "./CounterButton";

const CounterView = ({ count }) => {
  // View안에 버튼을 넣어서 만들지 않기
  return (
    <div>
      <div>카운트 : {count}</div>
      {/* <CounterButton /> */}
    </div>
  );
};

export default CounterView;
