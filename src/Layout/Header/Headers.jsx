import React from 'react'
import './headers.css'
import {Link} from 'react-router-dom'
import FilterSearch from '../../components/FilterSearch/FilterSearch'

function Headers() {
	return (
		<header>
			<nav className='header__nav'>
				<div className='header__logo'>
					<Link to='/'>MobiLand</Link>
				</div>
				<Link to='/' className='header__link'>
					Главная
				</Link>
				<FilterSearch />
				<div className='basket'>
					<Link to='/basket' className='header__link header__cart'>
						<span>🛒</span> Корзина
					</Link>
				</div>
			</nav>
		</header>
	)
}

export default Headers
