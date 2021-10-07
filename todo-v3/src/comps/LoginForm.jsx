import React, { useState } from "react";
import "../css/Login.css";

export const LoginForm = () => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });
  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });
    if (res?.ok) {
      console.log(res);
      const result = res.json();
      //   alert(JSON.stringify(result));
      console.log("json", result);
      return result;
    } else {
      console.log("실패?");
    }
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
      <input name="password" onChange={onChange} placeholder="PASSWORD" />
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
