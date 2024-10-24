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

const enrichProductData = (products) => {
    return products.map((product) => {
        const conditionOptions = ["New", "Used", "Not Specified"];
        product.condition = conditionOptions[Math.floor(Math.random() * conditionOptions.length)];

        const locationOptions = ["North America", "Europe"];
        product.itemLocation = locationOptions[Math.floor(Math.random() * locationOptions.length)];

        const showOnlyOptions = ["Sold Items", "Returns Accepted"];
        product.showOnly = showOnlyOptions[Math.floor(Math.random() * showOnlyOptions.length)];

        return product;
    });
};

export const getProductsReducer = createReducer(initialState, (builder) => {
    builder.addCase(getProductsRequest.fulfilled, (state, action) => {
        const enrichedProducts = enrichProductData(action.payload.products);
        state.products = enrichedProducts;
    });
    
    builder.addCase(getProductsRequest.rejected, (action) => {
        console.log(action.payload, "reducer error");
    });
});

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