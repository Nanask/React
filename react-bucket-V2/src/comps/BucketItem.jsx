import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];
// {bucket}
// props.bucket을 직접 사용하도록 변수 생성하기
function BucketItem({ args, bucket }) {
  //  bucket는 list에서 props.args로 보내지 않고 별도로 전송했기 때문에 따로 받도록 설정함
  const { flag_change, bucket_update, bucket_complete, bucket_cencel } = args;
  // const BucketItem{ bucket, flag_change, bucket_update }

  const [b_update, setB_Update] = useState({
    b_title: "",
    isEdit: false,
  });

  const onItemClick = (e) => {
    // e.currentTarget
    // 직접 이벤트가 설정된 tag
    const itemTr = e.currentTarget;
    const b_id = itemTr.dataset.id;
    const itemTd = e.target;
    if (itemTd.tagName === "TD") {
      const className = itemTd.className;
      if (itemTd.className.includes("b_flag")) {
        flag_change(b_id);
      } else if (className.includes("b_title")) {
        // input box가 나타나는 코드
        setB_Update({
          isEdit: true,
          b_title: bucket.b_title,
        });
      } else if (className.includes("b_end_date")) {
        // 완료를 클릭하면 현재 날짜 시간을 표시하여 완료되었음을 나타내기
        // 완료를 다시 클릭하면 날짜 표시를 없애기
        const message = bucket.b_end_check ? "완료를 취소합니다" : "버킷을 완료했나요?";
        if (window.confirm(message)) {
          bucket_complete(b_id);
        }
      }
    }
    if (itemTd.tagName === "INPUT" && itemTd.type === "checkbox") {
      // className.includes("b_title"))
      bucket_cencel(b_id);
      // setB_Update({
      //   b_title: bucket.b_title,
      //   isEdit: true,
      // });
    }
  };

  const bucket_KeyDown = (e) => {
    if (e.keyCode === 13) {
      const b_title = e.target.value;
      const b_id = e.target.closest("TR").dataset.id;
      alert(b_id);
      setB_Update({ ...b_update, isEdit: false });
      // b_id와 b_title을 BucketMain으로 보내서 update 수행하기
      bucket_update(b_id, b_title);
    } else if (e.keyCode === 27) {
      setB_Update({ ...b_update, isEdit: false });
    }
  };
  return (
    // map으로 반복해서 만들어진 값들은 전부 id가 있어야 한다.
    <tr className={bucket.b_cencel ? "cencel" : ""} key={bucket.b_id} data-id={bucket.b_id} onClick={onItemClick}>
      <td className="b_flag">{b_flag_text[bucket.b_flag % 4]}</td>
      <td className="b_start_date">{bucket.b_start_date}</td>
      {/* <td className="b_title" data-id={bucket.b_id}></td> */}
      {b_update.isEdit ? (
        <td className="b_title">
          <input onKeyDown={bucket_KeyDown} defaultValue={b_update.b_title} />
        </td>
      ) : (
        <td>{bucket.b_title}</td>
      )}
      {bucket.b_end_check ? <td className="b_end_date">{bucket.b_end_date}</td> : <td>⊙</td>}

      <td>
        <input type="checkbox" checked={bucket.b_cencel} />
      </td>
    </tr>
  );
}

export default BucketItem;
