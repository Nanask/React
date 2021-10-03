import { createContext, useContext, useState } from "react";
import UUID from "react-uuid"



const AppContext = createContext();

export const useAddressContext = () =>  useContext(AppContext);

const AppContextProvider = ({children}) => {

	const [address, setAddress] = useState([
		{
			a_id : 0,
			a_name : "나나",
			a_tel : "010-000-0000",
			a_addr : "서울시",
			a_age : "28",
			a_check : false
		}
	])

	const [addrList,setAddrList] = useState([])

	const onChange = (e) => {
		const {name, value} = e.target;
		setAddress({...address, [name] : value})
		console.log(name , value)

	}

	const onSaveClick = (e) => {
		setAddress({...address, a_id:UUID()})
		setAddrList([...addrList, address])
		console.table(addrList)

	}

	const onDeleteClick = (e) => {

	}


	
	
	const viewList = addrList.map((addr, index)=> {
		return (
			<tr key={addr.a_id} data-id={a_id} >
				<td>{index+1}</td>
				<td>{addr.a_name}</td>
				<td>{addr.a_tel}</td>
				<td>{addr.a_addr}</td>
				<td>{addr.a_age}</td>
			</tr>
		)

	})
	const provider = {address, setAddress, onChange, onSaveClick, addrList, setAddrList, viewList} 

	return <AppContext.Provider  value={provider}>{children}</AppContext.Provider>

}

export default AppContextProvider