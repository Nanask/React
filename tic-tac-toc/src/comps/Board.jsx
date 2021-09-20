import React from 'react'



function board() {

const array = [
	[0,0,0],
	[0,0,0],
	[0,0,0]
]

const box = array.map((sub_btn)=> {
	const box_cols = sub_btn.map(()=> {

		return <button></button>

	})
	return <div className="box_row">{box_cols}</div>
})
	return <div>{box}</div>
}

export default board
