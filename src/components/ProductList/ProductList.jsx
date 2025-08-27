import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector } from 'react-redux'
import SkeletonPhoneCard from '../Skeletons/SkeletonPhoneCard'
import './productList.css'


function ProductList() {

	const { phones, status } = useSelector(store => store.products)

  
  return (
	  <div className='product-card-wrapper'>
		  {status === 'loading' ? (
			  [...new Array(8)].map((_, index) => <SkeletonPhoneCard key={index} />)
			) : Array.isArray(phones) ? (
				phones.map(item => <ProductCard key={item.id} product={item} />)
			) : (
				<p>Ошибка: product не массив</p>
			)
		  }
			
		</div>
	)
}

export default ProductList