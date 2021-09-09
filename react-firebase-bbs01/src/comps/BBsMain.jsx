import React, { useEffect, useState } from "react";
import "../css/bbs.css";
import { firestore } from "../config/FirebaseConfig";

function BBsMain() {
  let [bbsBody, setBBsBody] = useState([]);
  const firebaseFetch = () => {
    firestore
      .collection("bbs")
      .get()
      .then((bbsList) => {
        bbsList.forEach((bbs) => {
          const item = bbs.data();
          setBBsBody([
            ...bbsBody,
            <tr>
              <td>{item.b_date}</td>
              <td>{item.b_time}</td>
              <td>{item.b_write}</td>
              <td>{item.b_subject}</td>
            </tr>,
          ]);
        });
      });
  };

  //   bbsBody = await bbsList.map((bbs) => {
  //     // console.log(bbs.data());
  //     const item = bbs.data();
  //     return (
  //       <tr>
  //         <td>{item.b_date}</td>
  //         <td>{item.b_time}</td>
  //         <td>{item.b_writer}</td>
  //         <td>{item.b_subject}</td>
  //       </tr>
  //     );
  //   });
  // };

  // 최초로 실행될 때 firebase를 가지고와서 보여주는 코드
  useEffect(firebaseFetch, []);

  return (
    <table className="bbs_list">
      {/* <thead> 리엑트를 쓸때는 그냥 써주자 안써주면 경고뜬대요 */}
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
