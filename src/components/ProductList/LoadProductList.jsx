import SkeletonPhoneCard from "../Skeletons/SkeletonPhoneCard"

const LoadProductList = () => {
    return [...new Array(8)].map((_, index) => (
			<SkeletonPhoneCard key={index} />
		))
}

export default LoadProductList