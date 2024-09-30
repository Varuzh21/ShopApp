import {createReducer} from '@reduxjs/toolkit'
import { getProductsRequest, getCategoriesRequest, getSingleProductRequest} from '../actions/products'


const initialState = {
    products: [],
    category: [],
    product: []
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

export const getSingleProductReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getSingleProductRequest.fulfilled, (state, action) =>{
        state.product = action.payload
    })
})