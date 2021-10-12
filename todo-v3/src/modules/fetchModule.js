const fetchOption = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
  },
  credentials: "include",
};

const fetchUser = async () => {
  const response = await fetch("http://localhost:8080/users", fetchOption);

  console.log("response", response);
  if (response?.ok) {
    const resultUser = response.json();
    return resultUser;
    // return await response.json();
    // console.log("response", response.json);
  } else return [];
};

const fetchLogin = async (userid, password) => {
  // 이미 선언된 fetchOption에 body 속성을 추가하기
  fetchOption.body = JSON.stringify({ userid, password });

  const response = await fetch("http://localhost:8080/users/login", fetchOption);

  if (response?.ok) {
    console.log(response);
    const result = await response.json();
    console.log("json", result);
    return result;
  } else {
    // console.log("login fail");
    alert("Login fail");
    return [];
  }
};

const fetchLogout = async () => {
  const response = await fetch("http://localhost:8080/users/logout", fetchOption);

  console.log("logout", response);

  const res = response.json();

  // return response.json();
  return res;
};

export { fetchLogin, fetchUser, fetchLogout };

// const res = await fetch("http://localhost:8080/users/login", {
// 	method: "POST",
// 	headers: {
// 	  "Content-Type": "application/json",
// 	  "Access-Control-Allow-Origin": "http://localhost:3000",
// 	},
// 	credentials: "include",
// 	body: JSON.stringify({
// 	  userid: account.userid,
// 	  password: account.password,
// 	}),
//   });
//  setUser(res)

//   if (res?.ok) {
// 	console.log(res);
// 	const result = res.json();
// 	//   alert(JSON.stringify(result));
// 	console.log("json", result);
// 	return result;
//   } else {
// 	console.log("실패?");
