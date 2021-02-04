import gameboard from '../Factories/GameboardFactory'
import shipTypes from '../GameHelpers/shipTypes'

describe('Test Gameboard functions', () => {
	let testGameboard;
	let destroyer = shipTypes[4]

	beforeEach(() => {
		testGameboard = gameboard();
	})

	it('Test random cell to see if it has been generated', () => {
		expect(testGameboard.board[23]).toEqual({isHit: false, hasShip: false})
	})

	it('Assigns a ship to a cell', () => {
		testGameboard.placeShip(0, destroyer.length, 'x');
		expect(testGameboard.board[0].hasShip).toEqual(true)
	})

	it('Assigns multiple cells to ships', () => {
		testGameboard.placeShip(0, destroyer.length, 'x');
		expect(testGameboard.board[1].hasShip).toEqual(true)
	})

	it('Places ships on the y axis', () => {
		testGameboard.placeShip(0, destroyer.length, 'y');
		expect(testGameboard.board[8].hasShip).toEqual(true)
	})

	it('Should not be able to place a ship if a cell is already a ship', () => {
		testGameboard.placeShip(0, destroyer.length, 'x');
		testGameboard.placeShip(0, destroyer.length, 'y');
		expect(testGameboard.board[8].hasShip).toEqual(false)
	})

	it('Should not place a ship if the ship will collide with another ship', () => {
		testGameboard.placeShip(5, destroyer.length, 'y');
		testGameboard.placeShip(12, destroyer.length, 'x');
		expect(testGameboard.board[12].hasShip).toEqual(false)
	})
})