import { createSlice } from '@reduxjs/toolkit'

function loadBasketPhone() {
    try {
			const dataLocal = localStorage.getItem('basketPhone')
			const parsed = dataLocal ? JSON.parse(dataLocal) : []
			return Array.isArray(parsed) ? parsed : []
		} catch {
			return []
		}
}

const initialState = {
	basketPhone: loadBasketPhone(),
	status: 'loading',
}


const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
        addBasketPhone: (state, action) => {
            const dataPhone = action.payload;
            const isAlreadyBasket = state.basketPhone.some(phone => phone.id === dataPhone.id)
            

            if (!isAlreadyBasket) {
				state.basketPhone.push(dataPhone)
				localStorage.setItem('basketPhone', JSON.stringify(state.basketPhone))
			}
		},
		removeBasketPhone: (state, action) => {
			const dataPhone = action.payload;
			state.basketPhone = state.basketPhone.filter(phone => phone.id !== dataPhone.id)
			localStorage.setItem('basketPhone', JSON.stringify(state.basketPhone))
		},
		delAllBasketPhone: (state) => {
			state.basketPhone = [];
			localStorage.setItem('basketPhone', JSON.stringify(state.basketPhone))
		}
	},
})

export default basketSlice.reducer
export const { addBasketPhone, removeBasketPhone, delAllBasketPhone } = basketSlice.actions
