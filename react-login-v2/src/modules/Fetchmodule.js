const fetchLogin = async (userid, password) => {
  const response = await fetch("http://localhost:8080/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
    body: JSON.stringify({
      userid,
      //   : account.userid,
      password,
      //   : account.password,
    }),
    // 로그인은 데이터를 받아와서 실행해야하기 때문에 필요한것
  });
  // fetch를 실행해서 데이터가 있으면 user를 return 아니면 빈배열을 return
  if (response?.ok) {
    const resultUser = response.json();
    return resultUser;
  } else {
    return [];
  }
};

const fetchJoin = async (joinData) => {
  const response = await fetch("http://localhost:8080/users/join", {
    // 데이터가 잘 받아졌는지 확인하기 위해
    // const response로 받아주기
    method: "POST",
    // 서버에 보낼때 json타입으로 보내겠다는 의미
    headers: {
      "Content-Type": "application/json",
    },
    // JSON형태로 변환시켜서 보내기
    body: JSON.stringify(joinData),
  });
  // 여기까지 데이터를 보내기 위한 절차
  if (response.ok) {
    const json = await response.json();
    // 문자열을 json타입으로 변환시켜 alert로 보여주기
    alert(JSON.stringify(json));
    // console.log("json", json);
  }

  // 회원가입은 데이터전체를 받아서 사용하는 것이기 때문에 받는 데이터가 정해져있지 않다
};

const FetchUser = async () => {
  const response = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });

  return response.json();
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8080/users/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
    credentials: "include",
  });
  return response.json();
};

export { fetchJoin, fetchLogin, FetchUser, fetchLogout };
