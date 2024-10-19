import {createReducer} from '@reduxjs/toolkit'
import { postUserRequest } from '../actions/users'


const initialState = {
    user: {},
    userToken: null,
    error: null,
}

export const postUserReducer = createReducer(initialState, (builder) =>{
    builder.addCase(postUserRequest.fulfilled, (state, action) =>{
        state.user = action.payload,
        state.userToken = action.payload.accessToken
    })
    builder.addCase(postUserRequest.rejected, (state, action) =>{
        console.log(action.payload.message, "reducer error");
        state.error = action.payload.message;
    })
})