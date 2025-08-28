import ProductCard from "../ProductCard/ProductCard"

const ProductListCard = ({ phones }) => {
    const phoneToShow = phones.filteredPhones.length > 0 ? phones.filteredPhones : phones.phones

	return phoneToShow.map(item => <ProductCard key={item.id} product={item} />)
}

export default ProductListCard