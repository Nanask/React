import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

export const BBs = () => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  // bbs가 들어오면 session을 조회하고 값을 비교해서 user정보를
  // local스토리지에서 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http://localhost:3000" },
        credentials: "include",
      });
      const result = await res.json();
      console.log(result);
      await setUser(result);
    };
    fetchData();
  }, []);

  if (!user.userid) {
    alert("로그인을 먼저 실행해주세요");
    history.replace("/login");
  }

  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
};
