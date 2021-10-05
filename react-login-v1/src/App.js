import logo from "./logo.svg";
import "./App.css";
import { LoginForm } from "./comps/LoginForm";
import { Route } from "react-router-dom";
import { MainNav } from "./comps/MainNav";
import { JoinForm } from "./comps/JoinForm";

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

  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    { id: 3, title: "로그인", link: "/login", align: true },
    { id: 4, title: "회원가입", link: "/join" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav navList={navList}>
        <Route path="/login" exact>
          <LoginForm />
        </Route>
        <Route path="/join" exact>
          <JoinForm />
        </Route>
      </MainNav>
    </div>
  );
}

export default App;
