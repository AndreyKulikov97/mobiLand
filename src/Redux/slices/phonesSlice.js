import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import products from '../../data/products.json'

const initialState = {
	phones: [],
	status: null,
	errors: null,
	topInfo: [],
	searchPhone: {
		phone: null,
		status: 'loading',
		error: null,
	},
	mainInfo: [],
	characteristics: {
		phone: null,
		status: 'loadong',
		error: null
	},
	filteredPhones: [],
	filteredBrand: [],
	selectedBrands: []
}

export const fetchPhones = createAsyncThunk('phone/fetchphones', async () => {
	try {
		const phone = products
		if (!phone) {
			throw new Error('Error on server, sorry...')
		}
		return phone
	} catch (error) {
		console.error(error)
		throw error
	}
})

export const fetchInfoTop = createAsyncThunk('phone/fetchInfoTop', async () => {
	const info = await fetch(`/data/infoTop.json?ts=${Date.now()}`)
	if (!info.ok) {
		throw new Error('Ошибка на сервере')
	}
	const data = await info.json()
	return data
})

export const fetchMainInfo = createAsyncThunk('phone/fetchMainInfo', async () => {
	const response = await fetch(`/data/mainInfoFhone.json?ts=${Date.now()}`)
	if (!response.ok) {
		throw new Error('Ошибка на сервере')
	}
	const data = await response.json()
	return data
})

const phonesSlice = createSlice({
	name: 'phone',
	initialState,
	reducers: {
		searchPhoneInState: (state, action) => {
			const { id } = action.payload
			const searchPhones = state.topInfo.find(phone => phone.id === id)
			state.searchPhone.phone = searchPhones
			state.searchPhone.status = 'fulfilled'
		},
		searchCharacteristics: (state, action) => {
			const { id } = action.payload;
			const searchMainInfoPhones = state.mainInfo.find(phone => phone.id === id)
			
			state.characteristics.phone = searchMainInfoPhones
			state.characteristics.status = 'fulfilled'

		},
		filterPhones: (state, action) => {
			if (action.payload === '') {
				state.filteredPhones = []
			} else {
				const searchTerm = action.payload.toLowerCase()
				state.filteredPhones = state.phones.filter(phone =>
					phone.name.toLowerCase().includes(searchTerm)
				)
			}
		},
		toggleBrands: (state, action) => {
			const brand = action.payload;
			//товар с этим брэндом
			const phonesByBrand = state.phones.filter(item => item.brand === brand);
			//если уже выбран этот брэнд => снимаем галочку(убираем товары из массива)
			const isAlreadySelected = state.selectedBrands.some(item => item.brand === brand);

			if (isAlreadySelected) {
				state.selectedBrands = state.selectedBrands.filter(item => item.brand !== brand)
			} else {
				//добавляем товары этого бренда
				state.selectedBrands = [...state.selectedBrands, ...phonesByBrand]
			}

			state.selectedBrands.sort((a, b) => a.name.localeCompare(b.name))
			// const brand = state.phones.filter((item, _) => item.brand.includes(action.payload))
			// state.selectedBrands = brand;


			// if (state.selectedBrands.includes(brand)) {
			// 	state.selectedBrands = state.selectedBrands.filter(item => item !== brand)
			// } else {
			// 	state.selectedBrands.push(brand)
			// }
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPhones.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchPhones.fulfilled, (state, action) => {
				state.phones = action.payload
				state.filteredBrand = [...new Set(action.payload.map(item => item.brand))]
				state.status = 'fulfilled'
			})
			.addCase(fetchPhones.rejected, (state, action) => {
				state.status = 'loading'
				state.errors = action.error.message
				console.error(action.error.message)
			})
			.addCase(fetchInfoTop.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchInfoTop.fulfilled, (state, action) => {
				state.topInfo = action.payload
				state.status = 'fulfilled'
			})
			.addCase(fetchInfoTop.rejected, (state, action) => {
				state.status = 'loading'
				state.errors = action.error.message
				console.error(action.error.message)
			})
			.addCase(fetchMainInfo.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchMainInfo.fulfilled, (state, action) => {
				state.mainInfo = action.payload
				state.status = 'fulfilled'
			})
			.addCase(fetchMainInfo.rejected, (state, action) => {
				state.status = 'loading'
				state.errors = action.error.message
				console.error(action.error.message)
			})
	},
})

export default phonesSlice.reducer
export const { searchPhoneInState, searchCharacteristics, filterPhones, toggleBrands } = phonesSlice.actions;
