import {createReducer} from '@reduxjs/toolkit'
import { getProductsRequest, getCategoriesRequest} from '../actions/products'


const initialState = {
    products: [],
    category: []
}

export const getProductsReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getProductsRequest.fulfilled, (state, action) =>{
        state.products = action.payload
    })
    builder.addCase(getProductsRequest.rejected, (state, action) =>{
        console.log(action.payload, "reducer error");
    })
})

export const getCategoriesReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getCategoriesRequest.fulfilled, (state, action) =>{
        state.category = action.payload
    })
})