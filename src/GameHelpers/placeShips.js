import shipTypes from './shipTypes'

const placeShips = (board) => {
	//Generate an array of the board to place the ship
	let cells = new Array(64)
	for(var i = 0; i < cells.length; i++){
		cells[i] = i
	}

	//Function to get a random location
	const randomCell = (cells) => {
		return cells[Math.floor(Math.random() * cells.length)]
	}

	//Get axis at random
	let axis = ['x', 'y']

	const randomAxis = (axis) => {
		return axis[Math.floor(Math.random() * axis.length)]
	}

	//Iterate through the ship types and place the ship on the board
	//If the ship placement functions returns null the rerun the function
	//Recursion
	const place = (ship) => {
		if(board.placeShip(randomCell(cells), ship, randomAxis(axis)) === null){
			place(ship)
		}
	}

	shipTypes.forEach(ship => {
		place(ship)
	})
}

export default placeShips