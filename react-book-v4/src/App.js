import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNav from "./comps/MainNav";
import Nav from "./comps/Nav";
import BookMain from "./comps/BookMain";
import BookInput from "./comps/BookInput";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav />
        <BookMain />
        {/* <BookInput /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
