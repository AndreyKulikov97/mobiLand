import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
	return (
		<div className='notfound-wrapper'>
			<div className='notfound-box'>
				<h1 className='notfound-code'>404</h1>
				<p className='notfound-text'>На жаль, сторінку не знайдено</p>
				<Link to='/' className='notfound-button'>
					Повернутись на головну
				</Link>
			</div>
		</div>
	)
}

export default NotFound
