import React from "react";

function AddressInput({ address, setAddress }) {
  const onChangeHandler = (e) => {
    // 비구조화 문법
    const { name, value } = e.target;
    /**
     * 게산식 속성 이름, computed property name
     * 변수이름을 변수 값으로 생성하기
     * if(e.target.name === "u_name")
     * 		setAddress({...address, "u_name" : value})
     * else if(e.target.name == "u_address")
     * 		setAddress({...address,"u_addr" : vlaue})
     * JS ES6이상에서 새롭게 만들어진 변수생성 문법
     * 변수를 [] 묶어주고 값을 저장하면 변수에 담긴 문자열로 변수를 생성해주는 구조
     * const [name] = "대한민국" name 변수가 아닌 name에 담긴 문자열이 변수가 되는 구조
     *
     * CPN : 표현식을 사용하여 객체의 key를 정의하는 문법이다.
     */

    // 담겨있는 문자열이 변수로 생성되는것?
    setAddress({ ...address, [name]: value });
  };
  return (
    <div className="input_form">
      <div>
        <label>이름</label>
        <input onChange={onChangeHandler} name="u_name" />
      </div>
      <div>
        <label>주소</label>
        <input onChange={onChangeHandler} name="u_address" />
      </div>
      <div>
        <label>전화번호</label>
        <input onChange={onChangeHandler} name="u_tel" />
      </div>
      <div>
        <label>나이</label>
        <input onChange={onChangeHandler} name="u_age" />
      </div>
    </div>
  );
}

export default AddressInput;
