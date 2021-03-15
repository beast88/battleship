const gameOver = (board) => {
	return board.allSunk() === true ? true : false
}

export default gameOver