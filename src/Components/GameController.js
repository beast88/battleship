import React, { useState } from 'react'
import player from '../Factories/PlayerFactory'
import Board from './Board'

const GameController = () => {
	let player1 = player()
	let computer = player()

	const [currentPlayer, setCurrentPlayer] = useState(player1)

	const switchPlayer = () => {
		setCurrentPlayer(
			currentPlayer === player1 ? computer : player1
		)
	}

	console.log(switchPlayer, player1)

	return(
		<div className="game-container">
			<h1>Hello World</h1>
			<Board board={player1.board} />
		</div>
	)
}

export default GameController