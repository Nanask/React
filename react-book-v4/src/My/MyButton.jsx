import React from "react";

//onClick, children 만을 전달하여 myButton의 모든것을 사용할 수 있다.
function MyButton({ onClick, children }) {
  const myStyle = {
    backgroundColor: "blue",
    borderRadius: "10px",
    color: "white",
    outline: "none",
    border: "none",
    padding: "20px",
  };
  /**
   * 객체지향의 탄생
   * 기존에 잘 만들어진 클래스를 가져다가
   * 마치 부품을 조립하는 방식으로 프로그래밍을 하자
   * 잘 만들어진 클래스가 있는데
   * 기능을 좀더 추가하고 싶다하면 상속을 받고 일부를 변경하여
   * 내것으로 만들어서 재 사용을 했다.
   * 객체지향의 가장 큰 단점은 상속받은 부모 클래스를 잘 알아야한다.
   * 상속받은 부모 클래스가 변경되면 내 클래스도 변경하거나 버려야 한다.
   *
   * 부모와 자식 클래스간에 결합도가 엄청 높아진다.
   * 응집도는 엄청 낮아진다.
   *
   * 좋은 모듈은 서로 결합도가 낮고, 응집도는 높아야한다.
   *
   * 이러한 상속의 단점을 보완하는 디자인패턴 개념이 나오는데
   * 그것이 "확장"이다.
   *
   * 클래스야 내가 객체를 하나 만들었는데
   * 그 객체를 사용하여 내가 일을 대신하고 정확한 처리 결과만 나에게 달라
   */

  //
  return (
    <button style={myStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
