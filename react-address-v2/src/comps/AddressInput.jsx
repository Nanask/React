import React, { useState } from "react";

function AddressInput({ args }) {
  const { input, setInput, addrList, setAddrList } = args;

  const changeHandle = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });

    console.log(name, value);
  };

  const btnClick = (e) => {
    // 객체 input이 들어가있는 것
    const _addrList = [...addrList, input];

    console.log(_addrList);

    // setAddrList([..._addrList]);
    // 위의 _addrList가 객체+객체로 리스트형태로 들어가있기 때문에
    // 리스트를 넣어주자
    setAddrList(_addrList);
  };
  return (
    <div>
      <div>
        <input name="name" onChange={changeHandle} placeholder="이름을 입력해주세요" />
      </div>
      <div>
        <input name="address" onChange={changeHandle} placeholder="주소를 입력해주세요" />
      </div>
      <div>
        <input name="tel" onChange={changeHandle} placeholder="전화번호를 입력해주세요" />
      </div>
      <div>
        <input name="age" onChange={changeHandle} placeholder="나이를 입력해주세요" />
      </div>
      <div>
        <button onClick={btnClick}>추가하기</button>
      </div>
    </div>
  );
}

export default AddressInput;
