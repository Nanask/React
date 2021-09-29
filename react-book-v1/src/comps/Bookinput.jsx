import React, { useContext } from "react";
import BookContext from "../context/BookContext";

function Bookinput() {
  const { book, setBook } = useContext(BookContext);
  const onChangeHandle = (e) => {
    setBook(e.target.value);
  };
  return (
    <div>
      <input onChange={onChangeHandle} placeholder="도서명 입력" value={book} />
    </div>
  );
}

export default Bookinput;
