import logo from './logo.svg';
import './App.css';
import Write from "./components/write.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <section>
		   <Write/>
	   </section>
      </header>
    </div>
  );
}

export default App;
