import React from "react";
import App from "../App";

const write = (props) => {
  // App.js에서 받은 함수와 객체?를 분리하여 받고
  const { fd, onChangeHandle } = props;
  return (
    <div>
      <p>
        <input name="f_name" value={fd.f_name} onChange={onChangeHandle} />
      </p>
      <p>
        <input name="f_addr" value={fd.f_addr} onChange={onChangeHandle} />
      </p>
    </div>
  );
};

export default write;
