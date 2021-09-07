import React from 'react'
import "./write.css"
/**
 * Write = ({bbs}) => {}
 * 
 * 매개변수로 전달받은 변수들 중에서 나는 bbs만 받겠다.
 * 
 * App.js에서 전달받은 상태(bbsVO를 bbs로 받음)는
 * 전달받아서 매개변수로부터 추출하는 순간 상태의 기능을 상실
 * 고정된(Read Only)형태의 props(properties)가 되어버린다.
 * props가 된 변수 객체는 보여주는 (UI)용도로는 사용할 수 있지만
 * 값을 변경하는 것은 불가능해진다
 * 값을 변경하려고 시도를 하면 오류가 발생한다.
 * 
 * 상태(변수,객체)는 반드시 선언된 컴포넌트에서만 변경이 가능하다.
 * 
 * 이러한 기능을 해결하기 위해서는.... 이하 입력
 * 
 * Write = ({bbs,onBBsChange}) 코드는
 * 
 * Write = (props) => {
 * 	const {bbs,onBBsChange} = props
 * }
 * 코드를 한번에 처리한 것이다.
 */
// 전달받은 매개변수들 중에서 bbs만 추출하고 
const Write = ({bbs, onBBsChange}) => {
	// 요소들을 분리하기
	const {b_date,b_time,b_writer,b_subject,b_content} = bbs;
	return (
	<div className="bbs_write_form">
		<div>
			<label>작성일자</label>
			<input name="b_date" type="date" defaultValue={b_date} onChange={onBBsChange}/>
		</div>
		<div>
			<label>작성시각</label>
			<input name="b_time" type="time" defaultValue={b_time} onChange={onBBsChange}/>
		</div>
		<div>
			<label>글쓴이</label>
			<input name="b_writer" defaultValue={b_writer} onChange={onBBsChange}/>
		</div>
		<div>
			<label>제목</label>
			<input name="b_subject"defaultValue={b_subject} onChange={onBBsChange}/>
		</div>
		<div>
			<label>내용</label>
			<input name="b_content" defaultValue={b_content} onChange={onBBsChange}/>
		</div>
	</div>		
	)
}

export default Write
