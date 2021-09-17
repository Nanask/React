import React, { useState } from "react";
import { RenderSquare, calcWinner } from "../modules/main";

function Board() {
  // const [squares, setSquares] = useState(Array(9).fill("A"));
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [oxFlag, setOxFlag] = useState(true);

  // if (calcWinner(squares)) {
  //   // 누군가 이겼다라는 표식을 보이면 된다.
  //   // console.log(squares[index]);
  // }
  // const onResetClick = () => {
  //   setSquares("");
  //   setOxFlag(!oxFlag);
  // };

  // squares 배열의 index번째 요소의 값을 변경하려고 한다.
  // 매개변수로 index값
  const changeSquares = (index) => {
    // square[index] = "B" 는 사용할 수 없음, state로 나와있는 값에 직접 값을 입력할 수 없다.

    // if(문자열 변수) : 문자열변수값이 null, undefined, ""이면 무조건 false
    // 그게 아니면 true
    // 이미 값이 들어있을 때 다른 값으로 변하지 않게 하기
    // squares[index]에 어떤 값(문자열, O, X)이 담겨있으면 더 이상 진행 금지
    if (squares[index]) return;

    if (calcWinner(squares)) return;

    // const _squares = squares 배열을 다른 배열에 할당(저장)하면 배열의 값이 복제되는 것이 아니라
    // 배열이 저장된 저장소 위치가 복제된다. 결국 _squares와 sqares은 같은 배열이다.
    // 즉 A라는 사람과 B라는 사람이 한 집을 같이 공유하는 것과 같은것이다.
    // 그래서 배열할 때는 원래배열을 풀어서 각각의 요소들을 넘겨주는 방식을 사용해야 한다.
    // 배열을 복제할때는 반드시 전개연산자로 수행해야 한다.
    const _squares = [...squares];

    // _squares[index] = "B"; // 복제된 배열 요소변경

    _squares[index] = oxFlag ? "O" : "X"; // 복제된 배열 요소 변경
    // _squares[index] = _squares[index] === "A" ? "B" : "A";

    setSquares(_squares); // 복제된 배열을 원래 배열과 교체하는 것
    setOxFlag(!oxFlag); // true, false 역전시키기 ==> switch 변수
  };
  const restart_game = () => {
    setSquares(Array(9).fill(null)); // 배열을 초기화하여 화면을 클리어시켜주고
    setOxFlag(!oxFlag); // 결과값을 변경하여 다음 승리자를 먼저 시작하게 한다.
  };

  // RenderSquares를 컴포넌트로 사용하는 방법
  const player = oxFlag ? "O" : "X";

  const winner = calcWinner(squares);
  const message = winner ? `승리자 : ${winner}` : `다음플레이어:${player}`;
  return (
    <div>
      {/* <h3>다음 플레이어 : {player}</h3> */}
      <h3>{message}</h3>
      <RenderSquare squares={squares} changeSquares={changeSquares} />
      {/* winner에 값이 있으면 다시시작이라는 말을 보여라 */}
      {winner ? <h4 onClick={restart_game}>다시시작</h4> : ""}
      {/* <h4>{winner ? "다시시작" : ""}</h4> */}
      {/* <h3>승리자 : {winner}</h3> */}
      {/* {winner ? (
        <button className="btn_reset" type="reset" onClick={onResetClick}>
          reset
        </button>
      ) : (
        ""
      )} */}
    </div>
  );
}
export default Board;
