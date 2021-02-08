import gameboard from './GameboardFactory'

const player = () => {
	//Need to write some rudimentary AI if the player is computer
	//It must make a valid fireShot move on the opponents board
	//Create a valid targets function on the gameboard for the AI to use
	
	return {
		board: gameboard(),

		fireShot(board, loc) {
			board.receiveAttack(loc)
		}
	}
}

export default player