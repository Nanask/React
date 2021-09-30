import { useBookContext } from "../context/AppContextProvider";

const BookItem = () => {
  const { bookList } = useBookContext();

  // forEach를 사용하여 배열을 기준으로 컴포넌트 리스트 만들기
  //   const viewList = bookList.map((book, index) => {
  return bookList.map((book, index) => {
    return (
      <tr key={book.b_id}>
        <td>{book.b_id}</td>
        <td>{book.b_name}</td>
        <td>{book.b_genre}</td>
      </tr>
    );
  });
};

export default BookItem;
