import gameboard from './GameboardFactory'

const player = (type) => {
	
	return {
		board: gameboard(),
		type: type,

		fireShot(board, loc) {
			board.receiveAttack(loc)
		},

		AIFireShot(board) {
			//Get a valid target at random

			let shot = board.validTargets()[Math.floor(Math.random() * board.validTargets().length)]

			//Fire at the opponents board
			board.receiveAttack(shot)
		}
	}
}

export default player