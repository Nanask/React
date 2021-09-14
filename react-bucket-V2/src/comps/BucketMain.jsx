import React, { useState } from "react";
import BucketList from "./BucketList";
import BucketInput from "./BucketInput";
import uuid from "react-uuid";
import moment from "moment";

function BucketMain() {
  // 버킷리스트를 담는 리스트
  //List형태로 만들어 줘야하기 때문에 []로 감싸기
  const [bucketList, setBuckList] = useState([
    // {
    //   b_id: 0,
    //   b_flag: 0,
    //   b_start_date: "2021-09-13",
    //   b_title: "리엑트 정복",
    //   b_end_data: "",
    //   b_end_check: false,
    //   b_cancel: false,
    // },
    // {
    //   b_id: 0,
    //   b_flag: 0,
    //   b_start_date: "2021-09-13",
    //   b_title: "추석맞이",
    //   b_end_data: "",
    //   b_end_check: false,
    //   b_cancel: false,
    // },
  ]);

  const bucket_insert = (bucket_text) => {
    const bucket = {
      b_id: uuid(),
      b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
      b_title: bucket_text,
      b_flag: 0,
      b_end_date: "",
      b_end_check: false,
      b_cencel: false,
    };
    // 원래있던 bucketList에 새로운 bucket을 추가하기
    setBuckList([...bucketList, bucket]);
  };
  // 클릭된 것이 무엇인지 알려주기 위해 id를 매개변수로 받는다.
  const flag_change = (id) => {
    // 리스트에서 input_box 항목을 클릭하면 실행 할 함수
    // flag를 누르면 bucket을 가져와서
    // const bucket_update = (id, title);
    const _bucketList = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        /**
         * 전달받은 id와 같은 항목의 flag를 1 증가시키기
         */
        return { ...bucket, b_flag: bucket.b_flag + 1 };
      } else {
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };
  /**
   *
   * int[] nums = {1,2,3,4,5,6,7}
   * for(int i = 0 ; i < nums.length ; i++) {
   * 	if(nums[i] ==3) {
   * 	break
   * }
   * }
   *  와 같음
   */

  const bucket_update = (id, title) => {
    const _bucketList = bucketList.map((bucket) => {
      // bucket.b_id와 전달받은 id가 같다면
      if (bucket.b_id === id) {
        // b_id가 id값과 같으면
        // bucket에 담긴 항목중에서 b_title 항목만 변경하여 통째로 return
        return { ...bucket, b_title: title };
      } else {
        // b_id가 id와 같지 않으면
        // 아무것도 변경없이 bucket을 그대로 return
        return bucket;
      }
    });
    setBuckList(_bucketList);
  };
  // 원래의 list를 새로운 list로 바꾸기

  /**
   * JS에서
   * 문자열 변수에 담긴 값이 ""이거나 null 이거나 undefined 이거나
   * 숫자형 변수에 담긴 값이 0 이거나 NaN(숫자가아니거나) 이러한 값이면
   *
   * 변수와 함께 논리연산자가 묶였을 때
   *
   * 예)
   * let 변수 = "";
   * 변수 || 와 같은 코드를 만나면 이 결과는 false가 된다.
   *
   * 변수 = 변수 || " 대한민국"이라는 코드를 작성하면
   * 1. 원래 변수에 ""이 담겨 있으므로 변수 || 은 false가 되고
   * 2. OR 연산을 수행하려고 시도한다.
   * 3. 양쪽 값이 모두 true 일때만 true가 되고 변수 || 연산은 false이므로
   *   이후에 나타나는 코드를 수행하여 좌항의 변수에 대한민국 문다열을 담게 된다.
   *
   * 변수 = "" || "우리나라" 이런 코드를 만나면
   * 변수에는 우리나라 라는 문자열이 담기게 된다.
   *
   * 변수 ="대한민국" || "우리나라" 이런 코드를 만나면
   * 앞단에서 이미 true가 연산되고 변수에는 대한민국 문자열이 담기게 된다.
   *
   */
  const bucket_cencel = (id) => {
    const _complete = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          // b_end_check: true,
          b_cencel: !bucket.b_cencel,
        };
      } else {
        return bucket;
      }
    });
    setBuckList(_complete);
  };

  const bucket_complete = (id) => {
    const _complete = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_end_date: bucket.b_end_date || moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
          // b_end_check: true,
          b_end_check: !bucket.b_end_check,
        };
      } else {
        return bucket;
      }
    });
    setBuckList(_complete);
  };

  const args = {
    bucketList: bucketList,
    flag_change: flag_change,
    bucket_update: bucket_update,
    bucket_complete: bucket_complete,
    bucket_cencel,
  };

  return (
    <div className="w3-container-fluid">
      <BucketInput bucket_insert={bucket_insert} />
      <BucketList args={args} />
    </div>
  );
}

export default BucketMain;
