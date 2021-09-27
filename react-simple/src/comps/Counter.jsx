import React, { useState } from "react";

function Counter() {
  const [index, setindex] = useState(0);

  const onIndexClick = (e) => {
    const index = e.target;

    if (index.className === "plus") {
      setindex(index + 1);
    }
    if (index.className === "minus") {
      setindex(index - 1);
    }
  };

  return (
    <div>
      <h1>카운트 : {index}</h1>
      <button className="plus" onClick={onIndexClick}>
        증가
      </button>
      <button className="minus" onClick={onIndexClick}>
        감소
      </button>
    </div>
  );
}

export default Counter;
