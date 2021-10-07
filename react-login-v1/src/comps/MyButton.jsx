import React from "react";

/**
 * props 전달받은 변수에 기본값을 지정하여 props값이 전달되지 않더라도 기본을 설정할 수 있도록 기본값 설정하기
 */
export const MyButton = ({
  children,
  onClick,
  backgroundColor = "black", // 배경색 기본값 설정
  color = "#fff",
}) => {
  const MyButtonStyle = {
    fontSize: "18px",
    fontWeight: "700",
    width: "60%",
    height: "50px",
    lineHeight: "50px",
    margin: "10px auto",
    cursor: "pointer",
    textAlign: "center",
    color: color,
    border: "none",
    borderRadius: "5px",
    backgroundColor: backgroundColor,
  };

  return (
    <button style={MyButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
};
