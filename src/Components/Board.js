import React from 'react'
import PropTypes from 'prop-types'

const Board = (props) => {

	let cells = props.player.board.board.map((cell, index) => {
		const hit = cell.isHit ? {background: 'red'} : {}
		
		let playerShip;

		if(props.player.type === 'human' && cell.hasShip === true){
			playerShip = <div className="ship"></div>
		}

		return <div 
					className="cell" 
					key={index} 
					onClick={() => {props.handleClick(index)}}
					style={hit} 
				>
					{playerShip}
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