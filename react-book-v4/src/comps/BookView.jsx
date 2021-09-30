import React, { useContext } from "react";
// import BookContext from "../context/BookContext";
import { useBookContext } from "../context/AppContextProvider";
// import "../css/view.css";

/**
 * inline 방식으로 style을 만들고 직접 각 컴포넌트에 저장하기
 */
function BookView() {
  // const { book, setBook } = useContext(BookContext);
  const { book } = useBookContext();

  const viewStyle = {
    width: "80vw",
    margin: "20px auto",
    display: "flex",
    border: "1px solid #ddd",
    padding: "1rem",
    backgroundColor: "#aaa",
  };
  // css를 따로 만들지 않고 이 컴포넌트에서만 사용하려고 쓰는것
  // 딱히 좋은 방법은 아님

  const pStyle = {
    flex: "1",
    border: "1px solid #aaa",
    margin: "10px",
  };

  return (
    <div className="book_view" style={viewStyle}>
      <p style={pStyle}>도서명 : {book.b_name} </p>
      <p style={pStyle}>장르 : {book.b_genre}</p>
      <p style={pStyle}>장르 : {book.b_genre}</p>
    </div>
  );
}

export default BookView;
