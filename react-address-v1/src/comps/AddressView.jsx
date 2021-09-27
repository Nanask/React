import React from "react";
import AddressInput from "./AddressInput";

function AddressView(props) {
  const { input } = props;

  return (
    <div>
      <AddressInput args={props} />
      <div>name : {input.name}</div>
      <div>address : {input.address}</div>
      <div>tel : {input.tel}</div>
      <div>age : {input.age}</div>
    </div>
  );
}

export default AddressView;
