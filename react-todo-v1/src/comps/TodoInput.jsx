import React from "react";

function TodoInput(props) {
  const { todo, setTodo, todoList, setTodoList } = props;

  // 입력박스에 text를 입력하면 1개의 TODO 데이터 만들기
  const onChangeHandler = (e) => {
    //   t_date: Date().toString  react에서 제공하는 Date함수, 사용법이 어려움
    setTodo({ t_id: todoList.length, t_text: e.target.value, t_date: Date().toString() });
  };

  const todoInsert = () => {
    setTodoList([...todoList, todo]);
  };

  //   defaultValue={todo.t_text}, 위에서 t_text값이 todo에 기록됐다면 그 값을 보여주게 하기
  return (
    <div className="todo_input_box">
      <input placeholder="할 일을 입력하기" defaultValue={todo.t_text} onChange={onChangeHandler} />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
}

export default TodoInput;
