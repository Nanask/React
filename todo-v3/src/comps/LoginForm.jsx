import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import "../css/Login.css";
import { fetchLogin } from "../modules/fetchModule";

export const LoginForm = () => {
  const { user, setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onLogin = async (e) => {
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    console.log("user좀보자", resultUser);
    history.replace("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
    console.log(account);
  };

  //   const onChange = (e) => {
  //     const { name, value } = e.target;
  //     setAddress({ ...address, [name]: value });
  //     console.log(name, value);
  //   };

  return (
    <div className="login_form">
      <input name="userid" onChange={onChange} placeholder="ID" />
      <input type="password" name="password" onChange={onChange} placeholder="PASSWORD" />
      <div>
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
};
