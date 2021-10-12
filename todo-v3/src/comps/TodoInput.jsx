// import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import { useUserContext } from "../context/UserContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { textId, todo, onChange, onClick, onKeyPress } = useTodoContext();

  return (
    <div className="form">
      <input ref={textId} onChange={onChange} value={todo.t_text} name="t_text" onKeyPress={onKeyPress} placeholder="할 일 적자" />
      <button onClick={onClick} className="rainbow"></button>
      {/* <p>{todo.t_text}</p> */}
    </div>
  );
}

export default TodoInput;
