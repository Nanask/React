import React, { useContext } from "react";
// import "../css/Insert.css";
import "../css/BookInput.css";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import MyButton from "../My/MyButton";

function BookInput() {
  const { book, setBook } = useContext(BookContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };
  return (
    <>
      <div className="input_box">
        {/* <div className="textbox"> */}
        <div className="text">
          <label>도서명</label>
          <input name="b_name" onChange={onChangeHandler} value={book.b_name} />
        </div>
        <div className="text">
          <label>장르</label>
          <input name="b_genre" onChange={onChangeHandler} value={book.b_genre} />
        </div>
        {/* <button>list 추가</button> */}
        <MyButton onClick={() => alert("Hi")}>리스트추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
