import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeBasketPhone } from '../../Redux/slices/basketSlice'
import { Link } from 'react-router-dom'

export default function BasketCard(props) {
	const info = props.phone
	
	const dispatch = useDispatch()
	const [quant, setQuant] = useState(1)
    
    function pricePhone(info) {
        return quant * info.priceBuy
    }

	return (
		<div className='basket-item'>
			<Link to={`/phone/${info.id}`} style={{ textDecoration: 'none' }}>
				<img src={info.images[0]} alt='Image.Phone' className='basket-img' />
			</Link>

			<div className='basket-info'>
				<Link
					to={`/phone/${props.phone.id}`}
					style={{ textDecoration: 'none' }}
				>
					<h3 className='basket-title'>{info.name}</h3>
				</Link>

				<p className='basket-code'>Код товара: {info.productCode}</p>
				<div className='basket-actions'>
					<span onClick={() => dispatch(removeBasketPhone(info))}>
						🗑 Удалить
					</span>
				</div>
				<div className='basket-price'>
					<p className='basket-current'>
						{pricePhone(info).toLocaleString('uk-UA')} ₴
					</p>
				</div>
			</div>
		</div>
	)
}
