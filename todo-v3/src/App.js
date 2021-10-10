import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import { LoginForm } from "./comps/LoginForm";
import { useHistory } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { MainNav } from "./comps/MainNav";

function App() {
  const navList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Login",
      link: "/login",
    },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <TodoMain header="To Do List"   form={<TodoInput />}>
        <MainNav navList={navList} />
          <TodoList />
        </TodoMain>
        {/* <button onClick={loginButton}>로그인</button> */}
        {/* <Route path="/login" component={LoginForm} /> */}
        {/* <TodoMain button={<LoginForm />} /> */}
        <TodoMain>
        <LoginForm />
      </TodoMain>
      </BrowserRouter>
    </div>
  );
}

export default App;
