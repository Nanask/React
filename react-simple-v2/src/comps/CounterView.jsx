import React from "react";

function CounterView({ number }) {
  const intNum = parseInt(number);
  return (
    <div>
      <div>
        {/* {number}와 20의 합 : {number} +20 = {number + 20}
         */}
        {intNum} 와 20의 합 : {intNum * 20}
      </div>
      <div>
        {/* {number}과 {number}의 곱 : {number}*{number} = {number * number} */}
        {intNum} 와 {intNum}의 곱 : {intNum * intNum}
      </div>
    </div>
  );
}

export default CounterView;
