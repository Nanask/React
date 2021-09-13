import logo from "./logo.svg";
import "./App.css";
import { bucketMain, Header } from "./comps";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" component={bucketMain} />
        <bucketMain />
      </Router>
    </div>
  );
}

export default App;
