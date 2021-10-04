import React from 'react'
import { useAddressContext } from '../context/AppContextProvider'

export const AddressMainBody = () => {

	const {viewList} = useAddressContext()
	return (
		<table className="list_box">
			<thead>
			<tr>
				<th>NO.</th>
				<th>이름</th>
				<th>주소</th>
				<th>전화번호</th>
				<th>나이</th>
			</tr>
			</thead>
			<tbody>{viewList}</tbody>
		</table>
	)
}
