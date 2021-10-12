import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchLogout } from "../modules/fetchModule";

function LogoutForm() {
  const history = useHistory();
  const { setUser } = useUserContext();
  const fetchOut = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    // console.log("user", user);
    history.replace("/");
  }, []);

  useEffect(fetchOut, [fetchOut]);
  return <></>;
}

export default LogoutForm;
