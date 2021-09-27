import React from "react";

function countInput(props) {
  const { setNumber } = props;

  const onChangeNumber = (e) => {
    const number = e.target.value;
    console.log(number);
    setNumber(number);
    number === "" || number == null ? setNumber(0) : setNumber(number);
  };

  return (
    <div>
      <input onChange={onChangeNumber} placeholder="숫자를입력해주세요" />
    </div>
  );
}

export default countInput;
