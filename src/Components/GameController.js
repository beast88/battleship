import React, { useState, useEffect } from 'react'
import player from '../Factories/PlayerFactory'
import Board from './Board'

const GameController = () => {
	const [player1, setPlayer1] = useState(player())

	const [computer, setComputer] = useState(player())

	const [currentPlayer, setCurrentPlayer] = useState("player")

	const switchPlayer = () => {
		setCurrentPlayer(
			currentPlayer === "player" ? "computer" : "player"
		)

		setComputer(computer)
		setPlayer1(player1)
	}

	const handleClick = (loc) => {
		if(currentPlayer === "player"){
			player1.fireShot(computer.board, loc)
			switchPlayer()
		}
	}

	//function with a timeout to handle AI turn
	useEffect(() => {
		if(currentPlayer === "computer"){
			setTimeout(() => {
				computer.AIFireShot(player1.board)
				switchPlayer()
			}, 500)
		}
	})

	return(
		<div className="game-container">
			<Board 
				board={player1.board}
				handleClick={handleClick}				
			/>

			<Board
				board={computer.board}
				handleClick={handleClick} 
			/>
		</div>
	)
}

export default GameController