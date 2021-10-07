import logo from "./logo.svg";
import "./App.css";
import { MainComp } from "./comps/MainComp";
import UserContextProvider from "./context/UserContextProvider";

// 네비게이션 항목을 props로 받아오기
function App() {
  // const nav = [
  //   {
  //     menu: "HOME",
  //     menu: "공지사항",
  //     menu: "자유게시판",
  //     menu: "로그인",
  //     menu: "회원가입",
  //   },
  // ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserContextProvider>
        <MainComp />
      </UserContextProvider>
    </div>
  );
}

export default App;
