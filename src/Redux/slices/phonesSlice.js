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
	}
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

		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchPhones.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchPhones.fulfilled, (state, action) => {
				state.phones = action.payload
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
export const { searchPhoneInState, searchCharacteristics } = phonesSlice.actions
