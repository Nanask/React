import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import { LoginForm } from "./comps/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain header="To Do List" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
      <TodoMain>
        <LoginForm />
      </TodoMain>
    </div>
  );
}

export default App;
