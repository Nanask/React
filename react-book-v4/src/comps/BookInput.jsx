import React, { useContext } from "react";
import "../css/BookInput.css";
import BookView from "./BookView";
import { useBookContext } from "../context/AppContextProvider";
import MyButton from "../My/MyButton";
import UUID from "react-uuid";
import { useRef } from "react";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useBookContext();

  /**
   * 1. 화면이 refresh 되지 않는 상태에서 어떤 변수를 보관하고 싶을때
   * const 변수명 = useRef(초기값)
   *
   * 2. (주로) input box와 같은 특정 tag요소를 일반적인 HTML의 JS처럼
   * 핸들링 하고 싶을 때 Ref 변소를 선언하고
   * 컴포넌트 요소에 ref 속에 해당 변수를 설정해 둔다.
   *
   * 이때는 매개변수가 없거나 null로 설정해야 한다.
   *
   * const 변수명 = useRef()
   * 또는
   * const 변수명 = useRef(null)
   *
   * 자바스크립트에서는 ()안에 아무것도 없다면 null로 인식한다.
   *
   * 사용할때는
   * <input ref={변수명}/> 처럼 지정해 둔다.
   *
   * 코드에서 핸들링 할때는
   * 변수명.current.어떤함수()처럼 핸들링 한다.
   *
   * 단, tag요소를 핸들링하는 코드는 가급적 사용하지 말라
   *    useRef()로 핸들링 해야하는 것들 중 대부분 state를 핸들링 함으로써
   *    구현이 가능한 경우가 많다.
   */

  const nextId = useRef(0);
  const nameId = useRef();
  const genreId = useRef();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value, b_id: nextId.current });
  };

  const bookInsert = async () => {
    if (book.b_name === "") {
      alert("도서명을 입력하세요");
      nameId.current.focus();
      return;
      // 값이 빈칸이라면 도서명이 입력되지 않을 것이므로 return하기
    }

    if (book.b_genre === "") {
      alert("장르를 입력하세요");
      genreId.current.focus();
      return; // if문을 거쳤다면 거기서 멈춰라!
    }

    await setBookList([...bookList, book]);

    nextId.current++;

    await setBook({ b_id: "", b_name: "", b_genre: "" });
  };
  return (
    <>
      <div className="input_box">
        {/* <div className="textbox"> */}
        <div className="text">
          <label>도서명</label>
          <input name="b_name" ref={nameId} onChange={onChangeHandler} value={book.b_name} />
        </div>
        <div className="text">
          <label>장르</label>
          <input name="b_genre" ref={genreId} onChange={onChangeHandler} value={book.b_genre} />
        </div>
        {/* <button>list 추가</button> */}
        <MyButton onClick={bookInsert}>리스트추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
