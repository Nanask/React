import React, { useState } from 'react'
import {RenderSquare} from "../modules/main.jsx"



function Board() {

	const [square, setsqure] = useState(Array(9).fill("A"));

	return (
		<div>
			<RenderSquare square={square}/> 
		</div>
	)

}

export default Board
