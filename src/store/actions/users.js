import {createAsyncThunk} from '@reduxjs/toolkit'
import Api from "../../Api";

export const postUserRequest = createAsyncThunk('post-User',
    async (payload,thunkAPI) =>{
        try {
            console.log(payload, "actions");

            return await Api.postUser(payload);
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)