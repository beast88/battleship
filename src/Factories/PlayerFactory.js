import gameboard from './GameboardFactory'

const player = () => {

	let board = gameboard();
	
	return {
		board: board,

		fireShot(loc) {
			board.receiveAttack(loc)
		}
	}
}

export default player