import React, { useState } from 'react'
import './sidebar.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBrands } from '../../Redux/slices/phonesSlice'

function Sidebar() {
	const dispatch = useDispatch()
	const [isChecked, setIschecked] = useState(false)
	const { filteredBrand, selectedBrands } = useSelector(store => store.products);
	
	
	const handleChenge = (e) => {
		setIschecked(e.target.checked)
		dispatch(toggleBrands(e.target.value))

	}
	

  return (
		<aside className='sidebar'>
			<h3 className='sidebar__title'>Фильтр</h3>

			<div className='sidebar__section'>
			  <h4>Бренд</h4>
			  
			  {filteredBrand.map((item) => (
				  <label key={item}>
					  <input type='checkbox' value={item} checked={selectedBrands.some(phone => phone.brand === item)} onChange={handleChenge}/>
					  {item}
					</label>
				))}
			</div>

			<div className='sidebar__section'>
				<h4>Экран</h4>

				<label>
					<input type='checkbox' id='ips' />
					IPS
				</label>
				<label>
					<input type='checkbox' id='amoled' />
					AMOLED
				</label>
				<label>
					<input type='checkbox' id='oled' />
					OLED
				</label>
				<label>
					<input type='checkbox' id='super-amoled' />
					Super AMOLED
				</label>
			</div>

			<div className='sidebar__section'>
				<h4>Память</h4>

				<label>
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
				</label>
			</div>
		</aside>
	)
}

export default Sidebar