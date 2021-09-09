import "./App.css";
import { Header, MainNav, Footer, BBsMain } from "./comps";
import { BrowserRouter, Route } from "react-router-dom";
import BBsWrite from "./comps/BBsWrite";
// import Header from "./comps/Header";
// import Footer from "./comps/Footer";
// import MainNav from "./comps/MainNav";
// import BBsMain from "./comps/BBsMain";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MainNav />
        <Route path="/" component={BBsMain} exact />
        <Route path="/bbs" component={BBsWrite} />
        {/* <Route path="/login" component={login} />
        <Route path="/join" component={join} /> */}
        {/* <BBsMain /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
