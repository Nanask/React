import React, { createContext, useContext, useState } from "react";
// 컴포넌트 타입으로 만들기

// 여기까지는 BookContext와 같은 코드
const AppContext = createContext();

/**
 * Hook함수
 *
 * react에서 state rendering 등을 관리하기 위한 함수 들
 * use로 시작되는 함수들
 * useState(), useEffect(),useCallback(), useContext()
 *
 * react가 초기에는 class 방식으로 코딩을 했다.
 * class 방식은 기존의 JS코드와 많이 문법적인 면들이 달라서
 * 함수방식을 도입한다 (16.x.x 버전에서)
 *
 * class방식에서는 기본적으로 제공하는 약 10여가지 method가 있다.
 * 이 method를 react에서는 lifeCycle method라고 불렀다.
 * 즉, 프로젝트가 시작될때 rendering이 시작될 때, rendering이 완료되었을때
 * 		현재 화면이 닫힐때 등등의 상황에서 event를 일으킨다.
 *
 * 개발자가 그 상황을 변형해서 react의 기능을 바꾸는 역할을 수행했다.
 *
 * class 방식의 lifeCycle method 함수방식의 react에서 구현하는 친구들 ==> Hook함수들
 *
 *
 */

// user Hook
// react에서 기본적으로 제공하는 hook()을 custumizing 하기
// useContext()는 초기에 생성한 Context를 항상 import하여
// 매개변수로 전달해야 하는 불편함이 있다.
// AppContext를 바라볼 수 있는(직접 접근할 수 있는) 곳에서
// useContext(context)를 싱행하여 매개변수를 지정하지 않아도
// 사용할 수 있도록 변경한 Hook
// Hook은 무조건 use로 시작해야 한다.
// Camel case로 명명해야 한다.
export const useBookContext = () => {
  return useContext(AppContext);
};

/**
 * 합성패턴을 사용하여 Context를 upgrade하기
 * 1. State를 생성하고 관리(setState) 할 컴포넌트의 주요 코드를
 * 		이곳으로 이동하였다.
 * 2. createContext()를 사용하여 context를 하나 생성
 * 3. <Context.Provider>로 시작되는 컴포넌트 코드로 변경하기
 * 4. 컴포넌트 함수의 매개변수에 {children}을 추가하기
 * 5. 컴포넌트 body에 {children}을 포함한다.
 */
function AppContextProvider({ children }) {
  const [book, setBook] = useState({
    b_id: 0,
    b_name: "",
    b_genre: "",
  });

  const [bookList, setBookList] = useState([]);

  // 기존에는 App.js에서 생성하던 코드
  const providerData = { book, setBook, bookList, setBookList };
  return (
    <>
      <AppContext.Provider value={providerData}>{children}</AppContext.Provider>
    </>
  );
}

export default AppContextProvider;
