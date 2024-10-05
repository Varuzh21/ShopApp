import {createAsyncThunk} from '@reduxjs/toolkit'
import Api from "../../Api";

export const getProductsRequest = createAsyncThunk('get-Products',
    async (payload,thunkAPI) =>{
        try {
            const {data}= await Api.getProducts(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const getCategoriesRequest = createAsyncThunk("get-categories",
    async (payload, thunkAPI) =>{
        try {
            const {data}= await Api.getCategories(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const getSingleProductRequest = createAsyncThunk("get-single-product",
    async (payload, thunkAPI) =>{
        try {
            const {data}= await Api.getProduct(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

export const getSearchProductRequest = createAsyncThunk("post-search-product",
    async (payload, thunkAPI) =>{
        try {
            const {data} = await Api.getSearchProduct(payload);
            return data
        }catch (e){
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)