import { createAsyncThunk } from '@reduxjs/toolkit';
import Api from "../../Api";

export const getAllCart = createAsyncThunk('get-cart',
    async (payload, thunkAPI) => {
        try {
            const { data } = await Api.getAllCart(payload);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)