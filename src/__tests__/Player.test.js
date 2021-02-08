import player from '../Factories/PlayerFactory'

describe('Test player functions', () => {
	let testPlayer1;
	let testPlayer2; 

	beforeEach(() => {
		testPlayer1 = player();
		testPlayer2 = player();
	})

	it('Allows a player to fire a shot', () => {
		testPlayer1.fireShot(testPlayer2.board, 0);
		expect(testPlayer2.board.missedShots).toEqual([0])
	})

	it('Allows AI to fire a shot at random', () => {
		testPlayer2.AIFireShot(testPlayer1.board)
		expect(testPlayer1.board.missedShots.length).toBe(1)
	})
})