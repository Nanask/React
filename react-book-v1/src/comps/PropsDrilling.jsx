import React, { useState } from "react";

const PropsLevel_2 = ({ setSample }) => {
  const onChangeHandler = (e) => {
    setSample(e.target.value);
  };

  return (
    <div>
      <label>샘플 문자열 입력</label>
      <input onChange={onChangeHandler} />
    </div>
  );
};

/**
 * PropsDrilling 컴포넌트에 선언된 sample state 값을
 * 	PropsLevel_1의 함수 컴포넌트를 사용하여 표시하고자 한다.
 */
const PropsLevel_1 = ({ sample, setSample }) => {
  return (
    <div className="level_1">
      <p>Sample 값 : {sample}</p>
      <PropsLevel_2 setSample={setSample} />
    </div>
  );
};

const PropsMain = (props) => {
  const { sample, setSample } = props;
  return (
    <div className="main">
      <PropsLevel_1 sample={sample} setSample={setSample} />
    </div>
  );
};

function PropsDrilling() {
  const [sample, setSample] = useState("KOREA");

  return (
    <div className="start">
      <PropsMain sample={sample} setSample={setSample} />
    </div>
  );
}
export default PropsDrilling;
