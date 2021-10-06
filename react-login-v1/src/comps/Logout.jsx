import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

export const Logout = () => {
  const history = useHistory();
  const [setUser] = useUserContext();

  useEffect(() => {
    const logout = async () => {
      await setUser([]);
      history.replace("/");
    };
    logout();
  }, []);
  return <div></div>;
};
