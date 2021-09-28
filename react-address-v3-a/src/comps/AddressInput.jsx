import React from "react";
import UUID from "react-uuid";

// function AddressInput({ props, stateGroup }) {
function AddressInput({ stateGroup }) {
  //   const { stateGroup } = props;
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...address, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };
  return (
    <div>
      <input value={address.a_name} name="a_name" onChange={onChangeHandler} placeholder="이름" />
      <input value={address.a_addr} name="a_addr" onChange={onChangeHandler} placeholder="주소" />
      <input value={address.a_tel} name="a_tel" onChange={onChangeHandler} placeholder="전화번호" />
      <input value={address.a_age} name="a_age" onChange={onChangeHandler} placeholder="나이" />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
