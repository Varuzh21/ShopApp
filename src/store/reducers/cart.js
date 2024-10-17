import { createReducer } from '@reduxjs/toolkit';
import { getAllCart } from '../actions/cart';

const initialState = {
    cart: [],   
}

export const getAllCartReducer = createReducer(initialState, (builder) => {
    builder.addCase(getAllCart.fulfilled, (state, action) => {
        state.cart = action.payload.carts
    })
    builder.addCase(getAllCart.rejected, (state, action) => {
        console.log(action.payload, "reducer error");
    })
})