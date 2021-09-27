import React from "react";
import CountView from "./CountView";
import CountInput from "./CountInput";

function CounterBody(props) {
  //   const { number, setNumber } = props;
  return (
    <div>
      <CountInput setNumber={props.setNumber} />
      <CountView number={props.number} />
    </div>
  );
}

export default CounterBody;
