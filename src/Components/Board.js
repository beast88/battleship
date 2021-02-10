import React from 'react'
import PropTypes from 'prop-types'

const Board = (props) => {

	const cells = props.board.board.map((cell, index) => {
		const ship = cell.hasShip === true ? {background: "red"} : {}
		return <div className="cell" key={index} style={ship}></div>
	})

	return (
		<div className="player-board">
			{cells}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.any
}

export default Board