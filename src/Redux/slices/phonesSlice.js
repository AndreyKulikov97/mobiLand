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
		error: null,
	},
	filteredPhones: [],
	filteredBrand: [],
	selectedBrands: [],
	filteredScreenType: [],
	selectedScreenType: [],
	filteredByFilters: [],
	filteredMemory: [],
	selectedMemory: []
}

function applyAllFilters(state) {
	state.filteredByFilters = state.phones.filter(phone => {
		const byBrand = state.selectedBrands.length === 0 || state.selectedBrands.includes(phone.brand)
		const byScreen = state.selectedScreenType.length === 0 || state.selectedScreenType.includes(phone.screen.type)
		const byMemory = state.selectedMemory.length === 0 || state.selectedMemory.includes(phone.memory)
		return byBrand && byScreen && byMemory;
	})
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
			if (state.selectedBrands.includes(brand)) {
				state.selectedBrands = state.selectedBrands.filter(item => item !== brand)
			} else {
				state.selectedBrands.push(brand)
			}

			applyAllFilters(state)
		},
		toggleScreen: (state, action) => {
			const screenType = action.payload;
			if (state.selectedScreenType.includes(screenType)) {
				state.selectedScreenType = state.selectedScreenType.filter(item => item !== screenType)
			} else {
				state.selectedScreenType.push(screenType)
			}
		
			applyAllFilters(state)
		},
		toggleMemory: (state, action) => {
			const memory = action.payload;
			if (state.selectedMemory.includes(memory)) {
				state.selectedMemory = state.selectedMemory.filter(item => item !== memory)
			} else {
				state.selectedMemory.push(memory)
			}

			applyAllFilters(state)
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
				state.filteredScreenType = [...new Set(action.payload.map(item => item.screen.type))]
				state.filteredMemory = [...new Set(action.payload.map(item => item.memory))]
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
export const {
	searchPhoneInState,
	searchCharacteristics,
	filterPhones,
	toggleBrands,
	toggleScreen,
	toggleMemory,
} = phonesSlice.actions
