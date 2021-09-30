import React, { children } from "react";
import AppContextProvider from "../context/AppContextProvider";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

// 시만텍테그?
// 어떤 코드가 어떻게 적용이 되는지는 몰라도 되는 부분
// main에게 각각의 요소들을 넘겨주기
function TodoMain(form, children, header) {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>{header}</div>
        <section>{form}</section>
        <section>{children}</section>
        <TodoInput />
        <TodoList />
      </main>
    </AppContextProvider>
  );
}

export default TodoMain;
