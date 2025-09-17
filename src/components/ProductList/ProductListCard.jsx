import ProductCard from '../ProductCard/ProductCard'

const ProductListCard = ({ phones }) => {
	let phoneToShow = []

	if (phones.filteredPhones.length > 0) {
		// поиск
		phoneToShow = phones.filteredPhones
	} else if (phones.filteredByFilters.length > 0) {
		// результат по всем фильтрам
		phoneToShow = phones.filteredByFilters
	} else {
		// все товары
		phoneToShow = phones.phones
	}

	const filtersActive =
		(phones.selectedBrands?.length ?? 0) ||
		(phones.selectedScreenType?.length ?? 0) ||
		(phones.selectedMemory?.length ?? 0)
	const noMatches =
		filtersActive &&
		phones.filteredByFilters.length === 0 &&
		phones.filteredPhones.length === 0
	if (noMatches) {
		return <p style={{padding:'20px',fontSize:'32px',color:'#555',textAlign:'center'}}>Нет совпадений</p>
	}
	console.log(phones.filteredByFilters)

	return phoneToShow.map(item => <ProductCard key={item.id} product={item} />)
}

export default ProductListCard
