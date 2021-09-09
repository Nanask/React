import React from "react";
import "../css/bbs.css";

function BBsMain() {
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
    </table>
  );
}

export default BBsMain;
