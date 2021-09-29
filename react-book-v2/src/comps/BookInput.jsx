import React, { useContext } from "react";
import BookContext from "../context/BookContext";
import BookView from "./BookView";

function BookInput() {
  const { book, setBook, bookList, setBookList } = useContext(BookContext);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const bookInsert = () => {
    setBook({ ...book, b_id: Math.random() });
    setBookList([...bookList, book]);
  };
  return (
    <div>
      {/* input박스가 두개 이상일때는 state와 동일한 name을 사용하는것이 좋다. */}
      <input name="b_name" onChange={onChangeHandler} placeholder="도서명입력" value={book.b_name} />
      <input name="b_genre" onChange={onChangeHandler} placeholder="장르입력" value={book.b_genre} />
      <button onClick={bookInsert}>리스트추가</button>
      <BookView />
    </div>
  );
}

export default BookInput;
