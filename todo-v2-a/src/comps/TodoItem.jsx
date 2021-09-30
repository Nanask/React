import React from "react";
import "../css/TodoItem.css";

function TodoItem({ t_text }) {
  return (
    <div className="todo_item">
      {/* X표시!! */}
      <div className="todo_delete">&times;</div>
      <div className="todo_text">{t_text}</div>
      {/* 체크표시!! */}
      <div className="todo_mark">&#x2713;</div>
    </div>
  );
}

export default TodoItem;
