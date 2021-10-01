import { createContext, useContext } from "react";
import { useState } from "react";
import { useRef } from "react";

// 컴텍스트 생성
const AppContext = createContext();

/**
 * react context API 기능을 활용하여 state를 관리하는 도구
 *
 * 다중구조의 컴포넌트가 겹쳐있는 경우
 * state를 전파하는 것이 매우 불편한 코드로 작성될 수 있다.
 *
 * 이럴때 Context API를 활용하여
 * state와 공용으로 사용할 여러가지 함수를 Store에 보관하고
 * 필요한 곳에서만 useContext()를 사용하여 쉽게 getter 할 수 있도록
 * 도와주는 컴포넌트
 *
 * Context를 생성하기
 * 생성된 Context에 state등을 보관하고
 * useContext() Hook를 커스터마이징하여 손쉽게 사용할 수 있도록 한다.
 *
 * Context를 사용할 컴포넌트들을 합성 패턴을 이용해 관리할 수 있도록 한다
 */

// 컨텍스트의 Store에 보관된 정보들을 추출하기 위한 Hook 함수 선언
export const useTodoContext = () => useContext(AppContext);

// Provier를 합성패턴으로 선언하여
// 필요한 곳
const AppContextProvider = ({ children }) => {
  // Todo 정보 1개를 보관할 state
  const [todo, setTodo] = useState([
    {
      t_id: 0,
      t_text: "",
      t_comp: false,
    },
  ]);

  const [todoList, setTodoList] = useState([]);

  // 레퍼런스 변수 선언하기
  const nextId = useRef(0);
  const textId = useRef();

  const onChange = (e) => {
    const t_text = e.target.value;
    // ES6 이후에는 객체에 값을 담을때
    // 객체의 키 이름과 같은 변수에 담긴 값을 담을 때는
    // 키 이름 한번만 사용해도 된다.
    // ex ) {t_text : t_text } 는 { t_text } 처럼 사용가능
    //   setTodo({ ...todo, t_text: t_text });
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };
  // 입력창 클리어
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  // List에 추가하기
  // todoInsert함수를 만들어서 onClick이벤트가 발생했을 때
  // 호출되서 진행될 수 있도록 따로 만들어주기
  const todoInsert = () => {
    setTodoList([...todoList, todo]);
    nextId.current++;
    // setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
    if (todo.t_text === "") return window.alert("할일을 입력하세요");

    todoClear();
  };

  const todoText = () => {
    if (todo.t_text === null || todo.t_text === "") {
      alert("할일을 입력하세요");
      textId.current.focus();
    } else {
      todoInsert();
    }
  };

  // 입력된 todo를 todoList에 추가하기
  const onClick = () => {
    // if (todo.t_text === null || todo.t_text === "") {
    //   alert("할일을 입력하세요");
    // } else {
    //   todoInsert();
    // }
    todoText();
  };
  const onDeleteClick = (e) => {
    // confirm은 반드시 window를 사용해야 한다.
    if (window.confirm("삭제할까요?")) {
      // id를 뽑아내는 방법
      // data-todo-id라고 저장하면 앞에 data-는 dataset으로 변경
      // todo-id는 lower Camel case로 변경되어 todoId 변수에서
      // getter할 수 있다.
      const t_id = Number(e.target.dataset.todoId);

      alert("삭제합니다");

      // 배열요소 중에서 t_id 일치하는 요소를 삭제하기
      // 원래 배열요소를 filterring하는데..
      // t_id값이 dataset의 todoId와 일치하지 않는 것만
      // 새로운 배열로 만들어라
      // === 를 쓰는것은 타입까지 비교하는 것이고 == 를 쓰는것은 타입과 상관없이 비교하라는 뜻
      const _todoList = todoList.filter((todo) => todo.t_id != t_id);
      setTodoList(_todoList);
    }
  };

  // 입력박스에 Enter 키가 눌려지면
  const onKeyPress = (e) => {
    //e.keyCode === 13와는 조금 다름
    if (e.key === "Enter") {
      todoText();
      //   todoInsert();
      // esc를 눌렀을 때
      // } else if (e.Code === 27) {
      //   //   setTodo({ t_id: nextId.current });
      //   todoClear();
    } else if (e.Code === "Escape") {
      //   setTodo({ t_id: nextId.current });
      todoClear();
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);

    // 배열요소중에 조건에 맞는 값이 있으면 그 값이 몇번째 요소인지
    // index를 return한다
    const index = todoList.findIndex((todo) => todo.t_id === t_id);
    // 찾았으면 ~~

    // index가 0번째면 안먹는다?
    // 해당 요소만 따로 추출하여 selectTodo에 담아라
    const selectTodo = todoList[index];

    const _todoList = [...todoList];
    _todoList[index] = {
      ...selectTodo,
      t_comp: !selectTodo.t_comp,
    };

    setTodoList(_todoList);

    alert("OK");
  };

  const props = { onCompClick, onDeleteClick, textId, todo, todoList, onChange, onClick, onKeyPress };

  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
