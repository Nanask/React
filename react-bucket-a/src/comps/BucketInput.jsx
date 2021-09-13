import React from "react";

function BucketInput(props) {
  //   const { BucketList } = props;

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = e.target.value;
      // 전달받은 buck_insert() 함수에
      // input에 입력된 bucket text를 전달하기
      props.bucket_insert(bucket);
      //   alert("Enter");
    }
  };
  return (
    <div className="w3-form-control w3-margin">
      <input onKeyDown={onKeyDown} className="w3-input w3-border w3-hover-gray w3-round" placeholder="버킷에 추가할 내용을 입력하세요" />
    </div>
  );
}

export default BucketInput;
