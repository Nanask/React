import React from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // 		무언가를 전달하고자 할때 함수방식은 불편하다
  // return <div>{RenderSquare()}</div>;

  // 		RenderSquare를 컴포넌트로 사용하는 방법(권장)
  // return <div><RenderSquare/><div>;
  return (
    <div>
      <div>다음 플레이어 : O</div>
      <RenderSquare />
    </div>
  );
}

export default Board;