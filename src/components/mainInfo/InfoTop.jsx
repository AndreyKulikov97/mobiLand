import React from 'react'
import './infoTop.css'
import Star from '../../assets/icons/icons8-звезда-48.png'
import Vostok from '../../assets/icons/vostok.png'
import Privat from '../../assets/icons/privatbank.png'
import Pumb from '../../assets/icons/pumb.jpg'
import DescriptionAccordion from './DescriptionAccordion/DescriptionAccordion'
import { useDispatch } from 'react-redux'
import { addBasketPhone } from '../../Redux/slices/basketSlice'

function InfoTop({ info }) {
	// if (!info) return null // защита от undefined
	
	
	const dispatch = useDispatch();

	return (
		<div className='main__info'>
			<div className='main__info-title'>
				<h1>{info.name}</h1>
				<div className='wrap-info-rating'>
					<p className={`availability ${!info.isAvailable ? 'not' : ''}`}>
						наличие
					</p>
					<div className='rating'>
						<img src={Star} alt='Star' />
						<p>{info.rating}</p>
					</div>
					<p className='code-product'>
						<span className='code-style'>Код: {info.productCode}</span>
					</p>
				</div>
			</div>

			<div className='main__info-color'>
				<div className='color-model'>{info.color?.join(' ')}</div>
			</div>

			<div className='main__info-price'>
				<div className='price-buy'>
					<p>
						{info.priceBuy.toLocaleString('uk-UA')}{' '}
						<span className='currency'>₴</span>
					</p>
					<button onClick={() => dispatch(addBasketPhone(info))}>
						<p>🛒Купить</p>
					</button>
				</div>
				<div className='bonus'>
					<p>
						<span className='bonus-rate'>+{info.bonusAccount}</span>{' '}
						<span className='bonus-currency'>₴</span> на бонусный счет
					</p>
				</div>
			</div>

			<div className='main__info-credit'>
				<div className='credit'>
					<p>
						от {info.credit} <span className='currency'>₴</span>
					</p>
					<button className='credit-btn'>🛒Купить в кредит</button>
				</div>
				<div className='banks'>
					<div className='privat'>
						<img src={Privat} alt='Privat' />
					</div>
					<div className='vostok'>
						<img src={Vostok} alt='Vostok' />
					</div>
					<div className='pumb'>
						<img src={Pumb} alt='Pumb' />
					</div>
				</div>
			</div>
			<DescriptionAccordion description={info.description} />
		</div>
	)
}

export default InfoTop

