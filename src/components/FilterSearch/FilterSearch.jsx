import React, { useEffect, useState } from 'react'
import './filterSearch.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterPhones } from '../../Redux/slices/phonesSlice';

function FilterSearch() {
	const dispatch = useDispatch()

	const [searchTerm, setSearchTerm] = useState('');
	
	useEffect(() => {
		const handler = setTimeout(() => {
			dispatch(filterPhones(searchTerm))
		}, 1000)
		return () => clearTimeout(handler)
	}, [searchTerm, dispatch])

	return (
		<div>
			<input
				className='search-input'
				type='text'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Я ищу ...'
			/>
		</div>
	)
}

export default FilterSearch
