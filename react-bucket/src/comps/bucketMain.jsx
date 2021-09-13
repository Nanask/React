import React from "react";
import "../css/main.css";

function bucketMain() {
  return (
    <div>
      <div className="input_box">
        <input name="text_box" type="text" placeholder="무엇을 적을까요?" />
      </div>
      <table className="main_list">
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
        <tr>
          <td>일반</td>
          <td>2021-09-01</td>
          <td>리엑트 정복</td>
          <td>@</td>
          <td>
            <input type="checkbox" name="ch1" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default bucketMain;
