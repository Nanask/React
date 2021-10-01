import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import MyButton from "./comps/MyButton";
import compButton from "./comps/compButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TodoMain header="To Do List" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
      <MyButton />
      <compButton>룰루</compButton>
    </div>
  );
}

export default App;
