import React, { useState } from 'react'
import './footer.css'
import telegram from '../../assets/icons/icons8-instagram.svg'
import insta from '../../assets/icons/icons8-телеграм.svg'

function Footer() {
	const [openMenus, setOpenMenus] = useState({
		contacts: false,
		shop: false,
		clients: false,
	})

	const toggleMenu = menuName => {
		setOpenMenus(prev => ({
			...prev,
			[menuName]: !prev[menuName],
		}))
	}

	return (
		<footer>
			<div className='footer__hrefs'>
				{/* Контакты */}
				<div>
					<p onClick={() => toggleMenu('contacts')} className='footer__span'>
						<span className='footer__title'>Контакты</span>
						<span className={`arrow ${openMenus.contacts ? 'open' : ''}`}>
							▼
						</span>
					</p>
					<div
						className={`footer__dropdown ${openMenus.contacts ? 'open' : ''}`}
					>
						<a href='#'>+38 (066) 81-600-81 </a>
						<a href='#'>+38 (098) 81-600-81</a>
						<a href='#'>+38 (073) 81-600-81</a>
						<p>Звонки с 9:00 до 18:00 (пн - вс)</p>
						<p className='footer__span'>Следите за нами:</p>
						<div className='logo-web'>
							<a href='#'>
								<img className='logo-soc-web' src={telegram} alt='telegram' />
							</a>
							<a href='#'>
								<img className='logo-soc-web' src={insta} alt='insta' />
							</a>
						</div>
					</div>
				</div>

				{/* Магазин */}
				<div>
					<p onClick={() => toggleMenu('shop')} className='footer__span'>
						<span className='footer__title'>Магазин</span>
						<span className={`arrow ${openMenus.shop ? 'open' : ''}`}>▼</span>
					</p>
					<div className={`footer__dropdown ${openMenus.shop ? 'open' : ''}`}>
						<a href='#'>Новинки</a>
						<a href='#'>Акции</a>
						<a href='#'>Новости</a>
						<a href='#'>Отзывы</a>
						<a href='#'>Вакансии</a>
						<a href='#'>Карта сайта</a>
					</div>
				</div>

				{/* Клиентам */}
				<div>
					<p onClick={() => toggleMenu('clients')} className='footer__span'>
						<span className='footer__title'>Клиентам</span>
						<span className={`arrow ${openMenus.clients ? 'open' : ''}`}>
							▼
						</span>
					</p>
					<div
						className={`footer__dropdown ${openMenus.clients ? 'open' : ''}`}
					>
						<a href='#'>О компании</a>
						<a href='#'>Доставка и оплата</a>
						<a href='#'>Политика конфиденциальности</a>
						<a href='#'>Публичная оферта</a>
					</div>
				</div>
			</div>

			<div className='footer-line'></div>
			<p className='footer-line-after'>
				2025 © MobiLand: интернет-магазин мобильных телефонов
			</p>
		</footer>
	)
}

export default Footer
