import React, { useContext } from "react";
import BookContext from "../context/BookContext";
// import "../css/BookList.css";

// const list_title_names = ["ID", "도서명", "장르"];
// const list_title_view = list_title_names.map((title) => {
//   return <th>{title}</th>;
// });

// 객체배열을 선언하여 List의 제목 배열 만들기
// Header 만들기 위한 배열 생성
const list_title_names = [
  { id: 0, t_name: "ID" },
  { id: 1, t_name: "도서명" },
  { id: 2, t_name: "장르" },
];
// 제목배열을 사용하여 table의 list 생성하기
const list_title_view = list_title_names.map((title) => {
  return <th key={title.id}>{title.t_name}</th>;
});
function BookList() {
  const { bookList } = useContext(BookContext);

  // forEach를 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
  const viewList = bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td>{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
  return (
    <table className="book_list">
      <thead>
        <tr>{list_title_view}</tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default BookList;
