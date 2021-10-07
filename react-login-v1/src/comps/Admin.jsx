import React from "react";
import { useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

/**
 * 로그인이 되어 있을때만 내용을 확인할 수 있고
 * 로그인이 되어 있지 않을 때는 로그인 페이지로 redirect를 수행하도록 하자
 * 매우 간단한 인증(클라이언트 인증)
 * 1. user state 정보가 있냐?
 * 2. 있으면 관리자페이지를 보여주고
 * 3. 없으면 login redirect
 * => user state에 있는 사용자 정보가 정말 server에서 인증한 정상 사용자인지 알 수 있는 방법이 없다
 * 이런 상황이 발생하면 매우 보안에 위험한 상태가 된다
 *
 * 다음과 같은 절차를 수행해야 한다(서버 인증 절차)
 * 1. 페이지를 선택하면 서버에 query를 전송하여 현재 로그인 된 세션이 있는지 확인하고
 * 2. 로그인 세션이 있으면 세션정보를 user에 담고 페이지를 열어 보여주기
 * 3. 로그인이 된 세션이 없다면 로그인 페이지로 redirect 수행
 */
export const Admin = () => {
  const { user, setUser } = useUserContext();
  const history = useHistory();
  // user state정보가 없으면 로그인 페이지로 redirect

  if (!user?.userid) {
    history.replace("/login");
  }
  // user state 정보가 정말 로그인한 정상 사용자인지 확인
  // 정상적인 사용자라면 정보를 보여줄것이고 아니라면 빈 배열을 보여줄것임
  const fetchCb = useCallback(async () => {
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
      credentials: "include",
    });
    if (response?.ok) {
      // 데이터가 왔다면
      const resultUser = await response.json();
      if (resultUser?.userid) {
        setUser(resultUser);
      } else {
        history.replace("/login");
      }
    } else {
      history.replace("/login");
    }
    // 여기 왜 setUser가 들어가죠?
  }, [setUser]);
  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);
  // user state 정보가 있으면 관리자 페이지를 보여주기
  return <div>여기는 관리자 페이지</div>;
};
