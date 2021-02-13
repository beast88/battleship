import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
	return (
		<header className="header">
			<h1>Battleship</h1>
			<a href="https://github.com/beast88/battleship" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
		</header>
	)
}

export default Header