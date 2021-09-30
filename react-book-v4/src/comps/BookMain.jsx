import React, { useState } from "react";
import { Route } from "react-router-dom";

import BookInput from "./BookInput";
import AppContextProvider from "../context/AppContextProvider";
import BookList from "./BookList";

function BookMain() {
  return (
    //     <AppContextProvider> 안에 있는 것들은 전부 매개변수로 전달받는다.
    <>
      <AppContextProvider>
        <Route path="/" exact>
          여기는 홈화면
        </Route>
        <Route path="/insert">
          <BookInput />
          {/* <BookView />  */}
          {/* 위코드처럼 사용하면 두가지의 컴포넌트를 합성하여 다시 화면을 보여준다. */}
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </AppContextProvider>
    </>
  );
}

export default BookMain;
