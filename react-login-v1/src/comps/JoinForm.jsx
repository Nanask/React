import React from "react";
import "../css/Join.css";
import { useState, useRef } from "react";

export const JoinForm = () => {
  const [join, setJoin] = useState({
    userid: "",
    password: "",
    e_mail: "",
  });

  const joinTextId = useRef();
  const joinTextPw = useRef();
  const joinTextPwC = useRef();
  const joinTextE = useRef();

  const onJoin = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
    console.log("join", join);
  };
  const joinInsert = (e) => {
    if (join.userid == null || join.userid === "") {
      alert("아이디를 입력하세요");
      joinTextId.current.focus();
      return;
    }
    if (join.password == null || join.password === "") {
      alert("비밀번호를 입력하세요");
      joinTextPw.current.focus();
      return;
    }
    if (join.passwordCheck == null || join.passwordCheck === "") {
      alert("비밀번호를 한번 더 입력하세요");
      joinTextPwC.current.focus();
      return;
    }
    if (join.e_mail == null || join.e_mail === "") {
      alert("비밀번호를 입력하세요");
      joinTextE.current.focus();
      return;
    }
  };

  return (
    <div className="join_form">
      <input ref={joinTextId} onChange={onJoin} name="userid" type="text" placeholder="아이디를 입력해주세요" />
      <input ref={joinTextPw} onChange={onJoin} name="password" type="password" placeholder="비밀번호를 입력해주세요" />
      <input ref={joinTextPwC} onChange={onJoin} name="passwordCheck" type="password" placeholder="비밀번호를 한번 더 입력해주세요" />
      <input ref={joinTextE} onChange={onJoin} name="e_mail" type="email" placeholder="E_mail을 입력해주세요" />
      <button onClick={joinInsert}>회원가입</button>
    </div>
  );
};
