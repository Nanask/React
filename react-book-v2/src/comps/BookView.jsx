import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookList from "./BookList";

function BookView() {
  // context로 부터 필요한 state 분해하기
  const { book } = useContext(BookContext);
  return (
    <div>
      <p>도서명 :{book.b_name}</p>
      <p>장르 :{book.b_genre}</p>
      <BookList />
    </div>
  );
}

export default BookView;
