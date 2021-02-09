import React from 'react'
import PropTypes from 'prop-types'

const Board = (props) => {

	const cells = props.board.board.map((cell, index) => {
		return <div className="cell" key={index} id={index}></div>
	})

	// Could put some conditional rendering in here for the missed shots and the hits

	return (
		<div>
			{cells}
		</div>
	)
}

Board.propTypes = {
	board: PropTypes.any
}

export default Board