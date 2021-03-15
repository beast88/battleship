import React from 'react'

const GameEnd = (props) => {
	const hidden = props.endGame === true ? 'gameover' : 'gameover hidden'

	return (
		<div className={hidden}>
			<h2>{props.winner} Wins!</h2>
		</div>
	)
}

export default GameEnd