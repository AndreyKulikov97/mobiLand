import React, { useState } from 'react'
import ArrowRight from '../../assets/icons/icons8-стрелка-влево-в-круге-2-50.png'
import ArrowLeft from '../../assets/icons/icons8-стрелка-вправо-в-круге-2-50.png'
import './slider.css'

const Slider = ({imagePhone}) => {
	const images = imagePhone?.images || []

	const [index, setIndex] = useState(0)

	const prevSlide = () => {
		setIndex((index - 1 + images.length) % images.length)
	}

	const nextSlide = () => {
		setIndex((index + 1) % images.length)
	}

	const goToSlide = slideIndex => {
		setIndex(slideIndex)
	}


	return (
		<div className='slider'>
			<div className='slider-container'>
				<img
					src={images[index]}
					alt={`slide-${index}`}
					className='slider-img'
				/>
			</div>

			<img
				onClick={prevSlide}
				className='controlls prev'
				src={ArrowRight}
				alt='ArrowRight'
			/>

			<img
				onClick={nextSlide}
				className='controlls next'
				src={ArrowLeft}
				alt='ArrowLeft'
			/>
			<div className='dotsSlider'>
				{images.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						className={`dots ${index === slideIndex ? 'active' : ''}`}
						onClick={() => goToSlide(slideIndex)}
					>
						●
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider
