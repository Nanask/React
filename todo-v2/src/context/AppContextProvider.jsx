import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "",
      t_isComplete: false,
    },
  ]);
  const todoInsert = (text) => {};
  const completeToggle = (id) => {};
  const todoDelete = (id) => {};
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppContextProvider;
