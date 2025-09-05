import React from 'react'
import { useSelector } from 'react-redux'
import './productList.css'
import LoadProductList from './LoadProductList'
import ProductListCard from './ProductListCard'


function ProductList() {

	const { phones, status, filteredPhones, selectedBrands } = useSelector(store => store.products)

  
  return (
		<div className='product-card-wrapper'>
			{status === 'loading' ? (
				<LoadProductList />
			) : Array.isArray(phones) ? (
				<ProductListCard phones={{ phones, filteredPhones, selectedBrands }} />
			) : (
				<p>Ошибка: в ближайшее время исправим</p>
			)}
		</div>
	)
}

export default ProductList