import React from "react";
import "../css/TodoItem.css";
import { useTodoContext } from "../context/AppContextProvider";

function TodoItem({ todo }) {
  const { t_id, t_text, t_comp } = todo;
  const { onDeleteClick, onCompClick } = useTodoContext();
  return (
    <div className="todo_item">
      {/* X표시!! */}
      <div data-todo-id={t_id} onClick={onDeleteClick} className="todo_delete">
        &times;
      </div>
      {/* {}표시를 하면 자바스크립트 언어가 되므로 `` 변경하자 */}
      <div className={`todo_text ${t_comp && "checked"}`} onClick={onCompClick} data-todo-id={t_id}>
        {t_text}
      </div>
      {/* 체크표시!! */}
      {/* 현재 todo의 t_comp 값이 true 일때만 이 tag가 나타나도록 하라 */}
      {t_comp && <div className="todo_mark">&#x2713;</div>}
    </div>
  );
}

export default TodoItem;
