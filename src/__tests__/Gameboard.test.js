import gameboard from '../Factories/GameboardFactory'

describe('Test Gameboard functions', () => {
	let testGameboard = gameboard();
	let destroyer = {name: 'destroyer', length: 2}

	it('Test random cell to see if it has been generated', () => {
		expect(testGameboard.board[23]).toEqual({isHit: false, hasShip: false})
	})

	it('Assigns a ship to a cell', () => {
		testGameboard.placeShip(0, destroyer.length);
		expect(testGameboard.board[0].hasShip).toEqual(true)
	})

	it('Assigns multiple cells to ships', () => {
		testGameboard.placeShip(0, destroyer.length);
		expect(testGameboard.board[1].hasShip).toEqual(true)
	})

	it('Places ships on the y axis', () => {
		testGameboard.placeShip(0, destroyer.length);
		expect(testGameboard.board[8].hasShip).toEqual(true)
	})
})