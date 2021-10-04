import logo from './logo.svg';
import './App.css';
import { AddressMain } from './comps/AddressMain';
import { BrowserRouter } from 'react-router-dom';
import { AddressInput } from './comps/AddressInput';
import { AddressList } from './comps/AddressList';
import { MainNav } from './comps/MainNav';
import { Route } from 'react-router-dom'
import { AddressMainBody } from './comps/AddressMainBody';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <MainNav/>
      <AddressMain>
      <Route path="/" exact>
        <AddressMainBody/>
        </Route> 
        <Route path="/insert" component={AddressInput} exact >  
        <AddressInput/>
        </Route>
        <Route path="/list" component={AddressList} >
        <AddressList/>
        </Route>
      </AddressMain>
      {/*   <Route path="/" exact>
        <AddressMain form={<AddressMainBody/>}/> 
        
          <Route path="/insert" component={AddressInput} exact >
            <AddressMain form={<AddressInput/>}/>
          </Route>
          <Route path="/list" component={AddressList} >
          <AddressMain form={<AddressList/>}/>
        </Route>
        {/* </AddressMain>  */}
        {/* </Route>      */}
      </div>
 
    </BrowserRouter>
  );
}

export default App;
