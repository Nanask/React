import React from 'react'

import AppContextProvider from '../context/AppContextProvider'


export const AddressMain = ({children, form}) => {
	



	return (

		<AppContextProvider>
			<section>{form}</section>			
			<div>{children}</div>	
		</AppContextProvider>
		
		
	)
}
