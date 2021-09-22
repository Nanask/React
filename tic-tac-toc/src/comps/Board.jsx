import React, { useState } from 'react'
import {RenderSquare} from "../modules/main.jsx"



function Board() {

	const [square, setsqure] = useState(Array(9).fill("A"));
// 혼자하기
	return (
		<div>
			<RenderSquare square={square}/> 

		</div>
	)

}

export default Board
