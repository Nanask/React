import React from 'react'
import { useAddressContext } from '../context/AppContextProvider'
import "../css/input.css"
import { MyButton } from './MyButton'

export const AddressInput = () => {

	const {onChange, onSaveClick} = useAddressContext();

	return (
		<div className="input_box">
			<div>
				<label>이름</label>
				<input name="a_name" onChange={onChange}/>
			</div>
			<div>
				<label>주소</label>
				<input name="a_addr" onChange={onChange}/>
			</div>
			<div>
				<label>전화번호</label>
				<input name="a_tel" onChange={onChange}/>
			</div>
			<div>
				<label>나이</label>
				<input name="a_age" onChange={onChange}/>
			</div>
			{/* <MyButton>이야야야</MyButton> */}
			<div>
			<button onClick={onSaveClick} className="btn_save">저장</button>
			</div>
		</div>
	)
}
