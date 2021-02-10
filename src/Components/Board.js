import React from 'react'
import PropTypes from 'prop-types'

const Board = (props) => {

	let cells = props.board.board.map((cell, index) => {
		return <div className="cell" key={index} ></div>
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