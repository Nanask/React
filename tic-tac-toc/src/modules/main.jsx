function RenderSquare() {

	const array = [
		[0,0,0],
		[0,0,0],
		[0,0,0]
	]
	
	let index = 0;
	
	const onButtonClick =  (e) => {
		const index = e.target.dataset.index
		alert(index)
	}
	
	const box = array.map((sub_btn)=> {
		const box_cols = sub_btn.map(()=> {
	
		return <button data-index={index} onClick={onButtonClick}>{index++}</button>
	
		})
		return <div className="box_row">{box_cols}</div>
	})
		return <div className="box_div">{box}</div>
}

export {RenderSquare}

