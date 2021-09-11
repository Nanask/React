import logo from "./logo.svg";
import "./App.css";
// BrowserRouter를 Router라는 이름으로 사용하겠다
import { BrowserRouter as Router, Route } from "react-router-dom";
import { BBsMain, Header, MainNav, Footer } from "./comps";
import { BBsWrite } from "./comps";
import { BBsDetail } from "./comps";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainNav />
        <section className="main_section">
          <Route path="/" component={BBsMain} exact />
          <Route path="/writer" component={BBsWrite} />
		  <Route path="/detail/:id" component={BBsDetail} />
          {/* <BBsMain /> */}
        </section>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
