import {
    ADD_PRODUCT,
    SUCCESFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT
} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}