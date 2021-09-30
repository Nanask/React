import React from "react";
import "../css/Input.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoInput() {
  const [todoList, setTodoList, todoInsert] = useTodoContext();
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // setTodoList({ ...todoList, });
  };
  return (
    <div className="input_box">
      <input onChange={onChangeHandler} name="t_text" />
      <button className="rainbow" onClick={todoInsert}>
        추가
      </button>
    </div>
  );
}

export default TodoInput;
