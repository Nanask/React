import React, { useState } from "react";

const CounterButton = (props) => {
  const { plus, minus } = props;

  return (
    <div>
      <button onClick={plus}>증가</button>
      <button onClick={minus}>감소</button>
    </div>
  );
};

export default CounterButton;
