const gameboard = () => {
	const grid = new Array(64)

	for(var i = 0; i < grid.length; i++) {
		grid[i] = {
			isHit: false,
			hasShip: false
		}
	}

	const collisionCheck = (loc, length, axis) => {
		let currentLoc = loc
		let collision = false

		//Find all the cells in the length of the ship and test if they are ships

		if(axis === 'x') {
			for(var i = 0; i < length; i++) {
				if(grid[currentLoc].hasShip === true) {
					collision = true
					break;
				} else if(grid[currentLoc].hasShip === false) {
					currentLoc++
				}
			}
		} else if(axis === 'y') {
			for(var j = 0; j < length; j++) {
				if(grid[currentLoc].hasShip === true) {
					collision = true
					break;
				} else if(grid[currentLoc].hasShip === false) {
					currentLoc = currentLoc + 8
				}
			}
		}

		return collision
	}

	return {
		board: grid,

		placeShip(loc, length, axis) {
			let currentLoc = loc

			if(collisionCheck(loc, length, axis) === false){

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

			} else {
				return
			}


		}
	}
}

export default gameboard