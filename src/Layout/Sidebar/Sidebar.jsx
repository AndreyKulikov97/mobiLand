import React, { useState } from 'react'
import './sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBrands, toggleMemory, toggleScreen } from '../../Redux/slices/phonesSlice'

function Sidebar() {
	const dispatch = useDispatch()
	const [isCheckedBrand, setIscheckedBrand] = useState(false)
	const [isCheckedMatrix, setIscheckedMatrix] = useState(false)
	const [isCheckedMemory, setIsCheckedMemory] = useState(false)
	const {
		filteredBrand,
		selectedBrands,
		filteredScreenType,
		selectedScreenType,
		filteredMemory,
		selectedMemory,
	} = useSelector(store => store.products)

	
	

	const handleChengeBrand = e => {
		setIscheckedBrand(e.target.checked)
		dispatch(toggleBrands(e.target.value))
	}

	const handleChengeScreenType = e => {
		setIscheckedMatrix(e.target.checked)
		dispatch(toggleScreen(e.target.value))
	}

	const handleChengeMemory = e => {
		setIsCheckedMemory(e.target.checked)
		dispatch(toggleMemory(e.target.value))
	}

	return (
		<aside className='sidebar'>
			<h3 className='sidebar__title'>Фильтр</h3>

			<div className='sidebar__section'>
				<h4>Бренд</h4>

				{filteredBrand.map(item => (
					<label key={item}>
						<input
							type='checkbox'
							value={item}
							// checked={selectedBrands.some(phone => phone.brand === item)}
							checked={selectedBrands.includes(item)}
							onChange={handleChengeBrand}
						/>
						{item}
					</label>
				))}
			</div>

			<div className='sidebar__section'>
				<h4>Экран</h4>

				{filteredScreenType.map(item => (
					<label key={item}>
						<input
							type='checkbox'
							value={item}
							// checked={selectedScreenType.some(phone => phone.screen.type === item)}
							checked={selectedScreenType.includes(item)}
							onChange={handleChengeScreenType}
						/>
						{item}
					</label>
				))}
			</div>

			<div className='sidebar__section'>
				<h4>Память</h4>

				{filteredMemory.map(item => (
					<label key={item}>
						<input
							type='checkbox'
							value={item}
							checked={selectedMemory.includes(item)}
							onChange={handleChengeMemory}
						/>
						{item}
					</label>
				))}
				{/* <label>
					<input type='checkbox' id='64gb' />
					64 ГБ
				</label>
				<label>
					<input type='checkbox' id='128gb' />
					128 ГБ
				</label>
				<label>
					<input type='checkbox' id='256gb' />
					256 ГБ
				</label>
				<label>
					<input type='checkbox' id='512gb' />
					512 ГБ
				</label> */}
			</div>
		</aside>
	)
}

export default Sidebar
