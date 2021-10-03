import logo from './logo.svg';
import './App.css';
import { AddressMain } from './comps/AddressMain';
import { BrowserRouter } from 'react-router-dom';
import { AddressInput } from './comps/AddressInput';
import { AddressList } from './comps/AddressList';
import { MainNav } from './comps/MainNav';
import { Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav/>
        <Route path="/" exact>
        <AddressMain>    
          {/* <Route path="/insert" component={AddressInput} exact> */}
            <AddressInput/>
          {/* </Route> */}
          {/* <Route path="/list" component={AddressList} exact> */}
            <AddressList/>
        {/* </Route> */}
        </AddressMain> 
        </Route>    
      </div>
 
    </BrowserRouter>
  );
}

export default App;
