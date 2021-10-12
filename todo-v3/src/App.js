import logo from "./logo.svg";
import "./App.css";
import TodoInput from "./comps/TodoInput";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import { LoginForm } from "./comps/LoginForm";
import { Route } from "react-router-dom";
import { MainNav } from "./comps/MainNav";
import { AuthRoute } from "./comps/AuthRoute";
import UserContextProvider from "./context/UserContextProvider";
import LoginRoute from "./comps/LoginRoute";
import LogoutForm from "./comps/LogoutForm";

function App() {
  // const { user, setUser } = useUserContext();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <LoginRoute>
          <Route path="/" exact>
            <TodoMain header="To Do List" ul={<MainNav />} form={<TodoInput />}>
              <TodoList />
            </TodoMain>
          </Route>
          <AuthRoute>
            <Route path="/login" exact>
              <TodoMain ul={<MainNav />}>
                <LoginForm />
              </TodoMain>
            </Route>
            <Route path="/logout" exact>
              <TodoMain ul={<MainNav />} form={<TodoInput />}>
                <TodoList />
                <LogoutForm />
              </TodoMain>
            </Route>
          </AuthRoute>
        </LoginRoute>
      </UserContextProvider>
    </div>
  );
}

export default App;
