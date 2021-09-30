import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="form">
      <input name="t_text" value={todo.t_text} placeholder="할 일 적자" onChange={onChange} onKeyPress={onKeyPress} />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
