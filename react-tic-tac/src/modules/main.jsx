const arrayEx = () => {
	// 연습용 함수
	// 방법 1
	const arrayRow = [0, 0, 0];
	const arrayCol = [0, 0, 0];
  
	arrayRow.map((row) => {
	  const cols = arrayCol.map((col) => {
		// 한 라인의 button 만들기
	  });
	  // 각 라인의 컴포넌트 만들기
	});
  
	// 방법 2 (아래에 있는 다차원 배열)
  
	// 방법 3 (map이용은 2와 같음)
	const arrFuncCol = Array(3).fill(0);
	const arrFuncRow = Array(3).fill(arrFuncCol);
  
	// 방법 4 (map이용은 2와 같음)
	/**
	 * const arrFuncBox = Array(3).fill(   [Array(3).fill(0)]   );
	 * const arrFuncBox = [
	 *    [
	 *       [0, 0, 0],
	 *       [0, 0, 0],
	 *       [0, 0, 0],
	 *    ]
	 * ]
	 */
	//   const arrayFuncBox = Array(3).fill([...Array(3).fill(0)]);
	const arrFuncBox = Array(3).fill([Array(3).fill(0)]);
  };
  
  /**
   * 다차원 배열
   * 배열 속에 요소가 배열로 이루어진 배열
   * a = [1,2,3,4,5]
   * console.log( a[0] )
   * a[0] = 3
   *
   * b = [
   * 	[1,2,3,4,5]
   * ]
   * console.log(b[0][1])
   * b[0][2] = 100
   *
   * c = [
   * 	[
   * 		[1,2,3,4,5]
   * 	]
   * ]
   * console.log(c[0][0][1])
   */
  
  const RenderSquare = () => {
	const arrayBox = [
		[0, 0, 0], //1번째배열
		[0, 0, 0], //2번째배열
		[0, 0, 0], //3번째배열
	];
  
	// 첫번째 배열의 요소가 sub에 들어가있음
	// 첫번째 배열의 한개씩이 item에 들어가있음
	let index = 0;
	const buttons = arrayBox.map((subBox) => {
	  const buttonCols = subBox.map(() => {
		// 한 라인의 button 만들기
		return <button>{index++}</button>;
	  });
	  // 각 라인의 컴포넌트 만들기
	  return <div className="box_row">{buttonCols}</div>;
	});
	return buttons;
  };
  
  export { RenderSquare };



	const arrayBox = [

	  ];

  