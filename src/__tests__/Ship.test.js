import ship from '../Factories/ShipFactory'

test('Ship should return true', () => {
	expect(ship()).toBe(true)
})