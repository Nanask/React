import React from "react";

// import한 값에서 friend라는 변수명에 담아서 사용하겠다.
const view = (props) => {
  // 부모로부터 전달받은 변수 중에서 friend라는 이름의 변수를 분리하기
  const { fo, value } = props;
  return (
    <div>
      <h1>{fo.f_name}</h1>
      <h1>{fo.f_addr}</h1>
    </div>
  );
};

export default view;
