import AppContextProvider from "../context/AppContextProvider";
import "../css/TodoMain.css";
import "../css/MainNav.css";

function TodoMain({ form, children, header, ul }) {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div className="title">{header}</div>
        <div className="main_nav">{ul}</div>
        <section className="form_wrapper">{form}</section>
        <section className="list_wrapper">{children}</section>
      </main>
    </AppContextProvider>
  );
}

export default TodoMain;
