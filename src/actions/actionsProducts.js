import {
    ADD_PRODUCT,
    SUCCESFULL_ADD_PRODUCT,
    FAILED_ADD_PRODUCT
} from '../types';

import axiosClient from '../config/axios';
import swal from 'sweetalert2';

// Crear nuevos productos
export function newProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct());
        try {
            // insertar en la api
            await axiosClient.post('/productoss', product);
            // si todo sale bien
            dispatch(succesfullAddProduct(product));
            swal.fire(
                'Correcto!',
                'El producto se agregó correctamente!',
                'success'
            )
        } catch (error) {
            console.log(error);
            dispatch(failedAddProduct(true));
            swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Ocurrió un error! Intente de nuevo más tarde...'
            })
        }
    }
}


// Agregar un producto
const addProduct = () => ({
    type: ADD_PRODUCT
})

// Se guarda bien el producto
const succesfullAddProduct = product => ({
    type:SUCCESFULL_ADD_PRODUCT,
    payload: product
})

// No se guarda bien
const failedAddProduct = status => ({
    type: FAILED_ADD_PRODUCT,
    payload: status
})