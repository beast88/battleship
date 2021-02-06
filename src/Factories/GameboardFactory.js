import ship from './ShipFactory'

const gameboard = () => {
	const grid = new Array(64)

	for(var i = 0; i < grid.length; i++) {
		grid[i] = {
			isHit: false,
			hasShip: false,
			ship: null
		}
	}

	let missed = []

	const shipLocation = (loc, length, axis) => {
		let currentLoc = loc
		let locations = []

		if(axis === 'x'){
			for(var i = 0; i < length; i++){
				locations.push(currentLoc)
				currentLoc++
			}
		} else if(axis === 'y'){
			for(var j = 0; j < length; j++){
				locations.push(currentLoc)
				currentLoc = currentLoc + 8
			}
		}

		return locations
	}

	const checkWallCollision = (locations, axis) => {
		let collision = false
		let xWall = [7, 15, 23, 31, 39, 47, 55, 63]

		//Deal with wall collisions
		//if axis is x
		if(axis === 'x'){

			//Iterate through the locations array except the last one
			for(var i = 0; i < locations.length - 1; i++){
				//If this location is in the xWall array then a collision has occured
				if(xWall.includes(locations[i]) === true){
					collision = true
					break;
				}
			}

		} else if(axis === 'y'){

			//Iterate through the locations array except the last one
			for(var j = 0; j < locations.length - 1; j++){
				//If this location + 8 exceeds the max size of the board then a collision has occured
				if(locations[j] + 8 > 63){
					collision = true
					break;
				}
			}

		}

		return collision
	}

	const checkShipCollision = (locations) => {
		let collision = false

		locations.forEach((loc) => {
			if(grid[loc].hasShip === true){
				collision = true
			}
		})

		return collision
	}

	const collisionCheck = (locations, axis) => {
		let collision = false

		if(checkWallCollision(locations, axis) === false){
			if(checkShipCollision(locations) === true){
				collision = true
			}
		} else if(checkWallCollision(locations, axis) === true){
			collision = true
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

		placeShip(loc, shipType, axis) {
			let currentLoc = loc

			//Function to get the ship locations as an array
			let locations = shipLocation(loc, shipType.length, axis)

			if(collisionCheck(locations, axis) === false){

				//Generate the ship from factory
				const newShip = ship(shipType.name, locations)

				if(axis === 'x'){
					for(var i = 0; i < shipType.length; i++) {
						grid[currentLoc].hasShip = true
						grid[currentLoc].ship = newShip
						currentLoc++
					}				
				} else if(axis === 'y') {
					for(var j = 0; j < shipType.length; j++) {
						grid[currentLoc].hasShip = true
						grid[currentLoc].ship = newShip
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