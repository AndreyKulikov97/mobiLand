import React, { useEffect } from 'react'
import ArrowLeft from '../../assets/icons/icons8-назад-48.png'
import './basket.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BasketList from '../../components/BasketList/BasketList'
import { delAllBasketPhone } from '../../Redux/slices/basketSlice'

function Basket() {
	const dispatch = useDispatch()

	const { basketPhone } = useSelector(store => store.basket)

	const negative = useNavigate()
 
	const handleGoBack = () => {
		negative(-1)
	}

	function getBasketText(count) {
		if (count === 0) {
			return count + ' товаров'
		} else if (count === 1) {
			return count + ' товар'
		} else if (count > 1 && count < 5) {
			return count + ' товара'
		} else {
			return count + ' товаров'
		}
	}

	function totalPrice(basketPhone) {
		return basketPhone
			.reduce((sum, phone) => sum + phone.priceBuy, 0)
			.toLocaleString('uk-UA')
	}

	function totalBonusAccount(basketPhone) {
		return basketPhone
			.reduce((sum, phone) => sum + phone.bonusAccount, 0)
			.toLocaleString('uk-UA')
	}

	useEffect(() => {
		document.body.classList.add('basket-page')
		return () => {
			document.body.classList.remove('basket-page')
		}
	}, [])

	return (
		<section>
			<div className='basket_top'>
				<div className='basket_top-main'>
					<img
						className='basket_top-img'
						src={ArrowLeft}
						alt='ArrowLeft'
						onClick={handleGoBack}
					/>
					<p className='basket_top-title'>
						Товары в корзине: {basketPhone.length}
					</p>
				</div>
			</div>

			<div className='basket-container'>
				{/* Левая колонка */}
				<div className='basket-left'>
					<div className='basket-header-del'>
						<span onClick={() => dispatch(delAllBasketPhone())}>
							🗑 Удалить все
						</span>
					</div>
					<BasketList />
				</div>

				{/* Правая колонка */}
				<div className='basket-right'>
					<div className='bonus-info'>
						<span>🔄 Узнать цену с учетом бонусов</span>
						<a href='#'>Ввойти ➡</a>
					</div>

					<div className='summary'>
						<button className='checkout-btn'>Перейти к оформлению</button>
						<div className='summary-row'>
							<span>{getBasketText(basketPhone.length)} на суму </span>
							<span>
								<b>{totalPrice(basketPhone)} ₴</b>
							</span>
						</div>
						<div className='bonus-account'>
							<span>Бонусов на счету</span>
							<span>
								<b>{totalBonusAccount(basketPhone)} ₴</b>
							</span>
						</div>

						<div className='summary-total'>
							<b>Общая сума</b>
							<b>{totalPrice(basketPhone)} ₴</b>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Basket
