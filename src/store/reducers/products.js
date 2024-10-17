import { createReducer } from '@reduxjs/toolkit'
import {
    getProductsRequest,
    getCategoriesRequest,
    getSingleProductRequest,
    getSearchProductRequest,
    getProductsByCategoryRequest,
} from '../actions/products'


const initialState = {
    products: [],
    category: [],
    product: [],
    searchResult: [],
    categoryByName: [],
}

export const getProductsReducer = createReducer(initialState, (builder) => {
    builder.addCase(getProductsRequest.fulfilled, (state, action) => {
        state.products = action.payload
    })
    builder.addCase(getProductsRequest.rejected, (state, action) => {
        console.log(action.payload, "reducer error");
    })
})

export const getCategoriesReducer = createReducer(initialState, (builder) => {
    builder.addCase(getCategoriesRequest.fulfilled, (state, action) => {
        state.category = action.payload
    })
})

export const getProductsByCategoryReducer = createReducer(initialState, (builder) => {
    builder.addCase(getProductsByCategoryRequest.fulfilled, (state, action) => {
        state.categoryByName = action.payload
    })
})

export const getSingleProductReducer = createReducer(initialState, (builder) => {
    builder.addCase(getSingleProductRequest.fulfilled, (state, action) => {
        state.product = action.payload
    })
})

export const getSearchProductReducer = createReducer(initialState, (builder) => {
    builder.addCase(getSearchProductRequest.fulfilled, (state, action) => {
        state.searchResult = action.payload
    })
})