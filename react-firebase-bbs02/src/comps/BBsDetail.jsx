import React, { useCallback, useState} from 'react'
import {useHistory, useRouteMatch} from "react-router-dom"
import { firestore } from "../config/FirebaseConfig"

function BBsDetail() {

	const router = useHistory();
	const match = useRouteMatch();
	const docId = match.params.id;

	// 렌더링하기 위한 도구
	// 상태선언을 하기
	const[bbs, setBBs] = useState({

		// nullpoint오류를 막기 위해 빈데이터를 넣어주기
		b_date : "",
		b_time : "",
		b_write : "",
		b_subject : "",
		b_content : "",
	});

	const findByidFetch = async () => {
		if(docId) {
			const result = await firestore.collection("bbs").doc(docId)
		}
		if(result.data()) {
			setBBs(result.data());
		}
		
	}
}



	useEffect(findByidFetch, []);
	
	const onDelete = (e)=> {
		if(window.confirm("삭제할까요")) {
			// 삭제는 굳이 파일로 넘어갈 필요 없이 firestore에서 삭제할 수 있게 하기
			// router.push(`/delete/${docId}`)

			firestore.collection("bbs").doc(docId).delete()
			.then((result)=> {
				router.push(`/`);
			})
		}
	}
	//화면에 보여질 데이터 만들기
	// const [bbs,setBBs] = useState("");
	// {}안에 들어있는 상태값을 이용해 보여주기
	return (
		
	<div className="bbs_detail">
		<h1>DETAIL</h1>
		<div>
			<label>작성일자</label><span>{bbs.b_date}</span>
		</div>
		<div>
			<label>작성시간</label><span>{bbs.b_time}</span>
		</div>
		<div>
			<label>작성자</label><span>{bbs.b_write}</span>
		</div>
		<div>
			<label>제목</label><span>{bbs.b_subject}</span>
		</div>
		<div>
			<label>내용</label><span>{bbs.b_content}</span>
		</div>
		<div className="bbs_btn_box">
			<button onClick={()=> {
				router.push("/")
			}}>처음으로</button>
			<button onClick={()=> {
				router.push(`/write/${docId}`)}}>
				수정</button>
			{/* onDelete라는 함수를 만들겠다는 의미 */}
			<button onClick={onDelete}>삭제</button>
		</div>
	</div>
	);
}

export default BBsDetail
