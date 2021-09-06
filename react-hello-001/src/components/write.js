import { useState } from "react";
// useState는 리엑트에서 제공하는 함수

import BBsView from "./view";

// 자바스크립트의 표준변수설정
const bbs = {
  b_date: "2021-09-06",
  b_time: "11:24:00",
  b_wirter: "홍길동",
  b_subject: "비가 오는 월요일",
  b_content: "가을장마가 기이이이이일다.",
};

/**
 * bbs 객체의 요소들을 input box value 속성에 지정(할당)했다.
 * 이 form 화면이 보여지는 상태에서 input box를 클릭하고
 * 키보드로 뭔가를 입력하면(변경하면)
 * 결국에 value 속성에 할당된 bbs 객체의 요소의 값들이 변경될 것이다.
 *
 * HTML에서 <input value="b_name" value="b_name">이라는 코드는
 * 결국 화면에서 b_name input box를 클릭하고
 * 키보드로 이름(문자열)을 입력하면 내부에서
 * b_name = scan.nextString()과 유사한 코드가 실행되어
 * b_name이라는 변수에 문자열을 저장하도록 코드가 작동될것이다.
 *
 * 하지만 react에서는 b_name = 이름과 같은 코드는 금지된다.
 * 사용할 수는 있으나 서버가 폭주할 수 있다 ㄷㄷㄷ
 * 그래서 react로 from을 만들고 value속성에 변수명을 지정하는 순간
 * input box는 read only가 된다.
 *
 * 그렇다면 input에 뭔가를 입력하고 싶은데
 * read only가 되어버리면 input을 사용하는 의미가 없어진다.
 * react에서는 input box에 change event를 설정하고
 * 키보드 입력된 문자열을 가로채서 state() 함수를 사용하여 값을 변화시켜야 한다.
 */
const Write = () => {
  // b_+
  const [b_name, setB_Name] = useState("이몽룡");

  /**
   * bbsVO 상태(객체)를 생성하고 초기값은 b_date 등등의 요소와 값으로 설정하고
   * 상태(객체)의 값을 변화(변경)하고자 할 때
   * setBBsVO() 라는 함수를 사용하겠다.
   */
  const [bbsVO, setBBsVO] = useState({
    b_date: "2021-09-06",
    b_time: "11:24:00",
    b_wirter: "홍길동",
    b_subject: "비가 오는 월요일",
    b_content: "가을장마가 기이이이이일다.",
  });

  // event 객체를 매개변수로 갖는
  // 핸들러 함수

  /**
   * input[name="b_writer"] box를 클릭하고
   * 키보드로 문자열을 입력하면 반응하는 event 핸들러 함수
   * 키보드로 입력된 문자열은 e.target.value에 담겨서 전달된다.
   * 전달된 키보드 문자열은 b_writer_text 변수에 임시로 담고
   * setB_Name() 함수를 사용하여 b_name 변수에 값을 세팅한다.
   *
   * React 내부 rendering되는 알고리즘
   * setB_Name() 함수에 문자열이 전달되면
   * 내부에서는
   * 1. 전달된 문자열을 임시 변수에 할당
   * 	const_b_name = 전달된 문자열
   * 2. 실제 b_name 변수가 가리키고 있는 메모리의 주소를
   * 	_b_name(임시변수) 주소로 변경한다.
   * 3. 결국 원래 b_name 변수와 새로만들어진 _b_name 변수가 생성이 된다.
   * 4. react 원래 b_name 변수와 새로 생성된 _b_name 변수를 비교하여
   * 	변화가 있으면 rendering한다.
   * 	원래 변수와 가상변수가 값이 다르다면!! rendering을 하지 않는다.
   * 	즉 무한하게 rendering하는 것을 막는다.
   */
  const onWriterChangeHandle = (e) => {
    // e.target의 요소들을 분해(전개)하여 개별 변수로 선언하기
    //const name = e.target.name
    // const value = e.target.value
    // input box의 이름과 키보드로 입력한 문자열을 추출할 수 있다.
    // 인풋박스의 name,value값을 각각 담는다.
    const { name, value } = e.target;
    console.log("change", name, value);

    // bbsVO를 복제하고 b_date값만 변경하라

    const _bbs_data = { ...bbsVO, b_date: "2030-01-01" };
    // bbs중에 요소만 변경하기
    // setBBsVO에서 새로운 객체를 만드는데..
    // 원래있던 bbsVO를 그대로 전개하고 name값에 value를 집어넣어라?
    // setBBsVO({...bbsVO, b_date:value})
    /**
     * 전개연산자를 사용하여 bbsVO의 전체데이터를 복제하고 name 변수에 담긴 값과 같은 요소를 *
     * value값을 변경하여 원래의 bbsVO와 교체하라
     *
     * bbsVO[name] = value : 절대 사용하면 안되는 코드
     */
    setBBsVO({ ...bbsVO, [name]: value }); // 인풋에 name값을 변경하라?
  };
  /**
   * <BBsView bbs={bbsVO} />
   * 1.import된 BBSView를 화면에 연결하라
   * 2. 현재(write.js)에서 선언된 state 객체를 bbs라는 이름의 변수에 담아서 BBsView에게 전달하라
   */
  return (
    <form>
      <p>
        <input name="b_date" defaultValue={bbs.b_date} onChange={onWriterChangeHandle} />
      </p>
      <p>
        <input name="b_time" defaultValue={bbs.b_time} />
      </p>
      <p>
        <input name="b_write" defaultValue={b_name} onChange={onWriterChangeHandle} />
      </p>
      <p>
        <input name="b_subject" defaultValue={bbs.b_subject} />
      </p>
      <p>
        <input name="b_content" defaultValue={bbs.b_content} />
      </p>
      <div>
        <BBsView bbs={bbsVO} b_name={b_name} />
      </div>
    </form>
  );
};
export default Write;
