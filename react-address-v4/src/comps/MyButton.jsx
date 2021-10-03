import React from 'react'

export const MyButton = ({onSaveCilck, Children}) => {

	const btnStyle = {
		display: "block",
		padding: "1rem",
		marginLeft: "auto",
		// margin : "center",
		// marginRight : "auto",
		backgroundColor: "black",
		color: "white",
		fontSize: "15px",
		fontWeight: "bold"
	}
	return (
		<button style={btnStyle} onClick={onSaveCilck}>
			{Children}
		</button>
	)
}
