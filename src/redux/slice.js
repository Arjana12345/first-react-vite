import { createSlice } from "@reduxjs/toolkit"

const initialState = {
value:0
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state) => {
                state.value+=1;
        },
        removeItem: (state) => {
                state.value -= 1;
                },
    }
})

export const {addItem, removeItem} = addToCart.actions // action

export default addToCart.reducer // reducer



