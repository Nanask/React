import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/Main.css";

function Main() {
  return (
    <div className="gradient-border">
      <header>TodoList</header>
      <div>
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default Main;
