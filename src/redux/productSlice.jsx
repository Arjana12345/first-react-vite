import {createAsyncThunk} from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductData = createAsyncThunk('products', async () => {
    const response = await axios.get("https://dummyjson.com/products");
    //console.log(response.data.products);
    return response.data.products; // The value returned here becomes the `action.payload` in the fulfilled reducer
  
})



    const initialState = {
        items: [],
        status: undefined,
        error: null
    }


    const productSlice = createSlice({
        name: 'productSlice',
        initialState,
        extraReducers: (builder) => {
            builder.addCase(getProductData.fulfilled,(state,action)=>{
                state.status = "SUCCESS",
                state.items = action.payload
            })
        }
        
    })


    export default productSlice.reducer