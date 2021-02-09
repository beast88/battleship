import React, { useState } from 'react'
import player from '../Factories/PlayerFactory'

const GameController = () => {
	const [player1, setPlayer1] = useState({
		player: player(),
		turn: true
	})

	const [player2, setPlayer2] = useState({
		player: player(),
		turn: false
	})

	return(
		<div className="game-container">
			<h1>Hello World</h1>
			{console.log(player1.player.board.board)}
		</div>
	)
}

export default GameController