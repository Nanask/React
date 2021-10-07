/**
 * 로그인을 수행해야 열어볼 수 있는 페이지들을
 * 통합 관리할 컴포넌트
 * 로그인을 수행해야 접근할 수 있는 Route들을 모아서 관리
 */

import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import { FetchUser } from "../modules/Fetchmodule";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  // user state 정보가 정말 로그인한 정상 사용자인지 확인
  // 정상적인 사용자라면 정보를 보여줄것이고 아니라면 빈 배열을 보여줄것임
  const fetchCb = useCallback(async () => {
    const resultUser = await FetchUser();

    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  useEffect(fetchCb, [fetchCb]);

  // <AuthRoute>내용<AuthRoute>
  return <>{children}</>;
};

export default AuthRoute;
