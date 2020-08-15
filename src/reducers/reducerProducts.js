import {
    ADD_PRODUCT,
    SUCCESSFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT,
    START_PRODUCTS_DOWNLOAD,
    SUCCESSFULL_PRODUCTS_DOWNLOAD,
    FAILED_PRODUCTS_DOWNLOAD
} from '../types';
import { act } from 'react-dom/test-utils';

const initialState = {
    products: [],
    error: null,
    loading: false
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
            return {
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

        default:
            return state;
    }
}