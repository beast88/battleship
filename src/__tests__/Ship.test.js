import ship from '../Factories/ShipFactory'

describe('Ship functions', () => {
	let testCarrier;
	let testSubmarine;

	beforeEach(() => {
		testCarrier = ship('carrier', [0, 1, 2, 3, 4])
		testSubmarine = ship('submarine', [11, 21, 31, 41])
	})

	it('Accepts a hit', () => {
		expect(testCarrier.hit(0)).toEqual([0])
	})

	it('Accepts multiple hits', () => {
		testSubmarine.hit(11);
		expect(testSubmarine.hit(21)).toEqual([11, 21])
	})

	it('Reports that a ship has not sunk', () => {
		testCarrier.hit(0);
		testCarrier.hit(1);
		expect(testCarrier.isSunk()).toEqual(false)
	})

	it('Reports that a ship has been sunk', () => {
		testSubmarine.hit(11);
		testSubmarine.hit(21);
		testSubmarine.hit(31);
		testSubmarine.hit(41);
		expect(testSubmarine.isSunk()).toEqual(true)
	})

	it('Reports ship is sunk when hits occur out of order', () => {
		testCarrier.hit(3);
		testCarrier.hit(4);
		testCarrier.hit(1);
		testCarrier.hit(0);
		testCarrier.hit(2);
		expect(testCarrier.isSunk()).toEqual(true)
	})
})