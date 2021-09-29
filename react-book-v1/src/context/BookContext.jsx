import { createContext } from "react";
// state를 전부 관리하는 메모리 구조?, 변수명은 필요에 따라 달라질 수 있다.
// const BookContext = createContext();

// 그리고 만든 것을 사용할 수 있도록 export 해주기
// export default BookContext;

// 위의 두 줄의 코드 대신에 한줄로 표현이 가능하다.
export default createContext();
