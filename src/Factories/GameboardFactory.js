const gameboard = () => {
	const grid = new Array(64)

	for(var i = 0; i < grid.length; i++) {
		grid[i] = {
			isHit: false,
			hasShip: false
		}
	}

	return {
		board: grid,

		placeShip(loc, length, axis) {
			let currentLoc = loc

			//need a function to test the axis

			if(axis === 'x'){
				for(var i = 0; i < length; i++) {
					grid[currentLoc].hasShip = true
					currentLoc++
				}				
			} else if(axis === 'y') {
				for(var j = 0; j < length; j++) {
					grid[currentLoc].hasShip = true
					currentLoc = currentLoc + 8
				}
			}

		}
	}
}

export default gameboard