import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonPhoneCard = props => (
	<ContentLoader
		speed={2}
		width='100%'
		height={321}
		viewBox='0 0 900 321'
		backgroundColor='#696969'
		foregroundColor='#bababa'
		{...props}
	>
		<rect x='240' y='-1' rx='5' ry='5' width='576' height='37' />
		<rect x='240' y='48' rx='5' ry='5' width='220' height='29' />
		<rect x='240' y='106' rx='5' ry='5' width='308' height='16' />
		<rect x='0' y='0' rx='0' ry='0' width='224' height='288' />
		<rect x='560' y='106' rx='5' ry='5' width='131' height='16' />
		<rect x='240' y='254' rx='5' ry='5' width='576' height='34' />
		<rect x='240' y='140' rx='5' ry='5' width='308' height='16' />
		<rect x='240' y='173' rx='5' ry='5' width='308' height='16' />
		<rect x='240' y='205' rx='5' ry='5' width='308' height='16' />
		<rect x='560' y='140' rx='5' ry='5' width='131' height='16' />
		<rect x='560' y='173' rx='5' ry='5' width='131' height='16' />
		<rect x='561' y='205' rx='5' ry='5' width='131' height='16' />
	</ContentLoader>
)

export default SkeletonPhoneCard
