import {
    ADD_PRODUCT,
    SUCCESSFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT,
    START_PRODUCTS_DOWNLOAD,
    SUCCESSFULL_PRODUCTS_DOWNLOAD,
    FAILED_PRODUCTS_DOWNLOAD,
    GET_DELETE_PRODUCT,
    SUCCESSFULL_DELETE_PRODUCT,
    FAILED_DELETE_PRODUCT,
    GET_UPDATE_PRODUCT,
    SUCCESSFULL_UPDATE_PRODUCT,
    FAILED_UPDATE_PRODUCT
} from '../types';
import { act } from 'react-dom/test-utils';

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    updateProduct: null
}

export default function(state = initialState, action) {
    switch(action.type) {

        case START_PRODUCTS_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        
        case SUCCESSFULL_ADD_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        
        case FAILED_PRODUCTS_DOWNLOAD:
        case FAILED_ADD_PRODUCT:
        case FAILED_DELETE_PRODUCT:
            return  {
                ...state,
                loading: false,
                error: action.payload
            }

        case SUCCESSFULL_PRODUCTS_DOWNLOAD:
            return {
                ...state,
                loading:false,
                error: null,
                products: action.payload
            }
        case GET_DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload
            }

        case SUCCESSFULL_DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter( product => product.id !== state.deleteProduct),
                deleteProduct: null
            }
        
        case GET_UPDATE_PRODUCT:
            return {
                ...state,
                updateProduct: action.payload
            }

        default:
            return state;
    }
}