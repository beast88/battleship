import React, { useState, useEffect } from 'react'
import player from '../Factories/PlayerFactory'
import Board from './Board'
import GameEnd from './GameEnd'
import placeShips from '../GameHelpers/placeShips'
import gameOver from '../GameHelpers/gameover'

const GameController = () => {
	const [player1, setPlayer1] = useState(player('human'))
	const [computer, setComputer] = useState(player('AI'))
	const [gameStart, setGameStart] = useState(false)
	const [currentPlayer, setCurrentPlayer] = useState('player')
	const [endGame, setEndGame] = useState(false)
	const [winner, setWinner] = useState('')

	const switchPlayer = () => {
		setCurrentPlayer(
			currentPlayer === "player" ? "computer" : "player"
		)

		setComputer(computer)
		setPlayer1(player1)
	}

	const handleShot = (loc) => {
		if(currentPlayer === "player" && gameStart === true){
			player1.fireShot(computer.board, loc)

			if(gameOver(computer.board) === true){
				setEndGame(true)
				setWinner('Player')
			}

			console.log(endGame, winner)

			switchPlayer()
		}
	}

	const handlePlayerBoard = () => {
		if(currentPlayer === "player" && gameStart === true){
			return null
		}
	}

	//handle AI turn
	useEffect(() => {
		if(currentPlayer === "computer"){
			setTimeout(() => {
				computer.AIFireShot(player1.board)

				if(gameOver(player1.board) === true){
					setEndGame(true)
					setWinner('Computer')
				}

				switchPlayer()
			}, 500)
		}
	})

	//place the ships at random when the game starts
	const handleBegin = () => {
		placeShips(player1.board)
		placeShips(computer.board)

		setPlayer1(player1)
		setComputer(computer)
		setGameStart(true)

		console.log(player1)
	}

	return(
		<div className="game-container">
			<Board 
				player={player1}
				handleClick={handlePlayerBoard}				
			/>

			<button onClick={() => {handleBegin()}}>Start Game</button>

			<Board
				player={computer}
				handleClick={handleShot} 
			/>

			<GameEnd 
				endGame={endGame}
				winner={winner}
			/>
		</div>
	)
}

export default GameController