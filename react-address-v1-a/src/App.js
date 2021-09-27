import "./App.css";
import { useState } from "react";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";

function App() {
  // json타입으로 초기화
  // input name에는 사용하는 이름과 같은 것으로 사용하자
  // name이라는 변수는 사용할때 오류가 발생할 수 있으므로 name만 사용하지 말고
  // 변화시켜서 사용하자
  const [address, setAddress] = useState({
    u_name: "",
    u_address: "",
    u_tel: "",
    u_age: 0,
  });
  return (
    <div className="App">
      <header className="App-header">
        <AddressInput setAddress={setAddress} address={address} />
        <AddressView address={address} />
      </header>
    </div>
  );
}

export default App;
