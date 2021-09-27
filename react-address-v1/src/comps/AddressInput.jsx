import React from "react";

function AddressInput({ args }) {
  const { input, setInput } = args;

  const changeHandle = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });

    console.log(name, value);
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
    </div>
  );
}

export default AddressInput;
