import React, { useState } from 'react'
import './sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	toggleBrands,
	toggleMemory,
	toggleScreen,
} from '../../Redux/slices/phonesSlice'

function Sidebar() {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const {
		filteredBrand,
		selectedBrands,
		filteredScreenType,
		selectedScreenType,
		filteredMemory,
		selectedMemory,
	} = useSelector(store => store.products)

	const handleChengeBrand = e => dispatch(toggleBrands(e.target.value))
	const handleChengeScreenType = e => dispatch(toggleScreen(e.target.value))
	const handleChengeMemory = e => dispatch(toggleMemory(e.target.value))

	return (
		<>
			{/* Кнопка для мобильных */}
			<button className='sidebar-toggle' onClick={() => setIsOpen(!isOpen)}>
				☰ Фильтр
			</button>

			{/* Основной контейнер фильтра */}
			<aside className={`sidebar ${isOpen ? 'open' : ''}`}>
				<h3 className='sidebar__title'>Фильтр</h3>

				<div className='sidebar__section'>
					<h4>Бренд</h4>
					{filteredBrand.map(item => (
						<label key={item}>
							<input
								type='checkbox'
								value={item}
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
				</div>
			</aside>

			{/* Затемнение фона при открытии фильтра */}
			{isOpen && (
				<div className='sidebar-backdrop' onClick={() => setIsOpen(false)} />
			)}
		</>
	)
}

export default Sidebar