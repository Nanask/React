import logo from './logo.svg';
import './App.css';

// 개별로 컴포넌트를 사용할 수 있다.
// import Header from './comps/Header';
// import Footer from './comps/Footer';
// import RemBody from './comps/RemBody';

//  index.js 파일을 사용하여 통합관리하기
// import {Header, Rembody, Rembody} from "./comps/index"

// index.jsx에 있는 모든 컴포넌트를 가져오지 않고 필요한것만 가져와서 사용도 가능
/**
 * import from "./comps" 코드를 만나면
 * 먼저 "./comps.js" 또는 "./comps.jsx" 파일을 찾는다
 * 없으면 ./comps 폴더를 찾는다
 * 그리고 폴더에 index.js 또는 index.jsx 파일을 찾는다.
 * 있으면 해당 파일에 설정된 값들을 import
 * 
 * ./comps 폴더에 index.js(jsx) 파일이 있으면 파일 이름을 생략할 수 있다.
 */

import {Header, Footer, RemBody} from "./comps";
// 자바스크립트에서 지원되는 코드로 밑처럼 사용가능
// 필요한 것들을 묶어서 보여주는 것
// import {Header,Footer} from "./comps"
// import {Rembody} from "./comps"

function App() {
  return <div className="App">
	  <Header/>
	  <RemBody/>
	  <Footer/>
  </div>

}

export default App;
