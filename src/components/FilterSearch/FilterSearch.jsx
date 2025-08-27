import React, { useState } from 'react'
import './filterSearch.css'

function FilterSearch() {
    const [searchPhone, setSearchPhone] = useState('');

	return (
		<div>
			<input
				className='search-input'
				type='text'
				value={searchPhone}
				onChange={e => setSearchPhone(e.target.value)}
				placeholder='Я ищу ...'
			/>
		</div>
	)
}

export default FilterSearch
