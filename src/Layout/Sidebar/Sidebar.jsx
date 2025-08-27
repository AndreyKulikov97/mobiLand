import React from 'react'
import './sidebar.css'

function Sidebar() {
  return (
		<aside className='sidebar'>
			<h3 className='sidebar__title'>Фильтр</h3>

			<div className='sidebar__section'>
				<h4>Бренд</h4>

				<label>
					<input type='checkbox' id='apple' />
					Apple
				</label>
				<label>
					<input type='checkbox' id='samsung' />
					Samsung
				</label>
				<label>
					<input type='checkbox' id='xiaomi' />
					Xiaomi
				</label>
				<label>
					<input type='checkbox' id='realme' />
					Realme
				</label>
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