import player from '../Factories/PlayerFactory'

describe('Test player functions', () => {
	let testPlayer =

	beforeEach(() => {
		testPlayer = player();
	})

	it('Allows a player to fire a shot', () => {
		testPlayer.fireShot(0);
		expect(testPlayer.board.missedShots).toEqual([0])
	})
})