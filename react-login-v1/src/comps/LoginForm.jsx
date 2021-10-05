import React from "react";
import "../css/login.css";
import { useState } from "react";

export const LoginForm = () => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onInsert = (e) => {
    if (account.userid == null || account.userid === "") {
      alert("아이디를 입력하세요");
      return;
    }
    if (account.password == null || account.password === "") {
      alert("비밀번호를 입력하세요");
      return;
    }
    onLogin();
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res자체가 undefinded 또는 null 값이다.
    // if(res){}연산을 하면 res가 정상인지 확인할 수 있다.
    // res가 정상이 아닐때는 res.ok에서 오류가 발생한다.
    // JS ES6+ 버전에서는 safe null 검사를 수행하는 코드가 있다.
    if (res?.ok) {
      // res가 정상(null, undefined 가 아니면) ok 속성을 검사하라
      // null로 인한 오류를 방지하는 코드다
      // 정상적으로 데이터가 날아오면
      // const users = await res.json();
      const user = await res.json();

      // return 문을 넣거나 {}를 없애자
      // const user = users.find((item) => {
      // return item.userid === account.userid;
      // });
      console.log("user", user);

      // if (!user || user.password !== account.password)
      // if (!user) {
      if (!user) {
        alert("아이디가 없습니다.");
        return;
      }

      if (user.password !== account.password) {
        alert("아이디,비밀번호 오류");
        return;
      }

      alert("로그인성공");
    }
  };
  return (
    <div className="login_box">
      <div>
        <input name="userid" onChange={onChange} placeholder="아이디를 입력해주세요" />
      </div>
      <div>
        <input name="password" onChange={onChange} name="password" type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div>
        <button onClick={onInsert}>로그인</button>
        {/* <button onClick={Join}>회원가입</button> */}
      </div>
    </div>
  );
};
