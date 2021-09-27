import React from "react";
import AddressInput from "./AddressInput";

function AddressView(props) {
  const { addrList } = props;
  const body = addrList.map((input) => {
    return (
      <div>
        {/* <AddressInput args={props} /> */}
        <div>name : {input.name}</div>
        <div>address : {input.address}</div>
        <div>tel : {input.tel}</div>
        <div>age : {input.age}</div>
      </div>
    );
  });
  // 함수리턴 필요
  return (
    <div>
      {/* 컴포넌트  */}
      <AddressInput args={props} />
      {body}
    </div>
  );
}

export default AddressView;
