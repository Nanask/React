import React from 'react'
import { useAddressContext } from '../context/AppContextProvider'
import "../css/list.css"
import "../css/layout.css"

export const AddressList = () => {
	const { onDeleteClick, addrList,onUpdateClick, onCheckHandle } = useAddressContext();

	const list = addrList.map((addr, index)=> {
		return (		
			<tr data-id={addr.a_id}>
				<td>{index + 1}</td>
				<td>{addr.a_name}</td>
				<td>{addr.a_addr}</td>
				<td>{addr.a_tel}</td>
				<td>{addr.a_age}</td>
				<td onChange= {onCheckHandle}><input name="a_check" type="checkbox" /></td>
			</tr>
		)
	})

	return (
		<div>
		<table className="list_box">
			<thead>
			<tr>
				<th>NO.</th>
				<th>이름</th>
				<th>주소</th>
				<th>전화번호</th>
				<th>나이</th>
				<th>check</th>
			</tr>
			</thead>
			{/* <tbody onClick={onDeleteClick}>{viewList}</tbody> */}
			{/* <tr onClick={onDeleteClick} data-id={address.a_id}>
				<td>{address.a_id}</td>
				<td>{address.a_name}</td>
				<td>{address.a_addr}</td>
				<td>{address.a_tel}</td>
				<td>{address.a_age}</td>
				<td><input type="checkbox"/></td>
			</tr> */}
				<tbody onClick={onDeleteClick}>{list}</tbody>
		</table>
		<div className="btn_list">
		<button className="btn_delete" onClick={onDeleteClick}>Delete</button>
		<button className="btn_update" onClick={onUpdateClick}>Update</button>
		</div>
		</div>
	)
}
