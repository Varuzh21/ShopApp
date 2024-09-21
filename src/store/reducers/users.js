import {createReducer} from '@reduxjs/toolkit'
import { postUserRequest,} from '../actions/users'


const initialState = {
    user: [],
    userToken: '',
    error: ''
}

export const postUserReducer = createReducer(initialState, (builder) =>{
    builder.addCase(postUserRequest.fulfilled, (state, action) =>{
        state.user = action.payload,
        state.userToken = action.payload.token
    })
    builder.addCase(postUserRequest.rejected, (state, action) =>{
        console.log(action.payload.message, "reducer error");
        state.error = action.payload.message;
    })
})