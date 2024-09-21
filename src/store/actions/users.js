import {createAsyncThunk} from '@reduxjs/toolkit'
import Api from "../../Api";

export const postUserRequest = createAsyncThunk('post-User',
    async (payload,thunkAPI) =>{
        try {
            const {data}= await Api.postUser(payload); 
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)