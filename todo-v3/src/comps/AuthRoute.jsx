import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { fetchUser } from "../modules/fetchModule";

export const AuthRoute = ({ children }) => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const fetchCallback = useCallback(async () => {
    const resultUser = await fetchUser();
    // if (!user?.userid) {
    if (!resultUser?.userid) {
      //   console.log("user를내놔라", user);
      console.log("user를내놔라", resultUser);
      await setUser(resultUser);
      history.replace("/login");
    }
  }, []);
  useEffect(fetchCallback, [fetchCallback]);

  return <>{children}</>;
};
