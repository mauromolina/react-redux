import {
    ADD_PRODUCT,
    SUCCESFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT
} from '../types';

// Crear nuevos productos
export function newProductAction(product) {
    return () => {
        console.log(product);
    }
}