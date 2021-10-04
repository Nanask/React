import { createContext, useContext, useState } from "react";
// import uuid from "react-uuid";

import UUID from "react-uuid"

const AppContext = createContext();

export const useAddressContext = () =>  useContext(AppContext);

const AppContextProvider = ({children}) => {

	const [address, setAddress] = useState([
		{
			// a_id : UUID(),
			// a_name : "나나",
			// a_tel : "010-000-0000",
			// a_addr : "서울시",
			// a_age : "28",
			// a_check : false
		}
	])

	// const [a_update, setA_Update] = useState ({
	// 	a_name : "",
	// 	a_tel : "",
	// 	a_addr : "",
	// 	a_age : "",
	// })

	// const onUpdateClick = (e) => {

	// }



	const [addrList,setAddrList] = useState([])

	const onChange = (e) => {
		const {name, value} = e.target;
		setAddress({...address, [name] : value})
		console.log(name , value)

	}

	const onCheckHandle = (e)=> {

		// const a_check = e.target.value
		// const a_id = e.target.dataset.id

		// const index = addrList.findIndex((address) => address.a_id === a_id)

		// const selectCheck = addrList[index]

		// const _addrList = [...addrList]

		// _addrList[index] = {
		// 	...selectCheck, a_check: !selectCheck.a_check,
		// }

		// setAddrList(_addrList)
		
		// console.log("aaaaa", addrList)			
	
	}

	// 삭제하기
	const onDeleteClick = (e) => {
		// if(window.confirm("삭제할까요?")) {
		// 	const button = e.target
		// 	if(button.tagName === "Button") {
				// const id = td.closest("TR").dataset.id
	if(window.confirm("삭제할까요?")) {
		const td = e.target
			if(td.tagName === "TD") {
				const id = td.closest("TR").dataset.id

			console.log("id", id)


			const _list = addrList.map((addr)=> {
				if(addr.a_id === id) {
					return{...address}
				}
				return address
			})
			setAddrList([_list])
		}
		
	}
}


		
	// 저장하기
	const onSaveClick = (e) => {
		setAddress({...address, a_id:UUID()})
		setAddrList([...addrList, address])
		console.table(addrList)
		alert("저장하시겠습니까?")

	}

	
	const viewList = addrList.map((addr, index)=> {
		return (
			<tr key={addr.a_id} data-id={addr.a_id} >
				<td>{index + 1}</td>
				<td>{addr.a_name}</td>
				<td>{addr.a_tel}</td>
				<td>{addr.a_addr}</td>
				<td>{addr.a_age}</td>
			</tr>
		)

	})

	

	

	const provider = { setAddress, onChange, onSaveClick, viewList, addrList, setAddrList, onDeleteClick, onCheckHandle} 

	return <AppContext.Provider  value={provider}>{children}</AppContext.Provider>

}

export default AppContextProvider