import React, { useRef, useState } from 'react'
import './descriptionAccordion.css'

function DescriptionAccordion({ description }) {
	const [isExpanded, setIsExpanded] = useState(false)
	const contentRef = useRef(null)

	return (
		<div className='accordion'>
			<h3>Описание</h3>
			<div
				ref={contentRef}
				className={`accordion__content ${isExpanded ? 'expanded' : ''}`}
			>
				{description}
			</div>
			<button
				className='accordion__button'
				onClick={() => setIsExpanded(!isExpanded)}
			>
				{isExpanded ? 'Свернуть' : 'Развернуть'}
			</button>
		</div>
	)
}

export default DescriptionAccordion
