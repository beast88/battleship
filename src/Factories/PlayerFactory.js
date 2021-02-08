import gameboard from './GameboardFactory'

const player = () => {
	
	return {
		board: gameboard(),

		fireShot(board, loc) {
			board.receiveAttack(loc)
		}
	}
}

export default player