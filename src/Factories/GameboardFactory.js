const gameboard = () => {
	const grid = new Array(64)

	for(var i = 0; i < grid.length; i++) {
		grid[i] = {
			isHit: false,
			hasShip: false
		}
	}

	// const pieces = {
	// 	carrier: 5,
	// 	battleship: 4,
	// 	submarine: 3,
	// 	cruiser: 3,
	// 	destroyer: 2
	// }

	return {
		board: grid,

		placeShip(loc, length) {
			let currentLoc = loc

			//x- axis
			for(var i = 0; i < length; i++) {
				grid[currentLoc].hasShip = true
				currentLoc++
			}
		}
	}
}

export default gameboard