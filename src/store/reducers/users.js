import {createReducer} from '@reduxjs/toolkit'
import { postUserRequest,} from '../actions/users'


const initialState = {
    user: [],
    userToken: null,
}

export const postUserReducer = createReducer(initialState, (builder) =>{
    builder.addCase(postUserRequest.fulfilled, (state, action) =>{
        console.log(action.payload.data, "reducer");
        state.user = action.payload.data,
        state.userToken = action.payload.data.token
    })
    builder.addCase(postUserRequest.rejected, (state, action) =>{
        console.log(action.payload, "reducer error");
    })
})