import React from "react";
import AppContextProvider from "../context/AppContextProvider";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

// 시만텍테그?
// 어떤 코드가 어떻게 적용이 되는지는 몰라도 되는 부분
function TodoMain({ form, children, header }) {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div className="title">{header}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default TodoMain;
