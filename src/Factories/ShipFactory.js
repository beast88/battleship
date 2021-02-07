const ship = (name, length) => {
	let damage = []

	return {
		name: name,
		length: length,
		hits: damage,

		hit(loc) {
			damage.push(loc)
		},

		isSunk() {
			if(damage.length === length.length) {
				return true
			} else {
				return false
			}
		}
		
	}
}

export default ship