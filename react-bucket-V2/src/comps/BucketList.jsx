import React from "react";
import BucketItem from "./BucketItem";

function BucketList(props) {
  /**
   * 부모 컴포넌트로부터 전달받은 bucketList를 사용하기 위해 변수로 선언
   *
   * bucketMain에서 보낸 배열변수와 2개의 함수를 props로 부터 분리해내기
   */
  const { bucketList } = props.args;

  const buckBody = bucketList.map((bucket) => {
    // bucketItem으로 넘긴 값을 import하여 컴포넌트에 넘겨주기
    return <BucketItem args={props.args} bucket={bucket} />;
    // flag_change={flag_change} bucket_update={bucket_update} />;
  });
  return (
    <table className="w3 table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
      </thead>
      {/* <tbody>
        <tr>
          <td>일반</td>
          <td>2021-09-13 00:00:00</td>
          <td>리엑트 정복</td>
          <td>＠</td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </tbody> */}
      <tbody>{buckBody}</tbody>
    </table>
  );
}

export default BucketList;
