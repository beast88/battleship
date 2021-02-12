import React, { useState, useEffect } from 'react'
import player from '../Factories/PlayerFactory'
import Board from './Board'
import placeShips from '../GameHelpers/placeShips'

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

	const handleShot = (loc) => {
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

	//function to place the computer ships at random when the game starts
	//Maybe use a helper function for this and call it when the begin button is pressed
	const handleBegin = () => {
		placeShips(player1.board)
		placeShips(computer.board)

		setPlayer1(player1)
		setComputer(computer)

		console.log(player1)
	}

	return(
		<div className="game-container">
			<Board 
				board={player1.board}
				handleClick={handlePlayerBoard}				
			/>

			<button onClick={() => {handleBegin()}}>Start Game</button>

			<Board
				board={computer.board}
				handleClick={handleShot} 
			/>
		</div>
	)
}

export default GameController