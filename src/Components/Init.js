import React from 'react'
import player from '../Factories/PlayerFactory'
import shipTypes from '../GameHelpers/shipTypes'
import Board from './Board'

const Init = () => {
	const player1 = player()

	const player2 = player()

	console.log(player1, player2, shipTypes)

	
	const handleClick = () => {
		player1.board.placeShip(0, shipTypes[4], 'x')
		console.log(player1.board)
	}

	return (
		<div className="set-up">
			<h1>Battleship</h1>

			<div className="ship-placements">

				<Board board={player1.board}/>

				<div className="consoled">
					<p>Click and drag your ships onto your board.</p>

					<button onClick={handleClick}> Add Ship </button>
				</div>
			</div>
		</div>
	)
}

export default Init