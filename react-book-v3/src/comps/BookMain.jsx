import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookContext from "../context/BookContext";
import BookInput from "./BookInput";
import BookView from "./BookView";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을 때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_name: "자바야 놀자",
    b_genre: "IT 개발서",
  });

  const providerData = { book, setBook };

  return (
    // 와... 제일 바깥쪽 tag는 이름을 지워도 된대...
    // topdown방식, 클래스를 상속받아서 사용하는 방식
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈화면
        </Route>
        <Route path="/insert">
          <BookInput />
          {/* <BookView />  */}
          {/* 위코드처럼 사용하면 두가지의 컴포넌트를 합성하여 다시 화면을 보여준다. */}
        </Route>
        <Route path="/list" exact>
          여기는 리스트 보이기
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
