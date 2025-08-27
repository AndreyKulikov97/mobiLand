import React from 'react'
import BasketCard from '../BasketCard/BasketCard'
import { useSelector } from 'react-redux'

function BasketList() {
	const { basketPhone } = useSelector(store => store.basket)

	return (
		<>
			{basketPhone.map(item => (
                <BasketCard key={item.id} phone={ item } />
			))}
		</>
	)
}

export default BasketList
