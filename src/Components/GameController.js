import React, { useState } from 'react'
import Board from './Board'
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
			<Board board={player1.player.board} />
			<Board board={player2.player.board} />
		</div>
	)
}

export default GameController