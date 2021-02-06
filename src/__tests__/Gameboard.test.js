import gameboard from '../Factories/GameboardFactory'
import shipTypes from '../GameHelpers/shipTypes'

describe('Test Gameboard functions', () => {
	let testGameboard;
	let destroyer = shipTypes[4]
	let battleship = shipTypes[1]

	beforeEach(() => {
		testGameboard = gameboard();
	})

	it('Test random cell to see if it has been generated', () => {
		expect(testGameboard.board[23]).toEqual({isHit: false, hasShip: false, ship: null})
	})

	it('Assigns a ship to a cell', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		expect(testGameboard.board[0].hasShip).toEqual(true)
	})

	it('Assigns multiple cells to ships', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		expect(testGameboard.board[1].hasShip).toEqual(true)
	})

	it('Random test to ensure placing ships works', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		testGameboard.placeShip(10, battleship, 'y');
		expect(testGameboard.board[1].hasShip).toEqual(true)
	})

	it('Should create and assign a ship class to a cell', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		expect(testGameboard.board[1].ship.name).toEqual('destroyer')
	})

	it('Should create seperate ships classes', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		testGameboard.placeShip(7, battleship, 'y');
		expect(testGameboard.board[15].ship.name).toEqual('battleship')
	})

	it('Places ships on the y axis', () => {
		testGameboard.placeShip(0, destroyer, 'y');
		expect(testGameboard.board[8].hasShip).toEqual(true)
	})

	it('Should not be able to place a ship if a cell is already a ship', () => {
		testGameboard.placeShip(0, destroyer, 'x');
		testGameboard.placeShip(0, destroyer, 'y');
		expect(testGameboard.board[8].hasShip).toEqual(false)
	})

	it('Should not place a ship if the ship will collide with another ship', () => {
		testGameboard.placeShip(5, destroyer, 'y');
		testGameboard.placeShip(12, destroyer, 'x');
		expect(testGameboard.board[12].hasShip).toEqual(false)
	})

	it('Should not place a ship on the wall of the board (x-axis)', () => {
		testGameboard.placeShip(7, destroyer, 'x');
		expect(testGameboard.board[7].hasShip).toEqual(false)
	})

	it('Should place a ship if the last cell of the ship is adjacent to the wall (x-axis)', () => {
		testGameboard.placeShip(6, destroyer, 'x');
		expect(testGameboard.board[7].hasShip).toEqual(true)
	})

	it('Should not place a longer ship if a collision with the wall occurs (x-axis)', () => {
		testGameboard.placeShip(6, battleship, 'x');
		expect(testGameboard.board[6].hasShip).toEqual(false)
	})

	it('Should not place a ship on the wall of the board (y-axis)', () => {
		testGameboard.placeShip(56, destroyer, 'y');
		expect(testGameboard.board[56].hasShip).toEqual(false)
	})

	it('Should place a ship if the last cell of the ship is adjacent to the wall (y-axis)', () => {
		testGameboard.placeShip(55, destroyer, 'y');
		expect(testGameboard.board[63].hasShip).toEqual(true)
	})

	it('Should not place a longer ship if a collision with the wall occurs (y-axis)', () => {
		testGameboard.placeShip(47, battleship, 'y');
		expect(testGameboard.board[47].hasShip).toEqual(false)
	})

	it('Cell should record when it recieved a shot', () => {
		testGameboard.receiveAttack(0);
		expect(testGameboard.board[0].isHit).toEqual(true)
	})

	it('Records the co-ordinates of a missed shots', () => {
		testGameboard.receiveAttack(0);
		expect(testGameboard.missedShots).toEqual([0])
	})

	it('Records the co-ordinates of multiple missed shots', () => {
		testGameboard.receiveAttack(0);
		testGameboard.receiveAttack(15);
		testGameboard.receiveAttack(10);
		expect(testGameboard.missedShots).toEqual([0, 15, 10])
	})

	//merge the latest branch on the main branch
})