const gameboard = () => {
	const grid = new Array(64)

	for(var i = 0; i < grid.length; i++) {
		grid[i] = {
			isHit: false,
			hasShip: false
		}
	}

	let missed = []

	const collisionCheck = (loc, length, axis) => {
		let currentLoc = loc
		let collision = false
		const xWall = [7, 15, 23, 31, 39, 47, 55, 63]

		//Check the axis
		if(axis === 'x') {
			//Loop through the cells that the ship will occupy
			for(var i = 0; i < length; i++) {

				//If the cell is currently a ship, collision has occured, break the loop
				if(grid[currentLoc].hasShip === true) {
					collision = true
					break;
				} else if(grid[currentLoc].hasShip === false) {

					//If this is the last cell of the ship then there has been no collision
					if(i === length - 1) {
						collision = false
					//otherwise if current location is included in the xWall then a collision has occured
					} else if(xWall.includes(currentLoc)) {
						collision = true
						break;
					}

					//If no collision has occured in the current cell then move onto the next
					currentLoc++
				}
			}
		} else if(axis === 'y') {
			for(var j = 0; j < length; j++) {

				//if the next iteration exceeds the max number of cells & this is not the last 'cell' of the ship being placed
				if(currentLoc + 8 > 63 && j < length - 1) {
					//A collision with the bottom wall of the board has occured
					collision = true
					break;
				}

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
		missedShots: missed,

		receiveAttack(loc) {
			grid[loc].isHit = true
			missed.push(loc)
		},

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