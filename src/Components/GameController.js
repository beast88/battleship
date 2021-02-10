import React, { useState } from 'react'
import player from '../Factories/PlayerFactory'
import Board from './Board'

const GameController = () => {
	let player1 = player()

	const [computer, setComputer] = useState(player())

	const [currentPlayer, setCurrentPlayer] = useState("player")

	const switchPlayer = () => {
		setCurrentPlayer(
			currentPlayer === "player" ? "computer" : "player"
		)

		setComputer(computer)

		console.log(computer)
	}

	const handleClick = (loc) => {
		if(currentPlayer === "player"){
			player1.fireShot(computer.board, loc)
			switchPlayer()
		}
	}

	console.log(player1, computer, switchPlayer)

	return(
		<div className="game-container">
			<Board 
				board={player1.board}
				
			/>

			<Board
				board={computer.board}
				handleClick={handleClick} 
			/>
		</div>
	)
}

export default GameController