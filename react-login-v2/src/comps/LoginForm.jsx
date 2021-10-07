import React from "react";
import "../css/login.css";
import { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { MyButton } from "./MyButton";
import { useHistory } from "react-router";
import { fetchLogin } from "../modules/Fetchmodule";

export const LoginForm = () => {
  const { setUser } = useUserContext();

  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

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
  // id와 비밀번호를 데이터로 가져오기
  const onLogin = async (e) => {
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    history.replace("/");
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
        <MyButton onClick={onInsert} backgroundColor="green">
          로그인
        </MyButton>
        {/* <button onClick={onInsert}>로그인</button> */}
        {/* <button onClick={Join}>회원가입</button> */}
      </div>
    </div>
  );
};
