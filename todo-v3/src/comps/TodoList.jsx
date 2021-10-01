import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();

  const viewList = todoList.map((item) => {
    //     // todo.t_text
    // todo는 item에서 받아온 todo야
    return <TodoItem todo={item} key={item.t_id} />;
  });

  return <div>{viewList}</div>;
  // return <div>ToDo</div>;
}

export default TodoList;
