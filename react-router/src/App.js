import logo from './logo.svg';
import './App.css';
import "./css/menu.css"
import Home from './comps/Home';
import About from './comps/About';
import BBsWriter from './comps/BBsWriter';

// BrowerRouter
// react-router에서 제공하는 컴포넌트 
// React에서 navigation을 구현할 때 navigtion에 포함 될
// 컴포넌트들을 감싸는 Super Navi 컴포넌트

// Link
// Navigation Menu를 구현할 때 사용하는 컴포넌트
// React에서도 a tag를 사용할 수 있지만 오류가 발생할 수 있기 때문에 Link를 사용
// 실제 rendering되면 a tag로 변화하는 컴포넌트
// React에서는 a tag 사용하여 page를 전환하는 코드를 사용하지 않는다.

// Route
// navigation의 menu를 선택했을 때
// 선택적으로 컴포넌트를 나타나게 하는 도구
// 이 컴포넌트를 사용하여 Home, About, BBsWriter 컴포넌트와 Link 컴포넌트 연결하기
import {BrowserRouter, Link, Route} from "react-router-dom";


function App() {
  return (
	<BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>나의 React project</h3>
      </header>
	  <ul className="main_menu">
		  <li><Link>Home</Link></li>
		  <li><Link>나의 소개</Link></li>
		  <li><Link>자유게시판</Link></li>
	  </ul>
	  {/* path로 요청이 되면 각각 요청된 곳으로 가라 */}
	  {/* exact 이것을 사용하면 앞에 사이트가 따라오지 않는다? */}
	  <Route path= "/" component={Home} exact />
	  <Route path= "/about" component={About}/>
	  <Route path= "/bbs" component={BBsWriter}/>
    </div>
	</BrowserRouter>
  );
}

export default App;
