import React from "react";

function CountView({ number }) {
  //   const intNum = parseInt(number);
  const count = Number(number);

  return (
    <div>
      <div>두 수의 합 : {count + 20}</div>
      <div>두 수의 곱 : {count * count}</div>
    </div>
  );
}

export default CountView;
