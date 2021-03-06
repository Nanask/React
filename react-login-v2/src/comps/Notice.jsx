import React from "react";
import { useUserContext } from "../context/UserContextProvider";

export const Notice = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h1>공지사항</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
};
