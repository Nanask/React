import logo from './logo.svg';
import './App.css';
import "./css/menu.css"
import MainNav from './comps/MainNav';
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
import {BrowserRouter, Route} from "react-router-dom";


function App() {

	// 컴포넌트 코드내에서 inline style 생성하기

	/**
	 * navigation menu 설정할때
	 * Link 또는 NavLink 컴포넌트를 사용한다.
	 * 
	 * NavLink를 사용하면
	 * NavLink에 의해 활성화된 페이지가 열리면
	 * menu style을 지정하여 어떤 메뉴가 활성화 된 것인지를 표현할 수 있다.
	 * activeStyle={스타일변수}
	 * activeClassName={클래스명}
	 */
  return (
	<BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>나의 React project</h3>
      </header>
		<MainNav />
	  {/* path로 요청이 되면 각각 요청된 곳으로 가라 */}
	  {/* exact 이것을 사용하는 이유는 홈 이외에 다른 화면이 보이지 않게 하기 위함 */}
	  <Route path= "/" component={Home} exact />
	  <Route path= "/about" component={About}/>
	  <Route path= "/bbs" component={BBsWriter} exact/>
	  <Route path= "/bbs/write" component={BBsWriter}/>
    </div>
	</BrowserRouter>
  );
}

export default App;
