const ship = (name, length) => {
	let hits = []

	return {
		name: name,
		length: length,

		hit(loc) {
			hits.push(loc)
			return hits
		},

		isSunk() {
			if(hits.length === length.length) {
				return true
			} else {
				return false
			}
		}
		
	}
}

export default ship