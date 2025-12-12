import { createSlice } from "@reduxjs/toolkit"

const initialState = {
//value:0
items:[]
}

const addToCart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state,action) => {
                //state.value+=1;
                console.log(action);
                state.items.push(action.payload)
        },
        removeItem: (state,action) => {
                //state.value -= 1;
                console.log(action)
                const filteredCart =state.items.filter(data => data.id != action.payload)
                state.items = filteredCart
                },
    }
})

export const {addItem, removeItem} = addToCart.actions // action

export default addToCart.reducer // reducer



