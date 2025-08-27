import { configureStore } from "@reduxjs/toolkit";
import products from './slices/phonesSlice'
import basket from './slices/basketSlice'


const store = configureStore({
    reducer: {
        products,
        basket
    }
});

export default store