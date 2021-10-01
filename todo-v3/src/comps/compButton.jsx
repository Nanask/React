import React from "react";

// children은 기본값으로 들어있는 매개변수이다.
function compButton({ children, chlick, onKeyPress }) {
  // props로 받아서 children을 분해할 수 있지만,
  // 이것만 받을 것이기 때문에 따로 분리하지 않는다.
  const btnStyle = {
    backgroundColor: "blue",
    color: "while",
  };

  // 굳이 목적을 입력하지 않고,children로만 입력하면
  // 필요한 곳에서 import해서 이름만 넣어서 사용해주기
  return (
    <button style={btnStyle} onClick={chlick} onKeyPress={onKeyPress}>
      {children}
    </button>
  );
}

export default compButton;
