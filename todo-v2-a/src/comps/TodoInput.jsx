import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoInput.css";

function TodoInput() {
  const { todo, onChange, onClick } = useTodoContext();

  return (
    <div className="form">
      <input name="t_text" value={todo.t_text} placeholder="할 일 적자" onChange={onChange} />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
      <p>{todo.t_text}</p>
    </div>
  );
}

export default TodoInput;
