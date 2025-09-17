import React from 'react'
import './productCard.css'
import { Link } from 'react-router-dom';

function ProductCard(props) {
	
  	let products = props.product;
	let screen = props.product.screen;
	let camera = props.product.camera;
	let body = props.product.body;
  
	return (
		<Link to={`/phone/${props.product.id}`} style={{ textDecoration: 'none' }}>
			<div className='product-card'>
				<img src={props.product.image} alt='' className='product-card__image' />
				<div className='product-card__info'>
					<div className='product-card__title'>
						<h3 className='product-card__brand'>{products.name}</h3>
						<p className='product-card__price'>
							{products.price.toLocaleString('uk-UA')} грн
						</p>
					</div>

					<div className='product-card__desc'>
						<ul>
							<li>
								<strong>Экран:</strong> {screen.size}, {screen.type},
								{screen.resolution}, {screen.ppi}ppi, {screen.refreshRate}
							</li>
							{camera.modules && (
								<li>
									<strong>Камера:</strong> {camera.modules} модуля,{' '}
									{camera.megapixels.join(', ')}
								</li>
							)}
							<li>
								<strong>Видео:</strong> {camera.features.join(', ')}
							</li>
							<li>
								<strong>Память:</strong> {products.memory}
							</li>
						</ul>
						<ul>
							<li>
								<strong>ОЗУ:</strong> {products.ram}
							</li>
							<li>
								<strong>Процессор:</strong> {products.processor}
							</li>
							<li>
								<strong>Батарея:</strong> {products.battery}
							</li>
							<li>
								<strong>Корпус:</strong> {body.material}, {body.weight},{' '}
								{body.thickness}
							</li>
						</ul>
					</div>

					
				</div>
			</div>
		</Link>
	)
}

export default ProductCard

