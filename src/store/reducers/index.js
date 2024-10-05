import {postUserReducer} from './users';
import { 
    getProductsReducer,
    getCategoriesReducer,
    getSingleProductReducer,
    getSearchProductReducer
} from './products';

const reducer = {
    postUserReducer,
    getProductsReducer,
    getCategoriesReducer,
    getSingleProductReducer,
    getSearchProductReducer
}

export default reducer