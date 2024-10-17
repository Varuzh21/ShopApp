import {postUserReducer} from './users';
import { 
    getProductsReducer,
    getCategoriesReducer,
    getSingleProductReducer,
    getSearchProductReducer,
    getProductsByCategoryReducer
} from './products';
import {getAllCartReducer} from './cart'

const reducer = {
    postUserReducer,
    getProductsReducer,
    getCategoriesReducer,
    getSingleProductReducer,
    getSearchProductReducer,
    getAllCartReducer,
    getProductsByCategoryReducer
}

export default reducer