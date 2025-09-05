import ProductCard from "../ProductCard/ProductCard"

const ProductListCard = ({ phones }) => {
    console.log(phones);
    
    // const phoneToShow = phones.filteredPhones.length > 0 ? phones.filteredPhones : phones.phones
    let phoneToShow = [];
    if (phones.filteredPhones.length > 0) {
        phoneToShow = phones.filteredPhones
    } else if (phones.selectedBrands.length > 0) {
        phoneToShow = phones.selectedBrands
    } else {
        phoneToShow = phones.phones
    }

	return phoneToShow.map(item => <ProductCard key={item.id} product={item} />)
}

export default ProductListCard