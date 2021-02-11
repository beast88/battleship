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

	const handlePlayerBoard = () => {
		if(currentPlayer === "player"){
			return null
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

	//function to player the computer ships at random when the game starts
	//Maybe use a helper function for this and call it when the begin button is pressed

	return(
		<div className="game-container">
			<Board 
				board={player1.board}
				handleClick={handlePlayerBoard}				
			/>

			<button>Start Game</button>

			<Board
				board={computer.board}
				handleClick={handleClick} 
			/>
		</div>
	)
}

export default GameController