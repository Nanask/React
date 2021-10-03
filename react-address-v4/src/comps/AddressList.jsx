import React from 'react'
import { useAddressContext } from '../context/AppContextProvider'
import "../css/list.css"

export const AddressList = () => {
	const {viewList} = useAddressContext();
	return (
		<table className="list_box">
			<thead>
			<tr>
				<th>NO.</th>
				<th>이름</th>
				<th>주소</th>
				<th>전화번호</th>
				<th>나이</th>
				{/* <th>check</th> */}
			</tr>
			</thead>
			<tbody>{viewList}
			</tbody>
		</table>
	)
}
