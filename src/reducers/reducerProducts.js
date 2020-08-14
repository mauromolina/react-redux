import {
    ADD_PRODUCT,
    SUCCESFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT
} from '../types';
import { act } from 'react-dom/test-utils';

const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {

        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        
        case SUCCESFULL_ADD_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }

        case FAILED_ADD_PRODUCT:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            
        default:
            return state;
    }
}