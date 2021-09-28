import React from "react";

function AddressList({ addrBook }) {
  const viewList = addrBook.map((addr, index) => {
    return (
      <tr key={addr.a_id}>
        <td>{index + 1}</td>
        <td>{addr.a_name}</td>
        <td>{addr.a_addr}</td>
        <td>{addr.a_tel}</td>
        <td>{addr.a_age}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>이름</td>
          <td>주소</td>
          <td>전화번호</td>
          <td>나이</td>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AddressList;
