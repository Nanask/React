// state를 사용하려면 반드시 import해야함
import React, { useState } from 'react'
// JS코드에서 전반적으로 사용되는 날짜, 시간을 관리하는 객체
import moment from "moment"
import UUID from "react-uuid";

// th에 붙어있는 것들을 배열로 만들기
const headArray = ["날짜, 시간, 기억할일"];
const rem_header = () => {

	//제목배열을 map()을 이용하여 foreach하기
	return headArray.map(text=> {
		// 제목배열의 요소인 문자열을 포함하는 th tag를 생성하여 return
		return <th>{text}</th>
	})
}

const rememberSampleDate = {
	r_id : "0001",
	r_date : '2021-09-08',
	r_time : '10:36:00',
	r_remember : "나의 리멤버 리스트",
	r_comp : false // 완료표식, 더블클릭을 했을때 true로 변환하기
}
function RemList() {
	/**
	 * rememberList를 담을 배열을 상태로 선언하기
	 * 
	 */
	// useState를 빈 배열로 둘 경우 샘플데이터가 나오지 않는다.
	const [rememberList,setRememberList] = useState([]);
	/**
	 * list중 한 요소를 더블클릭하면
	 * 선택된 요소의 UUID값을 추출하여 
	 * 1. 해당 요소의 r_comp 값을 완료된 값으로 표시하기
	 * 2. 해당 요소의 값을 삭제하기
	 */

	const trOnClick =(e)=> {
		const td = e.target
		if(td.tagName === "TD") {
			const uuid = td.closest("TR").dataset.uuid;
			// alert(uuid);

			//리스트에서 선택된 요소의 UUID값이 담긴 것만 빼고(filtering)
			// 새로운 복제 _list 만들기

			// rememberList에 담겨있는 값을 foreach하면서
			// r_id와 uuid가 같지 않은 값만 return 하여
			// 임시변수인 _list 에 담아라
			// const _list = rememberList.filter(remember=> {
			// 	return remember.r_id !== uuid
			// })
			// filtering 된 list를 rememberList로 대치하기

			const _list = rememberList.map(remember=> {
				if(remember.r_id === uuid) {
					// 요소가 일치하지 않는다면 
					return {...remember, r_comp : !remember.r_comp}
				}
				return remember;
			})
			setRememberList([..._list])
		}
	}

	// map으로 for로 돌아온 값을 list_body라는 변수에 담기
	const list_body = rememberList.map(remember=> {
		return (
			// OnClick을 호출하면 밑에 있는 td들이 수신한다.
			<tr data-uuid={remember.r_id}
			className={remember.r_comp ? "comp" : ""}
			 onDoubleClick={trOnClick}>
			<td>{remember.r_date}</td>
			<td>{remember.r_time}</td>
			<td>{remember.r_remember}</td>
		</tr>)
	})

	/**
	 * input box을 입력하는 과정에서 Enter를 누르면...
	 * 
	 * 데이터를 rememberlist 상태에 추가하기
	 */
	const onKeyDown = (e) => {
		// 키보드로 입력을 하는 도중 Enter를 누르면
		if(e.keyCode === 13) {
			// 현재까지 입력된 문자열들을 추출한다.
			// 문자열은 input box의 value 속성에 담겨있다.
			const {value} = e.target;
			// alert("Enter" + value);

			// input box에 입력된 문자열을 rememberList에 담기위해 객체로 생성
			const remember = {
				r_id : UUID(),
				// moment()를 사용하여 현재 시스템의 날짜와
				// 시간 문자열로 가져오기
				r_date : moment().format("YYYY[-]MM[-]DD[-]"),
				r_time : moment().format("HH:mm:ss"),
				r_remember :value, // 키보드에 입력된 값을 remember로 가져오기
				r_comp: false
			}
			// 생성된 remember 객체 데이터를 rememberList 상태에 추가하기
			// ?????? 전개연산자 사용
			setRememberList([...rememberList,remember]);

			// 이 코드를 추가하지 않으면 입력된 값이 계속 인풋박스에 남는다.
			e.target.value = ""; // 입력박스에 있는 내용 지우기
			// concat , 버전에 관계없이 사용할 수 있는 함수?
			// setRememberList(...rememberList,concat(remember))
		}

	}
	return (
		<table className="rem_list">
			<tr>{rem_header()}</tr>
			<tbody>
				{list_body}
				<tr>
				<td colSpan="2"> 기억할일</td>
				<td><input
				  onKeyDown={onKeyDown}
				 name="r_remember" placeholder="기억할일"/></td>
			</tr>
			</tbody>
		</table>
	)
}

export default RemList
