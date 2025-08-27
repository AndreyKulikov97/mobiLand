import React from 'react'
import './footer.css'
import telegram from '../../assets/icons/icons8-instagram.svg'
import insta from '../../assets/icons/icons8-телеграм.svg'

function Footer()  {
	return (
		<footer>
			<div className='footer__hrefs'>
				<div>
					<p>
						<span className='footer__span'>Наш магазин</span>
					</p>
					<a href='#'>+38 (066) 81-600-81 </a>
					<a href='#'>+38 (098) 81-600-81</a>
					<a href='#'>+38 (073) 81-600-81</a>
					<p>Звонки с 9:00 до 18:00(без выходниых)</p>
					<p>
						<span className='footer__span'>Следите за нами:</span>
					</p>
					<div className='logo-web'>
						<a href='#'>
							<img className='logo-soc-web' src={telegram} alt='telegram' />
						</a>
						<a href='#'>
							<img className='logo-soc-web' src={insta} alt='insta' />
						</a>
					</div>
				</div>
				<div>
					<p>
						<span className='footer__span'>Магазин</span>
					</p>
					<a href='#'>Новинки</a>
					<a href='#'>Акции</a>
					<a href='#'>Новости</a>
					<a href='#'>Отзывы</a>
					<a href='#'>Вакансии</a>
					<a href='#'>Карта сайта</a>
				</div>
				<div>
					<p>
						<span className='footer__span'>Клиентам</span>
					</p>
					<a href='#'>О компании</a>
					<a href='#'>Доставка и оплата</a>
					<a href='#'>Политика конфиденциальности</a>
					<a href='#'>Публичная оферта</a>
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
