import React from 'react'
import PropTypes from 'prop-types'

const Board = (props) => {

	let cells = props.player.board.board.map((cell, index) => {		
		let playerShip;

		if(props.player.type === 'human' && cell.hasShip === true){
			playerShip = <div className="ship"></div>
		}

		//Show enemy ships for testing purposes
		let enemyShip;
		if(props.player.type === 'AI' && cell.hasShip === true){
			enemyShip = <div className="ship"></div>
		}

		let hitCell;

		if(cell.isHit === true && cell.hasShip === false) {
			hitCell = <div className="cell-hit"></div>
		} else if(cell.isHit=== true && cell.hasShip === true) {
			hitCell = <div className="cell-ship-hit"></div>
		} else {
			hitCell = ''
		}

		return <div 
					className="cell" 
					key={index} 
					onClick={() => {props.handleClick(index)}}
				>
					{playerShip}
					{enemyShip}
					{hitCell}
				</div>
	})

	return (
		<div className="player-board">
			{cells}
		</div>
	)
}

Board.propTypes = {
	player: PropTypes.any,
	handleClick: PropTypes.any
}

export default Board