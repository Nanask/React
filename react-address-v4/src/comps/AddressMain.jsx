import React from 'react'

import AppContextProvider from '../context/AppContextProvider'


export const AddressMain = ({children}) => {
	



	return (

		<AppContextProvider>

			<h1>메인</h1>
			<div>{children}</div>
	
		</AppContextProvider>
		
		
	)
}
